// main.js
'use strict';

// Set up a canvas
var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

// Obstacle object
var Obstacle = {
	// An obstacle object constructor
  // @param context: where to draw an object
	constructor: function Obstacle (context){
		  this.x = coordinates.x;
			this.y = coordinates.y;
			this.width = 10;
			this.height = 10;
			this.context = context;
	},
	// Render function for an object of type Obstacle
	// @param context: where to draw an object
	render: function(context){
		context.beginPath();
		context.fillRect(this.x, this.y,this.width,this.height);
	}
}

// coordinates of any object on the canvas
var coordinates = {
	x:0,
	y:0
};

// Clear the whole canvas
function removeFromCanvas(){
	context.clearRect(0,0,canvas.width,canvas.height);
};

(function draw(){
	removeFromCanvas(); // Remove object from canvas
	Obstacle.constructor(context);
	Obstacle.render(context);
	requestAnimationFrame(draw);
})();

// TODO:
// Check if an object is within a canvas bounds


// Move player according to the key pressed
window.addEventListener('keypress', function(event){
	if(event.defaultPrevented)
		return;
	switch(event.key){
		case "ArrowDown":
		console.log('Down pressed');
		coordinates.y +=1;
		break;
		case "ArrowUp":
		console.log('Up pressed');
		coordinates.y -=1;
		break;
		case "ArrowLeft":
		console.log('Left pressed');
		coordinates.x -=1;
		break;
		case "ArrowRight":
		console.log('Right pressed');
		coordinates.x +=1;
		break;
	}
});
