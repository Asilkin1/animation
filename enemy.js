// enemy.js
'use strict';

// Set an enemy image
var enemyImage = new Image();
enemyImage.src = 'img/enemy.png';

// Create an enemy
var Enemy = {
  x: Math.random() * 3,
  y: Math.random() * 4,
  w: 100,
  h: 75,
  speedX: 1, // Move over x-axis
  speedY: 0, // Move over y-axis
  scaleImage: Math.random()+0.2,
  update: function(){
    Enemy.x += Enemy.speedX;
    if(Enemy.x > 350 - Enemy.w || Enemy.x < 0){
      Enemy.speedX *= -1;
    }
    Enemy.y += Enemy.speedY;
    window.requestAnimationFrame(Enemy.update);
  },
  display: function(){
    context.drawImage(enemyImage, 0,0,Enemy.w,Enemy.h,Enemy.x,Enemy.y,Enemy.w*Enemy.scaleImage,
    Enemy.h*Enemy.scaleImage);

    window.requestAnimationFrame(Enemy.display);
  }
} // end of enemy
