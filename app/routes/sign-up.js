/* eslint-env node */
'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let store = this.get('store'),
      user = store.createRecord('user')
    ;
    // legal acceptance is validated on step 1 only
    user.set('shouldValidateAcceptance', true);
    return Ember.RSVP.hash({
      user: user
    });
  }
});
