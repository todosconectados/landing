'use strict';
import Ember from 'ember';
import Scroll from '../mixins/scroll';

export default Ember.Route.extend(Scroll, {
  model(){
    let store = this.get('store'),
      user = store.createRecord('user')
    ;
    return Ember.RSVP.hash({
      user: user
    });
  }
});
