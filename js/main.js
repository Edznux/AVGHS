var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

game.state.add('Boot', avghs.boot);
game.state.add("Preload",avghs.preload);
game.state.add("Player",avghs.characters);
// game.state.add("Hud",avghs.hud);
game.state.add("LevelOne",avghs.levelOne);
game.state.add("LevelTwo",avghs.levelTwo);
game.state.add("GameOver",avghs.gameOver);
game.state.add("LevelTwoIntro",avghs.levelTwoIntro);
game.state.start('Boot');


