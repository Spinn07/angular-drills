angular.module('app6',['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      templateUrl: 'home.html',
      controller: 'homeCtrl',
      url: '/'
    })
    .state('signup',{
      url: '/signup',
      controller: 'signupCtrl',
      templateUrl: 'signup.html'
    })
    .state('details', {
      url: '/details/:id',
      controller: 'detailsCtrl',
      templateUrl: 'details.html'
    })
})
