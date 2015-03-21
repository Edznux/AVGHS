avghs.hud = function(game){
	this._text;
	this.storyNumber=0;
	this.inter;
	this.STORY = ["Your life begin there","And while you go straigt forward", "you will be alive"];
	this.loadHud= function(){
		var hudKey = game.add.text(600, 10, "Keys : SpaceBar & arrows", { font: '12px Arial', fill: '#000' });
		hudKey.fixedToCamera = true;
	};
	this.story= function(){
		// this.storyTelling(avghs.hud.storyNumber);
		// this.inter = setInterval(function(){
			// avghs.hud.storyNumber++;
			// avghs.hud.storyTelling(avghs.hud.storyNumber);
		// },6000);
	};
	this.storyTelling= function(){	
		// if(seqNumber<STORY.length && seqNumber>=0){
			// console.log("story",this.STORY);
			// console.log("storyNumber",this.storyNumber);
			this._text=game.add.text(player.position.x-(avghs.hud.STORY[avghs.hud.storyNumber].length*7), 100, avghs.hud.STORY[avghs.hud.storyNumber], { fontSize: '32px', fill: '#000' });
			this._text.fixedToCamera = true;
			// game.add.tween(text).to({alpha: 0}, 7000, Phaser.Easing.Linear.None, true);
		// }
	};
	this.hideCurrent=function(){
		game.add.tween(this._text).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
		// this.text.destroy;
	}
	this.nextStory = function(){

		avghs.hud.storyNumber < avghs.hud.STORY ? avghs.hud.storyNumber++ : '';
	};
	this.reset = function(){
		clearInterval(this.inter);
	}
};