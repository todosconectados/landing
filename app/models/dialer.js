/**
 * @name Dialer
 * @file app/models/dialer.js
 */
import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  /**
   * Backend Attributes
   */
  status: DS.attr('number', { defaultValue: 0 }),
  did: DS.attr('string'),
  conferenceCode: DS.attr('string'),
  assignedAt: DS.attr('date')
});
