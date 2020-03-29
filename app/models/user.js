/**
 * @name User
 * @file app/models/user.js
 */
import Ember from 'ember';
import DS from 'ember-data';
import { validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
  name: [
    validator('presence', {
      presence: true,
    })
  ],
  businessName: [
    validator('presence', {
      presence: true,
    })
  ],
  email: [
    validator('presence', {
      presence: true
    }),
    validator('format', {
      type: 'email',
      allowNonTld: true
    })
  ],
  phone: [
    validator('presence', {
      presence: true
    }),
    validator('length', {
      is: 10,
      message: 'Escribe tu número en 10 dígitos',
    }),
    validator('number', {
      allowString: true,
      integer: true,
    }),
  ],
  coverLetter: [
    validator('presence', {
      presence: true,
    })
  ],
  privacyAcceptance: [
    validator('presence', {
      presence: true
    })
  ]
});

export default DS.Model.extend(Validations,{
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