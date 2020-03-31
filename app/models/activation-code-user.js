/**
 * @name ActivationCodeUser
 * @file app/models/activation-code-user.js
 */
import DS from 'ember-data';
import { validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
  activationCode: [
    validator('presence', { presence: true })
  ]
});

export default DS.Model.extend(Validations,{
  /**
   * Backend Attributes
   */
  activationCode: DS.attr('string')
 });
