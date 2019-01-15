// main.js
'use strict';
// Set up a canvas
var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

// Obstacle object
// var Obstacle = {
// 	// An obstacle object constructor
//   // @param context: where to draw an object
// 	// @param width: set an object width
// 	// @param height: set an object height
// 	constructor: function Obstacle (context,width,height){
// 		  this.x = coordinates.x;
// 			this.y = coordinates.y;
// 			this.width = width;
// 			this.height = height;
// 			this.context = context;
// 	},
// 	// Render function for an object of type Obstacle
// 	// @param context: where to draw an object
// 	render: function(context){
// 		context.beginPath();
// 		context.fillRect(this.x, this.y,this.width,this.height);
// 	}
// }

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
	context.clearRect(0,0,500,500);
};

var enemy1 = Object.create(Enemy);
var player = Object.create(Player);
// Draw to the main scene
(function draw(){
	// Remove objects from canvas
	// Done once for all objects on the canvas
	clearCanvas();

	// Update objects position on the x and y axis
	enemy1.update();
	player.update();

	// Draw object again
	enemy1.display();
	player.display();

	// Call this function recursively to draw objects to canvas
	requestAnimationFrame(draw);
})();


// TODO:
// Check if an object is within a canvas bounds
// (function checkBounds(){
// 	if(Player.y + Player.height>= window.height){
// 		console.log('Out of bounds on Y-axis');
// 	}
// 	canvas.clientWidth;
// })();

// Move player according to the key pressed
window.addEventListener('keypress', function(event){
	if(event.defaultPrevented)
		return;
	switch(event.key){
		case "ArrowDown":
		console.log('Down pressed');
		Player.speedY +=1;
		break;
		case "ArrowUp":
		console.log('Up pressed');
		Player.speedY -=1;
		break;
		case "ArrowLeft":
		console.log('Left pressed');
		Player.speedX -=1;
		break;
		case "ArrowRight":
		console.log('Right pressed');
		Player.speedX += 1;
		break;
	}
});
