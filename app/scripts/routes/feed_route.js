/**
 * Created by gattu on 4/17/2014.
 */

Emapp.FeedRoute = Ember.Route.extend({
    model : function() {
        var dataObj = new Array();
        $.ajax({
            dataType: "json",
            contentType: "application/json",
            url: "EmberRND/rest/base/feed",
            success: function (data) {
                //  alert(data["insightCollection"])
               // dataObj = eval(data);

                dataObj = data["feedCollection"];
            }
        });

        var feedObj = new Ember.RSVP.Promise(function (resolve) {
            Ember.run.later(function () {
                resolve(dataObj);
            }, 3000);
        });
        return feedObj;
    },
    renderTemplate: function() {
        this._super(this, arguments);
        this.render('feed',{outlet: 'realContent',into: 'index'});
    }
});