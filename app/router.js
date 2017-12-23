import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('apropos');
  this.route('guilds');
  this.route('not-found', { path: '/*path' });
});

export default Router;
