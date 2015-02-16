avghs.hud = function(game){
	this.storyNumber=0;
	this.inter;
	this.loadHud= function(){
		var hudKey = game.add.text(600, 10, "Keys : SpaceBar & arrows", { font: '12px Arial', fill: '#000' });
		hudKey.fixedToCamera = true;
	},
	this.story= function(){
		this.storyTelling(avghs.hud.storyNumber);
		this.inter = setInterval(function(){
			avghs.hud.storyNumber++;
			avghs.hud.storyTelling(avghs.hud.storyNumber);
		},6000);
	},
	this.storyTelling= function(seqNumber){	
		var STORY = ["Your life begin there","And while you go straigt forward", "you will be alive"];
		var text;
		if(seqNumber<STORY.length && seqNumber>=0){
			text=game.add.text(player.position.x-(STORY[seqNumber].length*7), 100, STORY[seqNumber], { fontSize: '32px', fill: '#000' });
			text.fixedToCamera = true;
			game.add.tween(text).to({alpha: 0}, 7000, Phaser.Easing.Linear.None, true);
		}
	},
	this.reset = function(){
		clearInterval(this.inter);
	}
};