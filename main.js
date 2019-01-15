// main.js
'use strict';

const SCREEN_FIT_RATIO = 0.98;
// Set up a canvas
var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

// Set the size of the screen
const screenSize = {
	width: window.innerWidth,
	height: window.innerHeight
};

// Setup game scene
(function setupWindow(){
	canvas.width = screenSize.width;
	canvas.height = screenSize.height;
})();

// coordinates of any object on the canvas
var coordinates = {
	x:0,
	y:0
};

// Remove specified object from the canvas
// @param {object} - specify object to remove from the canvas
function removeFromCanvas(object){
	context.clearRect(object.x,object.y,object.width,object.height);
};

function clearCanvas(){
	context.clearRect(0,0,2000,2000);
};

var enemy1 = Object.create(Enemy);
var player = Object.create(Player);
var grass = Object.create(Obstacle);


// Draw to the main scene
(function draw(){
	// Remove objects from canvas
	// Done once for all objects on the canvas
	clearCanvas();

	// Update objects position on the x and y axis
  	player.update();

	player.display();
	grass.render(Obstacle.x,Obstacle.y);

	// Call this function recursively to draw objects to canvas
	requestAnimationFrame(draw);
})();


// Check if the player is within a canvas bounds
function checkBounds(){
	// Move player within screen bounds
    if (Player.x < 0) {
		Player.speedX *= -1;
	  }
	  if (Player.x > screenSize.width) {
		Player.speedX *= -1;
	  }
	  if (Player.y < 0) {
		Player.speedY *= -1;
	  }
	  if (Player.y > screenSize.height) {
		Player.speedY *= -1;
	  }
};

// Move player according to the key pressed
window.addEventListener('keypress', function(event){
	if(event.defaultPrevented)
		return;
	
		switch(event.key){
			case "ArrowDown":
			console.log('Down pressed');Player.speedY +=1; break;
			case "ArrowUp":
			console.log('Up pressed'); Player.speedY -=1; break;
			case "ArrowLeft":
			console.log('Left pressed'); Player.speedX -=1; break;
			case "ArrowRight":
			console.log('Right pressed');Player.speedX += 1; break;
		}

});
