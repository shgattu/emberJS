Emapp.IndexRoute = Ember.Route.extend({
    renderTemplate: function() {
        this._super(this, arguments);
        this.render('placeholder',{outlet:"realContent",into: 'index'});
    },
    controllerName:"index"
});