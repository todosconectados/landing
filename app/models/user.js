/**
 * @name User
 * @file app/models/user.js
 */
import DS from 'ember-data';
import { validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
  name: [
    validator('presence', {
      presence: true,
    })
  ],
  lastNames: [
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
  privacyAcceptance: [
    validator('presence', {
      presence: true
    })
  ],
  termsAndConditionsAcceptance: [
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
  status: DS.attr('string'),
  activationCode: DS.attr('string'),
  /**
  * Virtual Attributes
  */
  privacyAcceptance: DS.attr('boolean'),
  termsAndConditionsAcceptance: DS.attr('boolean')
});
