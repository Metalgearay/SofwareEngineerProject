angular.module('GameService',[]).factory("Game",['$http', function($http)
{
	return {
		get : function()
		{
			return $http.get('/api/games');
		},
		create : function(name,date)
		{
			var parameter = JSON.stringify({"name":name,"date":date});
			return $http.post('/api/games',parameter);
		},
		delete : function(id)
		{
			return $http.delete('/api/games' + id);
		}
	}


}]);