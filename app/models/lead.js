/**
 * @name Lead
 * @file app/models/lead.js
 */
import DS from 'ember-data';
import { validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
  name: [
    validator('presence', {
      presence: true,
    })
  ]
});

export default DS.Model.extend(Validations, {
  /**
   * Backend Attributes
   */
  name: DS.attr('string'),
});
