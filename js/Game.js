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
    this.map.addTilesetImage('background_spritesheet', 'backgroundTiles');

    //create layers
    this.backgroundlayer = this.map.createLayer('backgroundLayer');
    this.backgroundFlora = this.map.createLayer('backgroundFlora');
    this.blockedLayer = this.map.createLayer('blockedLayer');

    //collision on blockedLayer
    this.map.setCollisionBetween(1, 20000, true, 'blockedLayer');

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

    //create gems
    this.createGems();

    //sounds
    this.gemSound = this.game.add.audio('coin');



  },
  
  update: function() {
    //collision
    this.game.physics.arcade.collide(this.player, this.blockedLayer, this.playerHit, null, this);
    //coin collection
    this.game.physics.arcade.overlap(this.player, this.gems, this.collect, null, this);

      if(this.cursors.up.isDown) {
        this.playerJump();
      } else if (this.cursors.left.isDown) {
        this.playerLeft();
      } else if (this.cursors.right.isDown) {
        this.playerRight();
      }

      if(this.player.y >= this.world.height) {
        this.player.loadTexture('playerDead');
        console.log('Dead! Game over');
        this.game.state.start('Game');
      }
  },

  playerJump: function() {
    if(this.player.body.blocked.down) {
      this.player.body.velocity.y -= 500;
      console.log('jumping');
    }    
  },


  playerRight: function() {
      this.player.body.velocity.x += 5;
      this.player.scale.setTo(1, 1);
      console.log('right');
  },

  playerLeft: function() {
      this.player.body.velocity.x -= 5;
      this.player.scale.setTo(-1, 1);
      console.log('left');
  },

  // find all objects in the map layer that contain a property called 'type' equal to a certain value
  findObjectsByType: function(type, map, layerName) {
    var result = [];
    console.log(result);
    map.objects[layerName].forEach(function(element){
      if(element.properties.type === type) {
        element.y -= map.tileHeight; //fixes the gem position. Seems like phaser and tiled have different anchor points... 
        result.push(element);
      }   
    });
    console.log(result);
    return result
  },

  //create a sprite from an object
  createFromTiledObject: function(element, group) {
    var sprite = group.create(element.x, element.y, element.properties.sprite);
    //copy all properties to the sprite
    Object.keys(element.properties).forEach(function(key){
      sprite[key] = element.properties[key];
    });
  },

  createGems: function() {
    // create a new group of sprites called gems
    this.gems = this.game.add.group();
    // enable the physics system for the gems  group
    this.gems.enableBody = true;
    //find all the objects from the objectLayer of our map and add to an array
    var result = this.findObjectsByType('gem', this.map, 'objectLayer');
    //loop through the array making an in-game sprite for each
    result.forEach(function(element) {
      this.createFromTiledObject(element, this.gems);
    }, this);
  },

  collect: function(player, collectable) {
    this.gemSound.play();
    score++;
    console.log(scoreHandler);
    scoreHandler.text(score);
    console.log('score: ', score);
    //this.scoreText.text = 'Score: ' + score;
    collectable.kill();
  }

};