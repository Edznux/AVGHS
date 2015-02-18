var avghs = {};
var cursor,characters,birds,grounds,background,finishes,finish,rocks;
var player;
var finishReached;
var tree = [];

avghs.boot = function(game){};
avghs.boot.prototype = {
	create : function(){
		avghs.hud = new avghs.hud(game);
		avghs.characters = new avghs.characters(game);
		game.state.start('Preload');
	}
};