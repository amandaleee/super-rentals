import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({ //read-only variable so it's not reassigned elsewhere.
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
});

export default Router;
