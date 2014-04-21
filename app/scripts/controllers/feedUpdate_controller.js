/**
 * Created by gattu on 4/18/2014.
 */
Emapp.FeedUpdateController = Ember.Controller.extend({
actions : {
    submitFB: function () {
        var that = this;
        var obj = new Object;

        obj.name = "Shwetha";
        obj.postMessage = that.get("fb-submit");
        $.ajax({
            url:'/EmberRND/rest/base/feed/update',
            type:"POST",
            data:JSON.stringify(obj),
            contentType:"application/json",
            success: function(){
                that.render();
            }
        })

    }
},
    render: function() {
        $("#fb-form").html("<h1> Facebook status successfully updated</h1>");

    }
});