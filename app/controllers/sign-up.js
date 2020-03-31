/* eslint-env node */
'use strict';
import ApplicationController from './application';

export default ApplicationController.extend({
  recaptchaResponse: null,
  showDialog: {
    privacyPolicy: false,
    termsAndConditions: false,
    invalidSignup: false
  },
  user: Ember.computed.alias('model.user'),
  formIsValid: Ember.computed('recaptchaResponse', 'user.validations.isValid', function(){
    let recaptchaResponse = this.get('recaptchaResponse'),
      isValid = this.get('user.validations.isValid'),
      result = false
    ;
    if (recaptchaResponse && isValid) result = true;
    return result;
  }),
  submitBtnCls: Ember.computed('formIsValid', function(){
    let res = ['btn', 'btn-primary', 'submit'],
      formIsValid =  this.get('formIsValid')
    ;
    if(!formIsValid) res.push('disabled');
    return res.join(' ');
  }),
  showPrivacyPolicyDialog(){
    this.set('showDialog.privacyPolicy', true);
  },
  showTermsAndConditionsDialog(){
    this.set('showDialog.termsAndConditions', true);
  },
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
    },
    privacyPolicyClicked(e){
      e.preventDefault();
      this.showPrivacyPolicyDialog();
    },
    termsAndConditionsClicked(e){
      e.preventDefault();
      this.showTermsAndConditionsDialog();
    },
    onCaptchaResolved(recaptchaResponse){
      this.set('recaptchaResponse', recaptchaResponse);
    },
    onCaptchaExpired(){
      this.set('recaptchaResponse', null);
      this.get('gRecaptcha').resetReCaptcha();
    }
  }
});
