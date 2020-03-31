/* eslint-env node */
'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    const store = this.get('store');
    const user = store.createRecord('user');
    return Ember.RSVP.hash({ user: user });
  }
});
