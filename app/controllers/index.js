/* eslint-env node */
'use strict';
import ApplicationController from './application';
import Ember from 'ember';
import ENV from 'landing/config/environment';

export default ApplicationController.extend({
  showDialog: {
    termsAndConditions: false,
    privacyPolicy: false
  },
  recaptchaResponse: null,
  formIsSubmitted: false,
  isValidResume: false,
  gRecaptcha: null,
  formIsValid: Ember.computed('recaptchaResponse','jobApplication.validations.isValid', 'isValidResume', function(){
    let recaptchaResponse = this.get('recaptchaResponse'),
    isValid = this.get('jobApplication.validations.isValid'),
    isValidResume = this.get('isValidResume'),
    result = false
    ;
    if (recaptchaResponse && isValid && isValidResume) result = true;
    return result;
  }),
  showTermsAndConditionsDialog(){
    this.set('showDialog.termsAndConditions', true);
  },
  actions: {
    privacyPolicyClicked(e){
      e.preventDefault();
      this.set('showDialog.privacyPolicy', true);
    },
    termsAndConditionsClicked(e){
      e.preventDefault();
      this.showTermsAndConditionsDialog();
    },
    formOnSubmit(){
      let formIsValid = this.get('formIsValid');
      this.set('formIsSubmitted', true);
      if(formIsValid){
        this.doRequest();
      }else{
        this.get('gRecaptcha').resetReCaptcha();
      }
    },
    onCaptchaResolved(recaptchaResponse){
      this.set('recaptchaResponse', recaptchaResponse);
    },
    onCaptchaExpired(){
      this.get('gRecaptcha').resetReCaptcha();
    }
  }
});
