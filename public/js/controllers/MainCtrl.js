angular.module('MainCtrl',[]).controller("MainController", function($scope,Main)
{ var listz = {};
	Main.get().then(function(data)
	{
		
	for(i=0;i<data["data"].length;i++)
	{  var date = data["data"][i].date;
		date=date.toString();
		var name = data["data"][i].name;
		listz[name] = date;
	
	}
	$scope.list=listz;
	console.log(listz);
});
});