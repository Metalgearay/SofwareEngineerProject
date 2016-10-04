angular.module('GameService',[]).factory("Game",['$http', function($http)
{
	return {
		get : function()
		{
			return $http.get('/api/games');
		},
		create : function(gameData)
		{
			return $http.post('/api/games',gameData);
		},
		delete : function(id)
		{
			return $http.delete('/api/games' + id);
		}
	}


}]);