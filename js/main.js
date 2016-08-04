var ColorQuest = ColorQuest || {};

ColorQuest.game = new Phaser.Game(746, 126, Phaser.AUTO, '');

ColorQuest.game.state.add('Boot', ColorQuest.Boot);
ColorQuest.game.state.add('Preload', ColorQuest.Preload);
ColorQuest.game.state.add('Game', ColorQuest.Game);

ColorQuest.game.state.start('Boot');
