import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['container-fluid', 'signup-steps', 'light-gray'],
  tagName: 'section',
  selectedIndex: 1,
  step1Class: Ember.computed('selectedIndex', function(){
    let result = this.stepClass(1);
    return result;
  }),
  step2Class: Ember.computed('selectedIndex', function(){
    let result = this.stepClass(2);
    return result;
  }),
  stepClass(step){
    let selectedIndex = this.get('selectedIndex'),
      result = (selectedIndex == step) ? 'active' : ''
    ;
    return result;
  }
});
