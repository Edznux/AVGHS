avghs.preload = function(game){};

avghs.preload.prototype = {
	preload:function(){
		game.load.image('background', 'imgs/background.png');
		game.load.image('light', 'imgs/light.png');
	},
	create:function(){
		this.state.start("LevelOne");
	}
};
