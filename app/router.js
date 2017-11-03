import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('planning');
  this.route('video');
  this.route('apropos');
  this.route('guilds');
});

export default Router;
