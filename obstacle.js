// file obstacle.js
'use strict';

var tileImage = new Image();
tileImage.src = 'img/tiles/box.png';

var variousObstacles = [];

// Obstacle object
var Obstacle = {

			width:70,
			height:70,
			scaleImage:0.8,
			x: canvas.clientLeft,
			y: window.innerHeight - 70,
			
	// Render function for an object of type Obstacle
	// @param context: where to draw an object
	render:// Draw sprite sheet for player animation
  function (x,y){
  context.drawImage(tileImage, 0,0,Obstacle.width,Obstacle.height,x,y,Obstacle.width*Obstacle.scaleImage,
    Obstacle.height*Obstacle.scaleImage);
}
};
