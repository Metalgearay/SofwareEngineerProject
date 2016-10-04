angular.module('GameCtrl',[]).controller("GameController", function($scope,Game)
{
	$scope.name=new String;
	$scope.date=new Date();
	$scope.submit= function(name,date)
	{
		Game.create(name,date);
	}
});