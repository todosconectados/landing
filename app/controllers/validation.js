/* eslint-env node */
'use strict';
import Ember from 'ember';
import ENV from 'landing/config/environment';
import ApplicationController from './application';

export default ApplicationController.extend({
  user: Ember.computed.alias('model.user'),
  formIsValid: Ember.computed.alias('user.validations.isValid'),
  showDialog: {
    invalidCode: false
  },
  formIsSubmitted: false,
  submitBtnCls: Ember.computed('formIsValid', function(){
    let res = ['btn', 'btn-primary', 'submit'],
      formIsValid =  this.get('formIsValid')
    ;
    if(!formIsValid) res.push('disabled');
    return res.join(' ');
  }),
  saveUser(){
    const baseHelper = this.get('base-helper');
    baseHelper.loading();
    this.doRequest()
      .then(this.userSavedOnSuccess.bind(this))
      .catch(this.userSavedOnError.bind(this))
      .finally(() => {
        baseHelper.loaded();
      })
    ;
  },
  doRequest() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      const signupUserId = this.get('session.signupUserId');
      const url = `${ENV.APP.API_URL}/users/${signupUserId}/activate`;
      const userActivationCode = this.get('user.activationCode');
      const data = { activation_code: userActivationCode };
      Ember.$.ajax({
        url: url,
        data: data,
        type: 'post'
      }).then((response, status, xhr) =>{
        resolve(response, status, xhr);
      }, (xhr, status, error) =>{
        reject([xhr, status, error]);
      });
    });
  },
  userSavedOnSuccess (response) {
    const session = this.get('session');
    session.clearCookies();
    const store = this.get('store');
    const userData = store.normalize('user', response.user);
    const user = store.push(userData);
    const dialer = user.get('dialerObject');
    debugger;
    session.setDialerCookies(dialer);
    this.transitionToRoute('thank-you');
  },
  userSavedOnError (e) {
    debugger;
    this.set('showDialog.invalidCode', true);
  },
  actions: {
    formOnSubmit(){
      const formIsValid = this.get('formIsValid');
      if (formIsValid) {
        this.saveUser();
      } else {
        this.set('formIsSubmitted', true);
      }
    },
    closeInvalidCodeDialog () {
      this.set('showDialog.invalidCode', false);
    }
  }
});
