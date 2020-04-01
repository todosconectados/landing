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
  did: null,
  conferenceCode: null,
  phone: null,
  /**
   * Load all cookies
   */
  loadCookies(){
    this.set('signupUserId', Cookie.get('signupUserId'));
    this.set('did', Cookie.get('did'));
    this.set('conferenceCode', Cookie.get('conferenceCode'));
    this.set('phone', Cookie.get('phone'));
  },
  /**
   * Clear all saved cookies
   */
  clearCookies(){
    Cookie.remove('signupUserId');
    Cookie.remove('phone');
    this.clearDialerCookies();
  },
  clearDialerCookies() {
    Cookie.remove('did');
    Cookie.remove('conferenceCode');
  },
  setSignupUserId(signupUserId) {
    this.set('signupUserId', signupUserId);
    Cookie.set('signupUserId', signupUserId);
  },
  setPhone(phone){
    this.set('phone', phone);
    Cookie.set('phone', phone);
  },
  setDialerCookies(dialer) {
    const did = dialer.get('did');
    const conferenceCode = dialer.get('conferenceCode');
    this.set('did', did);
    Cookie.set('did', did);
    this.set('conferenceCode', conferenceCode);
    Cookie.set('conferenceCode', conferenceCode);
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
