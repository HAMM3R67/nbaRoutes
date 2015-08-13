var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
  $routeProvider
  .when('/', {
    templateUrl: 'js/home/homeTmpl.html',
    controller: 'homeCtrl',
    // image: 'images/nba-logo.png'
  })
  .when('/teams/utahjazz', {
    templateUrl: 'js/teams/teamTmpl.html',
    controller: 'teamCtrl',
     resolve: {
        teamData: function(teamService, $route){
          return teamService.getTeamData($route.current.params.team);
        } 
    }
    // image: 'images/jazz-logo.png'
  })
  .when('/teams/losangeleslakers', {
    templateUrl: 'js/teams/teamTmpl.html',
    controller: 'teamCtrl',
     resolve: {
        teamData: function(teamService, $route){
          return teamService.getTeamData($route.current.params.team);
        } 
    }
    // image: 'images/lakers-logo.png'
  })
  .when('/teams/miamiheat', {
    templateUrl: 'js/teams/teamTmpl.html',
    controller: 'teamCtrl',
     resolve: {
        teamData: function(teamService, $route){
          return teamService.getTeamData($route.current.params.team);
        } 
    }
    // image: 'images/heat-logo.png'
  })
  .otherwise({
    redirectTo: '/'
  })
    
  
});