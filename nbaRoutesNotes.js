Notes:

scottmas [6:41 PM]
0. Make sure you load ngRouter library AND module
1. Ng View Basics
//HTML
<div ng-view> This gets replaced with the html fragment </div>

app.config(function($routeProvider){
   $routeProvider
  .when('/home', {
    templateUrl: '/someHTMLFile.html',
    controller: 'SomeController'
  })
  .when('/another', {
    templateUrl: '/somethingElse.html',
    controller: 'SomeControllerElse'
  })
  .otherwise({
    redirectTo: '/home'
  })
})  

localhost/#/home ==> loads someHTMLFile.html
localhost/#/another ==> loads somethingElse.html

localhost/#/asdfasdf
localhost
localhost/#
All of these get redirected to the handler for ===> localhost/#/home

2. Uses $routeParams (on the "teams" page)

app.config(function($routeProvider){
   $routeProvider.when('/user/:username', {
    templateUrl: '/someHTMLFile.html',
    controller: 'SomeController'
  })
})

app.controller('SomeController', function($routeParams){
   $routeParams.username
})

localhost/#/user/bob  MEANS $routeParams.username === 'bob';
localhost/#/user/2349934 MEANS $routeParams === '2349934';

3. Uses resolve ability of $routeProvider
app.config(function($routeProvider){
   $routeProvider.when('/user/:username', {
    templateUrl: '/someHTMLFile.html',
    controller: 'SomeController',
    resolve: {
       someData: function(someDataService){
           return someDataService.getPromise();
       }
    }
  })
})
app.controller('SomeController', function(someData){
   someData === 'A cool string...'
})
app.service('someDataService', function($q){
   this.getPromise = function(){
       var def = $q.defer()
       $timeout(function(){
           def.resolve('A cool string...')
       })
       return def.promise;
   }
})


Already kind of done for you:
4. Has good application structure 
(like a real Angular app)
5. Keeps modifying the data out of the controllers and page specific stuff