/**
 * Created by gattu on 4/18/2014.
 */
/**
 * Created by gattu on 4/17/2014.
 */

Emapp.FeedUpdateRoute = Ember.Route.extend({

   controllerName:"feedUpdate",
    beforeModel: function() {
        this.transitionTo('feedUpdate');
    },
    renderTemplate: function() {
    this._super(this, arguments);
    this.render('feedUpdate',{outlet: 'realContent',into: 'index'});
}
});