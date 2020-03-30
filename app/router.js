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
  this.route('sign-up', { path: '/registro' });
  this.route('privacy-policy', { path: '/politica-de-privacidad' });
  // default 404 handling
  this.route('not-found', { path: '*path' });
});

export default Router;
