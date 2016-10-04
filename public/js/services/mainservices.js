angular.module('MainService',[]).factory("Main",['$http', function($http)
{
	return {
		get : function()
		{
			return $http.get('/api/games');
		},
	
	delete : function(key)
		{  
			return $http.delete('/api/games/'+key);
		}
	}


}]);