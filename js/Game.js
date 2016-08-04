var ColorQuest = ColorQuest || {};

ColorQuest.Game = function(){};

ColorQuest.Game.prototype = {
  preload: function() {
      this.game.time.advancedTiming = true;
    },
  create: function() {
    this.map = this.game.add.tilemap('level1');

    //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
    this.map.addTilesetImage('tiles_spritesheet', 'gameTiles');

    //create layers
    this.backgroundlayer = this.map.createLayer('backgroundLayer');
    this.blockedLayer = this.map.createLayer('blockedLayer');

    //collision on blockedLayer
    this.map.setCollisionBetween(1, 5000, true, 'blockedLayer');

    //resizes the game world to match the layer dimensions
    this.backgroundlayer.resizeWorld();

    //create player
    this.player = this.game.add.sprite(20, 20, 'player');

    //enable physics on the player
    this.game.physics.arcade.enable(this.player);

    //player gravity
    this.player.body.gravity.y = 1000;

    //properties when the player is ducked and standing, so we can use in update()
    var playerDuckImg = this.game.cache.getImage('playerDuck');
    this.player.duckedDimensions = {width: playerDuckImg.width, height: playerDuckImg.height};
    this.player.standDimensions = {width: this.player.width, height: this.player.height};
    this.player.anchor.setTo(0.5, 1);
    
    //the camera will follow the player in the world
    this.game.camera.follow(this.player);

    //move player with cursor keys
    this.cursors = this.game.input.keyboard.createCursorKeys();

    //sounds
    this.coinSound = this.game.add.audio('coin');
  },
  
  update: function() {
    //collision
    this.game.physics.arcade.collide(this.player, this.blockedLayer, this.playerHit, null, this);

      if(this.cursors.up.isDown) {
        console.log('jumping');
        this.playerJump();
      } else if (this.cursors.left.isDown) {
        console.log('left cursor down');
        this.playerLeft();
      } else if (this.cursors.right.isDown) {
        console.log('right cursor down');
        this.playerRight();
      }
  },

  playerJump: function() {
    if(this.player.body.blocked.down) {
      this.player.body.velocity.y -= 300;
    }    
  },

  playerRight: function() {
      this.player.body.x += 5;
      this.player.scale.setTo(1, 1);
  },

  playerLeft: function() {
      this.player.body.x -= 5;
      this.player.scale.setTo(-1, 1);
  },

};