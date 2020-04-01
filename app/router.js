/* eslint-env node */
'use strict';

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // funcionality
  this.route('sign-up', { path: '/quiero-mi-numero' });
  this.route('activation', { path: '/activa-tu-cuenta' });
  this.route('validation', { path: '/valida-tu-cuenta' });
  this.route('thank-you', { path: '/gracias' });
  this.route('privacy-policy', { path: '/politica-de-privacidad' });
  this.route('terms-and-conditions', { path: '/terminos-y-condiciones' });
  // default 404 handling
  this.route('not-found', { path: '*path' });
});

export default Router;
