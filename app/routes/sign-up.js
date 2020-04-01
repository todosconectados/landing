/* eslint-env node */
'use strict';
import Ember from 'ember';
import Scroll from '../mixins/scroll';

export default Ember.Route.extend(Scroll, {
  model(){
    const store = this.get('store');
    // legal acceptance is validated on step 1 only
    const user = store.createRecord('user', { shouldValidateAcceptance: true });
    return Ember.RSVP.hash({
      user: user
    });
  }
});
