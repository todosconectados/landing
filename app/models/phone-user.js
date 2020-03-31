/**
 * @name PhoneUser
 * @file app/models/phone-user.js
 */
import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  phone: [
    validator('presence', { presence: true }),
    validator('length', {
      is: 10,
      message: 'Escribe tu número en 10 dígitos',
    }),
    validator('number', {
      allowString: true,
      integer: true
    }),
  ],
});

export default DS.Model.extend(Validations, {
  phone: DS.attr('string')
});
