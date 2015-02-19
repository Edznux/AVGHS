avghs.gameOver = function(game){};
avghs.gameOver.prototype = {
	preload:function(){
	},
	create: function(){
		background = game.add.group();
		var bg = background.create(0,0,"gameOver");

		button = game.add.group();
		var reset = button.create(game.width/2,game.height/2,"restart");
		reset.inputEnabled=true;
		reset.events.onInputDown.add(this.restart,this);
	},
	restart:function(){
		console.log("Game Restarted");
		game.state.start("LevelOne");
	}
} 