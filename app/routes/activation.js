/* eslint-env node */
'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    const session = this.get('session');
    session.loadCookies();
    const signupUserId = session.get('signupUserId');
    const phone = session.get('phone');
    if (signupUserId) {
      // TODO: validate user status
      const store = this.get('store');
      const user = store.createRecord('phone-user', {
        phone: phone
      });
      return Ember.RSVP.hash({ user: user });
    } else {
      this.replaceWith('index');
    }
  }
});
