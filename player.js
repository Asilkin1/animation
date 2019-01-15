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
      width: 66,
      height: 92,
      score : 0,
      lives:3,
      health:100,
      scaleImage: 1,
      isRight:false,
      isLeft:false,
      isDown:false,
      isUp:false,

  // Update player position
  update: function(){
    this.x += this.speedX;
    this.y += this.speedY;
    // var dpr = window.devicePixelRatio*10;
    // canvas.width = playerImage.width * dpr;
    // canvas.height = playerImage.height * dpr;
  },
  // Display a player
  display: function(){

    context.drawImage(playerImage, 0,0,this.width,this.height,this.x,this.y,this.width*this.scaleImage,
    this.height*this.scaleImage);

  }
};
