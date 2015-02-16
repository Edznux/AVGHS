avghs.levelTwoIntro = function(game){};

avghs.levelTwoIntro.prototype = {
	preload: function(){
		game.load.image('rocks', 'imgs/rocks.png');
		game.load.image('player_fly', 'imgs/player_fly.png');
	},
	create:function(){
		background = game.add.group();
		var bg = background.create(0,0,"background");
		bg.fixedToCamera= true;
		this.light();
		avghs.characters.loadPlayer(1);
		game.time.events.add(Phaser.Timer.SECOND*3,function(){
			game.state.start("LevelTwo");
		},this).autoDestroy = true;
	},
	update:function(){
	},
	light:function(){
		var lights = game.add.group();
		lights.create(game.world.width/2-game.cache.getImage("light").width/2,100,'light');
	}
};