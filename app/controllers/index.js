/* eslint-env node */
'use strict';
import ApplicationController from './application';
import ENV from 'landing/config/environment';
import Ember from 'ember';

export default ApplicationController.extend({
  scroller: Ember.inject.service(),
  youtubeId: ENV.APP.YOUTUBE_FEATURED_VIDEO_ID,
  lead: Ember.computed.alias('model.lead'),
  showDialog: {
    privacyPolicy: false,
    leadSuccess: false,
    youtube: false
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
  initializeHashObserver(){
    let _window = Ember.$(window);
    _window.on('hashchange', this.windowHashObserver.bind(this));
    this.windowHashObserver(null, true);
  },
  windowHashObserver(eventArgs, firstTimeRun){
    let windowHash = window.location.hash;
    if(Ember.isEmpty(firstTimeRun)) firstTimeRun = false;
    if(Ember.isEmpty(windowHash)) return;
    let selectorScrollTarget = `[data-scroll-to="${windowHash}"]`,
      scrollTarget = Ember.$(selectorScrollTarget)
    ;
    if(scrollTarget.length == 0) return;
    let scroller = this.get('scroller'),
      scrollOptions = { offset: -60 }
    ;
    if(firstTimeRun) scrollOptions['duration'] = 0;
    scroller.scrollVertical(scrollTarget, scrollOptions);
  },
  doRequest(){
    const baseHelper = this.get('base-helper');
    baseHelper.loading();
    const lead = this.get('lead');
    return lead.save()
      .then(this.leadSavedOnSuccess.bind(this))
      .catch(this.leadSavedOnError.bind(this))
      .finally(() =>{
        baseHelper.loaded();
      })
    ;
  },
  leadSavedOnSuccess () {
    this.set('showDialog.leadSuccess', true);
  },
  leadSavedOnError () {
    const baseHelper = this.get('base-helper');
    baseHelper.serverError();
  },
  showYoutubeVideo(){
    this.set('showDialog.youtube', true);
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
    },
    showYoutubeVideoClicked(e){
      e.preventDefault();
      this.showYoutubeVideo();
    }
  }
});
