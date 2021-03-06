/* eslint-env node */
'use strict';
import Ember from 'ember';
import DS from 'ember-data';
import ENV from 'landing/config/environment';
import { pluralize } from 'ember-inflector';

export default DS.RESTAdapter.extend({
  host: ENV.APP.API_URL,
  namespace: '',
  session: Ember.inject.service(),
  ajax(url, type, hash){
    const adapterParams = this.get('session.adapterParams');
    if (Ember.isEmpty(hash)) hash = {};
    if (Ember.isEmpty(hash.data)) hash.data = {};
    if(!Ember.isEmpty(adapterParams)){
      Ember.merge(hash.data, adapterParams);
    }
    return this._super(url, type, hash);
  },
  /**
   * Creates API endpoint URL based on name
   */
  pathForType: function(type) {
    const dasherized = Ember.String.underscore(type);
    return pluralize(dasherized);
  }
});
