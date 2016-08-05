var ColorQuest = ColorQuest || {};

var score = 0;
var scoreHandler = $('#score_num');
var time = '00:00';


ColorQuest.game = new Phaser.Game(300, 200, Phaser.CANVAS, '');

ColorQuest.game.state.add('Boot', ColorQuest.Boot);
ColorQuest.game.state.add('Preload', ColorQuest.Preload);
ColorQuest.game.state.add('Game', ColorQuest.Game);

ColorQuest.game.state.start('Boot');
