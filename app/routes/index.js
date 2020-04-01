'use strict';
import Ember from 'ember';
import Scroll from '../mixins/scroll';

export default Ember.Route.extend(Scroll, {
  model(){
    const store = this.get('store');
    const lead = store.createRecord('lead');
    return Ember.RSVP.hash({ lead: lead });
  },
  actions: {
    didTransition(){
      let controller = this.get('controller');
      let _window = Ember.$(window);
      _window.on('load', function(){
        controller.initializeHashObserver();
      });
    }
  }
});
