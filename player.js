// player.js
'use strict';

const SPEED = 1;
var playerImage = new Image();
playerImage.src = 'img/player.png';

// Player object
var Player = {
  // Fields
      x: 0,
      y: 0,
      speedX:0,
      speedY:0,
      width: 20,
      height: 20,
      score : 0,
      lives:3,
      health:100,
      scaleImage: 1,
      isMoving: false,

  // Update player position
  update: function(){
    this.x += this.speedX;
    this.y += this.speedY;
  },

  // Display a player
  display: function(){
    context.drawImage(playerImage, 0,0,this.height,this.width,this.x,this.y,this.width*this.scaleImage,
    this.height*this.scaleImage);
  }
};
