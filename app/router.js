/* eslint-env node */
'use strict';

import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import GooglePageview from './mixins/google-pageview';

const Router = EmberRouter.extend(GooglePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // funcionality
  this.route('privacy-policy', { path: '/politica-de-privacidad' });
  this.route('terms-and-conditions', { path: '/terminos-y-condiciones' });
  // default 404 handling
  this.route('not-found', { path: '*path' });
});

export default Router;
