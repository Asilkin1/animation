// main.js
'use strict';

// Set up a canvas
var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

// An obstacle object on a canvas
// @param x: coordinates on the x axis
// @param y: coordinates on the y axis
// @param width: width of the object
// @param height: heigth of the object
// @context: place to draw an object
function Obstacle (x,y,width,height,context){
	  this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.context = context;
}

// coordinates of any object on the canvas
var coordinates = {
	x:0,
	y:0
};

// Create a rectangular shape
function rect(){
	context.beginPath();
	context.fillRect(coordinates.x,coordinates.y,20,20);
};

// Clear the whole canvas
function removeFromCanvas(){
	context.clearRect(0,0,canvas.width,canvas.height);
};

(function draw(){
	removeFromCanvas(); // Remove object from canvas
	rect();
	requestAnimationFrame(draw);
})();

// TODO:
// Check if an object is within a canvas bounds


// Move player according to the key pressed
window.addEventListener('keydown', function(event){
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
