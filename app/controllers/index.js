/* eslint-env node */
'use strict';
import ApplicationController from './application';

export default ApplicationController.extend({
  showDialog: {
    termsAndConditions: false
  },
  showTermsAndConditionsDialog(){
    this.set('showDialog.termsAndConditions', true);
  },
  actions: {
    termsAndConditionsClicked(e){
      e.preventDefault();
      this.showTermsAndConditionsDialog();
    },
    // formOnSubmit(){
    //   let formIsValid = this.get('formIsValid');
    //   this.set('formIsSubmitted', true);
    //   if(formIsValid){
    //     this.doRequest();
    //   }
    // },
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
