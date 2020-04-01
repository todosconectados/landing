/* eslint-env node */
'use strict';
import ApplicationController from './application';
import ENV from 'landing/config/environment';

export default ApplicationController.extend({
  landingUrl: ENV.APP.LANDING_URL,
  shareTitle: Ember.computed('landingUrl', function(){
    let landingUrl = this.get('landingUrl'),
      result = `#TodosConectados - Servicio gratuito de Conferencias Telefónicas. Obtén tu sala privada en ${landingUrl}`
    ;
    return result;
  })
});
