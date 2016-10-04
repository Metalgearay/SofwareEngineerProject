angular.module('MainService',[]).factory("Main",['$http', function($http)
{
	return {
		get : function()
		{
			return $http.get('/api/games');
		}
	}


}]);