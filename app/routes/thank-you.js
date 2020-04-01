/* eslint-env node */
'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    const session = this.get('session');
    session.loadCookies();
    const did = session.get('did');
    const conferenceCode = session.get('conferenceCode');
    if (did && conferenceCode) {
      // TODO: validate user status
      session.clearCookies();
      const store = this.get('store');
      const dialer = store.createRecord('dialer', {
        did: did,
        conferenceCode: conferenceCode
      });
      return dialer;
    } else {
      this.replaceWith('index');
    }
  }
});
