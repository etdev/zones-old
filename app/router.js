import Ember from 'ember';

var Router = Ember.Router.extend({
});

Router.map(function() {
  this.resource('zones', {path: '/'});
});

export default Router;
