import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({ //read-only variable so it's not reassigned elsewhere.
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  //added when you use ember g route - it also adds a hbs template, a handler file in /app/routes/ and a test in tests/unit/routes
  this.route('contact');//see above
  this.route('rentals');
});

export default Router;
