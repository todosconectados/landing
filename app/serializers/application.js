/* eslint-env node */
'use strict';
import DS from 'ember-data';
import Ember from 'ember';
import { pluralize } from 'ember-inflector';

export default DS.RESTSerializer.extend({
  payloadKeyFromModelName(modelName){
    return Ember.String.underscore(modelName);
  },
  keyForAttribute(attr) {
    return Ember.String.underscore(attr);
  },
  keyForRelationship(key, relationship) {
    key = Ember.String.underscore(key);
    if (relationship === "belongsTo"){
      return key + '_id';
    } else {
      key = Ember.String.underscore(key);
      return pluralize(key);
    }
  },
  normalizeQueryResponse(store, cls, payload){
    const result = this._super(store, cls, payload, ...arguments);
    result.meta = result.meta || {};

    return result;
  }
});
