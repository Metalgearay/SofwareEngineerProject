angular.module('MainCtrl',[]).controller("MainController", function($scope,Main,moment)
{ var listz = {};
	Main.get().then(function(data)
	{
		
	for(i=0;i<data["data"].length;i++)
	{  var date = data["data"][i].date;
		date=date.toString();
		date = new Date(date);
		date = date.toDateString()
		var name = data["data"][i].name;
		listz[name] = date;
	
	}
	$scope.list=listz;
});

	$scope.delete = function(data)
	{
		Main.delete(data);
	}
});

