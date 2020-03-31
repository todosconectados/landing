/* eslint-env node */
'use strict';
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
  doRequest(){
    let baseHelper = this.get('base-helper');
    baseHelper.loading();
    // TODO: HTTP request
  },
  actions: {
    formOnSubmit(){
      const formIsValid = this.get('formIsValid');
      if (formIsValid) {
        this.doRequest();
      }
      else{
        this.set('formIsSubmitted', true);
      }
    }
  }
});
