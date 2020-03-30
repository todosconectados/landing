/* eslint-env node */
'use strict';
import ApplicationController from './application';
import Ember from 'ember';

export default ApplicationController.extend({
  lead: Ember.computed.alias('model.lead'),
  showDialog: {
    privacyPolicy: false
  },
  recaptchaResponse: null,
  formIsSubmitted: false,
  gRecaptcha: null,
  formIsValid: Ember.computed(
    'recaptchaResponse',
    'lead.validations.isValid',
    function () {
      let recaptchaResponse = this.get('recaptchaResponse'),
        isValid = this.get('lead.validations.isValid'),
        result = false
      ;
      if (recaptchaResponse && isValid) result = true;
      return result;
    }
  ),
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
    // return this.doPostData()
    //   .then(this.dataSaveOnSuccess.bind(this))
    //   .catch(this.dataSaveOnError.bind(this))
    //   .finally(() =>{
    //     baseHelper.loaded();
    //   })
    // ;
  },
  showTermsAndConditionsDialog(){
    this.set('showDialog.termsAndConditions', true);
  },
  actions: {
    privacyPolicyClicked(e){
      e.preventDefault();
      this.set('showDialog.privacyPolicy', true);
    },
    formOnSubmit(){
      const formIsValid = this.get('formIsValid');

      if (formIsValid) {
        this.doRequest();
      }
      else{
        this.set('formIsSubmitted', true);
      }
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
