// player.js
'use strict';

var playerAnimationFrame = new Image();
playerAnimationFrame.src = 'img/playerMoveAnimation.png';
var playerImage = new Image();
playerImage.src = 'img/player.png';


const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 0;

// Player object
var Player = {
  // Fields
      x: 0,
      y: 0,
      speedX:0,
      speedY:0,
      width: 73, // Width of the player's sprite
      height: 93.5, // Height of the player's sprite
      score : 0,
      lives:3,
      health:100,
      scaleImage: 1,
      isRight:false,
      isLeft:false,
      isDown:false,
      isUp:false,
  // Draw sprite sheet for player animation
  drawFrame: function (frameX,frameY,canvasX,canvasY){
  context.drawImage(playerAnimationFrame, frameX * this.width, frameY * this.height,
                    this.width,this.height, canvasX, canvasY,this.width,this.height);
},
step: function() {
  frameCount++;
  if (frameCount < 10) {
    window.requestAnimationFrame(Player.step);
    return;
  }

  frameCount = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);
  Player.drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
  currentLoopIndex++;

  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
     currentDirection++; // Next row/direction in the sprite sheet
  }

  // Reset to the "down" direction once we've run through them all
  if (currentDirection >= 4) {
    currentDirection = 0;
  }

  window.requestAnimationFrame(Player.step);
},
// Animation frame for player move
animate:function init() {
  Player.drawFrame(0, 0, 0, 0);
  Player.drawFrame(0, 0, this.width, 0);
  Player.drawFrame(0, 0, this.width * 2, 0);
  Player.drawFrame(2, 0, this.width * 3, 0);
},
  // Update player position
  update: function(){
    Player.x += Player.speedX;
    Player.y += Player.speedY;
    context.clearRect(0, 0, canvas.width, canvas.height);

    // var dpr = window.devicePixelRatio*10;
    // canvas.width = playerImage.width * dpr;
    // canvas.height = playerImage.height * dpr;
  },
  // Display a player
  display: function(){
    // Player.drawFrame(cycleLoop[currentLoopIndex], 0, 0,Player.width,Player.height,Player.x,Player.y,Player.width*Player.scaleImage,
    // Player.height*Player.scaleImage);
    context.drawImage(playerAnimationFrame, 0,0,Player.width,Player.height,Player.x,Player.y,Player.width*Player.scaleImage,
    Player.height*Player.scaleImage);

  }
};
