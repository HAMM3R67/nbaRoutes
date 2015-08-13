var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	
	$scope.teamData = teamData
	$scope.newGame = {}
	$scope.showNewGameForm = false
	$scope.toggleNewGameForm = function(){
		$scope.showNewGameForm = !$scope.showNewGameForm
	}
	
	if($routeParams.team === 'utahjazz'){
		$scope.homeTeam = 'Utah Jazz';
		$scope.logoPath = '../../images/jazz-logo.png';
	}else if($routeParams.team === 'losangelaslakers'){
		$scope.homeTeam = 'Los Angelas Lakers';
		$scope.logoPath = '../../images/lakers-logo.png';
	}else if($routeParams.team === 'miamiheat'){
		$scope.homeTeam = 'Miami Heat';
		$scope.logoPath = '../../images/heat-logo.png';
	}
	
	$scope.submitGame = function(){
		$scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase()
		return teamService.addNewGame($scope.newGame).then(function(){
			 return teamService.getTeamData($scope.newGame.homeTeam).then(function(teamData){
				 $scope.teamData = teamData;
				 $scope.newGame = {};
				 $scope.showNewGameForm = false;
			 })
		})
	}
	console.log($scope);
})
