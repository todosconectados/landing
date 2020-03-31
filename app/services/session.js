/* eslint-env node */
/**
 * @name Session Service
 * @file app/services/session.js
 */
'use strict';
import Ember from 'ember';
import Cookie from 'ember-cli-js-cookie';
import ENV from 'landing/config/environment';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  adapterParams: {},
  signupUserId: null,
  /**
   * Load all cookies
   */
  loadCookies(){
    this.set('signupUserId', Cookie.get('signupUserId'));
  },
  /**
   * Clear all saved cookies
   */
  clearCookies(){
    Cookie.remove('signupUserId');
  },
  setSignupUserId(signupUserId) {
    this.set('signupUserId', signupUserId);
    Cookie.set('signupUserId', signupUserId);
  },
  /**
   * Parses response headers separated by CRLF and creates JSON key/value pairs
   * @param {string} responseHeaders list of headers separated by CRLF
   * @return {object}
   */
  getResponseHeaders(responseHeaders){
    let headersArray = responseHeaders.split('\r\n');
    let headers = headersArray.reduce((previous, current)=>{
      var parts = current.split(':');
      if (parts.length > 1){
        previous[parts[0]] = parts[1].trim();
      }
      return previous;
    }, {});
    return headers;
  }
});
