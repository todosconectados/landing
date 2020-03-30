/* eslint-env node */
'use strict';
import ApplicationController from './application';
import Ember from 'ember';

export default ApplicationController.extend({
  showDialog: {
    termsAndConditions: false,
  },
  showTermsAndConditionsDialog(){
    this.set('showDialog.termsAndConditions', true);
  },
  actions: {
    termsAndConditionsClicked(e){
      e.preventDefault();
      this.showTermsAndConditionsDialog();
    }
  }
});
