avghs.characters = function(game){};

avghs.characters.prototype = {
	isStarted : false,
	loadPlayer:function(type) { // load player with any type given	
		cursor = game.input.keyboard.createCursorKeys();

		switch(type){
			case 1:
				characters = game.add.group();
				player = game.add.sprite(400, 395, 'player');
				var run = player.animations.add('run',[5,6,7,8,9]);
				var die = player.animations.add('die',[0,1,2,3,4]);

				game.physics.arcade.enable(player);
				player.body.collideWorldBounds = true;
				player.body.gravity.y = 980;

				game.camera.follow(player);	 
			break;
			case 2:

				characters = game.add.group();
				player = game.add.sprite(400, 395, 'player_fly');
				game.physics.arcade.enable(player);
				player.body.collideWorldBounds = true;
			break;		
		}
	},
	resurect:function(){
		// player.animations.stop('run', 10, false);
		var dieCount =player.animations.play('die', 5, false);
		dieCount.killOnComplete=true;
		player.body.velocity.x=0;
		// console.log("level one destroy");
		// game.state.clearCurrentState();
		// console.log("level two called");
		// 	game.state.start("LevelTwo",true,true);
		// },3000)
		// game.camera.follow(null);
	},
	animatePlayer: function(level){
		switch(level){
			case 1:
				if(!finishReached){
					if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
						player.body.velocity.x=+100;
						player.animations.play('run', 10, true);
						player.isStarted = true;
					}else{
						if(player.isStarted){
							game.state.start("GameOver");
						}
						player.animations.stop('run', 10, true);
					}
				}
			break;
			case 2:
				if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
					player.body.position.x-=4;
				}
				if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
					player.body.position.x+=4;
				}
				// player.animations.stop('run', 10, true);
			break;
		}
	}
};