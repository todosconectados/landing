import Ember from 'ember';
import Errors from './errors';

const translations = {};
Ember.merge(translations, {
  errors: Errors,
});
export default translations;
