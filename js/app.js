App = Ember.Application.create();

/* models */
App.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter.create()
});

App.Client = DS.Model.extend({
  name: DS.attr('string'),
  code: DS.attr('string')
});

/* routes */
App.Router.map(function() {
  this.route('index');
  this.route('clients');  
});

App.ClientsRoute = Ember.Route.extend({
  model: function() { return App.Client.find(); }
});

/* controllers */
App.ClientsController = Ember.ArrayController.extend({
  createClient: function() {

    console.log(this);

    var name = this.get('newName');
    var code = this.get('newCode');

    console.log(name);
    console.log(code);

    // create model
    var client = App.Client.createRecord({
      name: name,
      code: code
    });

    // validate?
    
    // clean up
    this.set('newName', '');
    this.set('newCode', '');

    client.save()
  }
});

/* fixtures */
App.Client.FIXTURES = [
  {id: 1, name: 'Test Client 1', code: 'AAO001'},
  {id: 2, name: 'Fosters & Ting', code: 'AAO002'},
];
