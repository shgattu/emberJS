Emapp.Router.map(function () {
  // Add your routes here
    this.resource('index', { path: '/' },function() {
        this.resource('feed', { path: '/feed' });
        this.resource('feedUpdate', { path: '/feed/update' });
        this.resource('insight', { path: '/insight' });
    });
});
