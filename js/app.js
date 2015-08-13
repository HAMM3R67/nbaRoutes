var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
  $routeProvider
  .when('/#/', {
    templateUrl: '/home/homTmpl.html',
    controller: 'homeCtrl'
  })
  .when('/#/teams', {
    templateUrl: '/teams/teamTmpl.html',
    controller: 'teamCtrl'
  })
  .otherwise({
    redirectTo: '/#/'
  })
    
  )
});