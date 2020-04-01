/**
 * @name Lead
 * @file app/models/lead.js
 */
import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: [
    validator('presence', { presence: true })
  ],
  companyName: [
    validator('presence', { presence: true })
  ],
  email: [
    validator('presence', { presence: true }),
    validator('format', { type: 'email', allowNonTld: true })
  ],
  phone: [
    validator('presence', { presence: true }),
    validator('length', { is: 10 })
  ],
  comments: [
    validator('presence', { presence: true })
  ],
  privacyAcceptance: [
    validator('presence', { presence: true }),
    validator('inclusion', { in: [true] })
  ]
});

export default DS.Model.extend(Validations, {
  /**
   * Backend Attributes
   */
  name: DS.attr('string'),
  companyName: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  comments: DS.attr('string'),
  privacyAcceptance: DS.attr('boolean')
});
