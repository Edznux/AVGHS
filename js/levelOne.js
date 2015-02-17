avghs.levelOne = function(game){};
// avghs.levelTwo = function(game){};

avghs.levelOne.prototype = {
	preload: function(){
		game.load.image('ground', 'imgs/ground.png');
		game.load.image('bush', 'imgs/bush.png');
		game.load.atlasJSONHash('player', 'imgs/player.png', 'imgs/player.json');
		game.load.atlasJSONHash('bird', 'imgs/bird.png', 'imgs/bird.json');
		game.load.image('tree', 'imgs/tree.png');
		game.load.image('tree2', 'imgs/tree2.png');
		game.load.image('finish', 'imgs/finish.png');
	},
	create : function(){
		game.world.setBounds(0,0,2000,600);
		game.physics.startSystem(Phaser.Physics.ARCADE);

		this.loadBackgroundOne();
		this.loadTree(3);
		this.loadGround();
		this.loadBushes();
		this.loadFinish();

		avghs.characters.loadPlayer(1);	//load player for level one
											//load after player so z > so, player go in backyard
		this.loadTree(4);
		this.addBird();
		

		avghs.hud.loadHud();
		avghs.hud.story();
	},
	update : function(){
		player.body.velocity.x = 0;
		game.physics.arcade.collide(player, grounds);

		// game.physics.arc
		avghs.characters.animatePlayer(1);
		// cursor = game.input.keyboard.createCursorKeys();
		this.checkFinish();
	},
	loadBackgroundOne : function(){
		background = game.add.group();
		var bg = background.create(0,0,"background");
		bg.fixedToCamera= true;
	},
	loadGround : function(){
		//create plateform (ground);
		grounds = game.add.group();
		grounds.enableBody=true;

		var ground	= grounds.create(0,game.world.height-100,"ground");
		ground.body.immovable=true;
		// ground.scale.setTo(1.5,1);
		ground.fixedToCamera= true;
	},
	loadBushes:function(){
		console.log("okokooko");
		bushes = game.add.group();
		bushes.enableBody=true;
		var bush	= bushes.create(500,500,"bush");
		bush.body.immovable=true;
	},
	loadFinish:function(){
		finishes = game.add.group();
		finishes.enableBody=true;

		game.physics.arcade.enable(finishes);
		
		finish	= finishes.create(1200,game.world.height-300,"finish");
		finish.body.immovable=true;

	},
	loadTree : function(nb){
		//populate map with 4 tree
		trees = game.add.group();
		treeName = ["tree","tree2"];
		for(var i=0; i<nb; i++){
			tree[i]=trees.create(game.world.randomX,game.world.height-500,treeName[Math.floor(Math.random()*2)]);	// 500 = 400 of tree size + 100 of plateform 
			// tree[i].scale.setTo(1-(Math.random()*0.2),1-(Math.random()*0.2));
			// *1000 - 200 => -200=mid width of three and 1000 is for 800 + 200 (full map)
		}
	},
	checkFinish: function(){
		if(player.body.center.x > finish.body.center.x){
			finishReached = true;
			avghs.characters.resurect();
			game.time.events.add(Phaser.Timer.SECOND*2,function(){
				game.state.start("LevelTwoIntro",true,false);
			},this).autoDestroy = true;
		}
	},
	addBird: function(){
		var bird = [];
		for(var i=0;i<9;i++){
			bird[i]=game.add.sprite(game.world.randomX, Math.random()*400, 'bird');
			bird[i].animations.add("fly");
			bird[i].animations.play('fly', 4, true);
		}
	}
};