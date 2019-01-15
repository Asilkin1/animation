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
    this.x += this.speedX;
    if(this.x > 350 - this.w || this.x < 0){
      this.speedX *= -1;
    }
    this.y += this.speedY;
  },
  display: function(){
    context.drawImage(enemyImage, 0,0,this.w,this.h,this.x,this.y,this.w*this.scaleImage,
    this.h*this.scaleImage);
  }
} // end of enemy
