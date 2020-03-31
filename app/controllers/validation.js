/* eslint-env node */
'use strict';
import Ember from 'ember';
import ENV from 'landing/config/environment';
import ApplicationController from './application';

export default ApplicationController.extend({
  user: Ember.computed.alias('model.user'),
  formIsValid: Ember.computed.alias('user.validations.isValid'),
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
  userSavedOnSuccess () {
    const session = this.get('session');
    session.clearCookies();
    this.transitionToRoute('thank-you');
  },
  userSavedOnError (e) {
    debugger;
    const baseHelper = this.get('base-helper');
    baseHelper.serverError();
  },
  actions: {
    formOnSubmit(){
      const formIsValid = this.get('formIsValid');
      if (formIsValid) {
        this.saveUser();
      } else {
        this.set('formIsSubmitted', true);
      }
    }
  }
});
