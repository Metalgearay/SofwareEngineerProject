var Game = require ('./models/game');

module.exports = function(app) {
	
	app.get('/api/games', function(req, res) {

		Game.find(function(err, games) {

			if (err)
				res.send(err);

			res.json(games);
		});
	});

	app.get('*', function(req, res){
		res.sendfile('./public/views/index.html');
	});
};

