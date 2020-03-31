/* eslint-env node */
'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // TODO: validate user status
    let store = this.get('store'),
      user = store.createRecord('user')
    ;
    return Ember.RSVP.hash({
      user: user
    });
  }
});
