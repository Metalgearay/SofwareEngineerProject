var Game = require ('./models/game');

module.exports = function(app) {
	
	app.get('/api/games', function(req, res) {

		Game.find({}).sort({'date':1}).exec(function(err, games) {

			if (err)
				res.send(err);
			res.json(games);
		});
	});
	app.post('/api/games',function(req,res) {

		var name=req.body.name;
		var date= req.body.date;
		var post = new Game({
			"name": name,
			"date": date
		});
		post.save(function(err)
		{
			if (err) throw err;
		});
		
	});
	app.delete('/api/games/:name',function(req,res) {

		var name=req.params.name;
		Game.remove({"name":name},function(err)
		{
			if (err) throw err;

		});
		 
		
		
	});

	app.get('*', function(req, res){
		res.sendfile('./public/views/index.html');
	});
};

