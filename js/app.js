var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
  $routeProvider
  .when('/', {
    templateUrl: 'js/home/homeTmpl.html',
    controller: 'homeCtrl',
    resolve: {
      
    }
    // image: 'images/nba-logo.png'
  })
  .when('/teams/utahjazz', {
    templateUrl: 'js/teams/teamTmpl.html',
    controller: 'teamCtrl',
    // image: 'images/jazz-logo.png'
  })
  .when('/teams/losangelaslakers', {
    templateUrl: 'js/teams/teamTmpl.html',
    controller: 'teamCtrl',
    // image: 'images/lakers-logo.png'
  })
  .when('/teams/miamiheat', {
    templateUrl: 'js/teams/teamTmpl.html',
    controller: 'teamCtrl',
    // image: 'images/heat-logo.png'
  })
  .otherwise({
    redirectTo: '/'
  })
    
  
});