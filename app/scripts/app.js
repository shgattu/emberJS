var Emapp = window.Emapp = Ember.Application.create({

    currentPath: '',

    IndexController : Ember.Controller.extend({
        updateCurrentPath: function() {
            Emapp.set('currentPath', this.get('currentPath'));
        }.observes('currentPath')
    })
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
