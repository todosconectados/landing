/**
 * @name User
 * @file app/models/user.js
 */
import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  /**
   * Backend Attributes
   */
  name: DS.attr('string'),
  lastNames: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  status: DS.attr('number', { defaultValue: 0 }),
  activationCode: DS.attr('string'),
  target: DS.attr('number'),
  businessName: DS.attr('string'),
  industry: DS.attr('number', { defaultValue: 0 }),
  state: DS.attr('string'),

  coverLetter: DS.attr('string'),
  /**
  * Virtual Attributes
  */
  privacyAcceptance: DS.attr('boolean'),
  resetValues(){
  this.setProperties({
    name: null,
    businessName: null,
    email: null,
    phone: null,
    coverLetter: null,
    privacyAcceptance: null
  });
},
});
