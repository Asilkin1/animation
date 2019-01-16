// player.js
'use strict';

var playerAnimationFrame = new Image();
playerAnimationFrame.src = 'img/playerMoveAnimation.png';
var playerImage = new Image();
playerImage.src = 'img/player.png';


const cycleLoop = [0,0,1,1];
const jumpLoop = [2,0,4];
const walkLoop = [0,1];
const hitObstacle = [5,6];

let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 0;

// Player object
var Player = {
  // Fields
  x: 0,
  y: 0,
  speedX: 1,
  speedY: 0,
  width: 73, // Width of the player's sprite
  height: 93.5, // Height of the player's sprite
  score: 0,
  lives: 3,
  health: 100,
  scaleImage: 0.3,
  isRight: false,
  isLeft: false,
  isDown: false,
  isUp: false,
  // Draw sprite sheet for player animation
  drawFrame: function (frameX, frameY, playerX, playerY) {
    context.drawImage(playerAnimationFrame, frameX * Player.width, frameY * Player.height,
      Player.width, Player.height, playerX, playerY, Player.width, Player.height);
  },
  // Update player position
  update: function () {
  	
    frameCount++;
    
    checkBounds();
    
    if (frameCount < 4 || Player.speedX == 0) {

      window.requestAnimationFrame(Player.update);

      return;
    }

    frameCount = 0;
    context.clearRect(Player.x, Player.y, Player.width, Player.height);
    Player.x += Player.speedX; // Change player's x-axis position
    Player.y += Player.speedY; // Change player's y-axis position
    Player.drawFrame(cycleLoop[currentLoopIndex], 0, Player.x, Player.y);
    currentLoopIndex++;


    if (currentLoopIndex >= cycleLoop.length) {
      currentLoopIndex = 0;
      currentDirection++; // Next row/direction in the sprite sheet
    }

    // Reset to the "down" direction once we've run through them all
    if (currentDirection >= cycleLoop.length) {
      currentDirection = 0;
    }

    window.requestAnimationFrame(Player.update);

  },
 
  // Display a player
  display: function () {
    context.drawImage(playerAnimationFrame, 0, 0, Player.width, Player.height, Player.x, Player.y, Player.width * Player.scaleImage,
      Player.height * Player.scaleImage);

  }
};
