/* eslint-env node */
'use strict';
import Ember from 'ember';
import EmberBootstrap from 'ember-bootstrap/components/bs-form/element';

const {
  computed,
  defineProperty
} = Ember;

export default EmberBootstrap.extend({
  model: null,
  errorCls: '',
  classNameBindings: ['showErrorMessage:has-error'],
  showValidations: false,
  formIsSubmitted: null,
  tooltip: null,
  onFocusOut: null,
  onRender: null,
  disabled: null,
  icon: null,
  addon: null,
  showErrorMessage: computed('showValidations', 'validation.isValid', 'formIsSubmitted', function(){
    let showValidations = this.get('showValidations'),
      isValid = this.get('validation.isValid'),
      formIsSubmitted = this.get('formIsSubmitted'),
      validation = this.get('validation')
    ;
    if(!validation) isValid = true;
    if(formIsSubmitted !== null) showValidations = (formIsSubmitted || showValidations);
    return (!isValid && showValidations);
  }),
  showValidationsChanged: Ember.observer('formIsSubmitted', function(){
    let formIsSubmitted = this.get('formIsSubmitted');
    if(formIsSubmitted === false){
      this.set('showValidations', false);
    }
  }),
  isValid: computed.and('hasContent', 'validation.isTruelyValid').readOnly(),
  hasIcon: Ember.computed.notEmpty('icon'),
  hasAddon: Ember.computed.notEmpty('addon'),
  inputCls: Ember.computed('hasIcon', function(){
    let hasIcon = this.get('hasIcon');
    let hasAddon = this.get('hasAddon');
    return (hasIcon || hasAddon) ? 'input-group' : '';
  }),
  init() {
    this._super(...arguments);

    let property = this.get('property');
    defineProperty(this, 'validation', computed.readOnly(`model.validations.attrs.${property}`));
    defineProperty(this, 'value', computed.alias(`model.${property}`));
  },
  focusOut(){
    let onFocusOut = this.get('onFocusOut');
    this.set('showValidations', true);
    if(onFocusOut){
      onFocusOut(this);
    }
  },
  didRender(){
    let onRender = this.get('onRender');
    if(onRender){
      onRender(this);
    }
  }
});
