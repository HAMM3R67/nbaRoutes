var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

this.addNewGame = function(gameObj){
		var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
		
		parseInt(gameObj.homeTeamScore);
		parseInt(gameObj.opponentScore);
		
		if(gameObj.homeTeamScore > gameObj.opponentScore){
			gameObj.won = true;
		}else{
			gameObj.won = false;
		}
		$http.post('url', data){
			return data;
		}
	}
	
// this.getTeamData = function(team){
// 		var deferred = $q.defer()
// 	
// 	}	

});