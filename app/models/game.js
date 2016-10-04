var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var gameSchema = new Schema ({
	name: String,
	date: {type: Date}
});

var game = mongoose.model("Game List", gameSchema);

module.exports = game;