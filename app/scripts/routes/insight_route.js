/**
 * Created by gattu on 4/18/2014.
 */
Emapp.InsightRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    beforeModel: function() {
        this.transitionTo('insight');
    },
    model: function () {
        var dataRet = new Array();
        $.ajax({
            dataType: "json",
            contentType: "application/json",
            url: "EmberRND/rest/base/rest",
            success: function (data) {
                //  alert(data["insightCollection"])
                dataRet = data["insightCollection"];
            }
        });

        var resolvedObj = new Ember.RSVP.Promise(function (resolve) {
            Ember.run.later(function () {
                resolve(dataRet);
            }, 3000);
        });

        return resolvedObj;


//alert(dataRet.get("insightCollection"));


    },
    renderTemplate: function() {
        this._super(this, arguments);
        this.render('insight',{outlet: 'realContent',into: 'index'});
    }
});


