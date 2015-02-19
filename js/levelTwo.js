avghs.levelTwo = function(game){};

avghs.levelTwo.prototype = {
	preload: function(){
		game.load.image('rocks', 'imgs/rocks.png');
		game.load.image('player_fly', 'imgs/player_fly.png');
		game.load.image('background-sky', 'imgs/background-sky.png');
	},
	create:function(){
		// modify world bound for collide right border
		game.world.setBounds(0,0,800,600);

		background = game.add.group();
		var bg = background.create(0,0,"background-sky");
		bg.fixedToCamera = true;
		avghs.characters.loadPlayer(2);

		rocks = game.add.group();
		this.rocks();
	},
	update:function(){
		avghs.characters.animatePlayer(2);	
		rocks.forEach(function(r){
			game.physics.arcade.collide(r,player,function(){
				game.state.start("GameOver",true,false);
			},null,this);
			// game.physics.arcade.collide(player,r);
		},this);

		// this.streak();
	},
	rocks:function(){
		game.time.events.loop(100,function(){
			this.rock();
		},this).autoDestroy = true;
	},
	streak:function(){
		var emitter = game.add.emitter(game.world.width,game.world.height,100);
		rocks.forEach(function(rock){
			// emitter.makeParticles("rockParticules");
			// emitter.minParticleSpeed.setTo(-200,-200);
			// emitter.maxParticleSpeed.setTo(200,200);
			// emitter.gravity = 0;
			// emitter.start(true, 10,null,10);
		},this);	
	},
	rock:function(){
		var factorSize = game.rnd.realInRange(0.2,1.0);
		var dir = Math.floor(Math.random()*5);
		var rock = rocks.create(game.world.randomX,game.world.randomY-game.world.height,"rocks");
		rock.scale.setTo(factorSize,factorSize);
		game.physics.arcade.enable(rock);
		rock.body.gravity.y = 300;

		rocks.add(rock);
		// player.kill();

		switch(dir){
			case 0:
				rock.body.velocity.x = -200;
			break;
			case 1:
				rock.body.velocity.x = -100;
			break;
			case 2:
				rock.body.velocity.x = 0;
			break;
			case 3:
				rock.body.velocity.x = 100;
			break;
			case 4:
				rock.body.velocity.x = 200;
			break;
		}
	}
};