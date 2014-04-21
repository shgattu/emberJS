/**
 * Created by gattu on 4/21/2014.
 */
Emapp.IndexController = Ember.Controller.extend({
    activeUrl : false,
    activeUrl2: false,
    activeUrl3 : false,
    actions : {
        changeClass: function () {
           this.set('activeUrl',true);
           this.set('activeUrl2',false);
            this.set('activeUrl3',false);

        },
        changeClass2: function () {
            this.set('activeUrl2',true);
            this.set('activeUrl3',false);
            this.set('activeUrl',false);

        }
        ,changeClass3: function () {
            this.set('activeUrl3',true);
            this.set('activeUrl2',false);
            this.set('activeUrl ',false);

        }

    }
});