// main.js
'use strict';

// Set up a canvas
var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

// coordinates of an object on the canvas
var coordinates = {
	x:10,
	y:10
};

// Remove an object
function removeFromCanvas(){
	context.clearRect(object.x,object.y,object.width,object.height);
};

// @param object: which object to redraw in 
// a frama animation
function redraw(object){
    var deltaX = 1;
	context.fillRect(object.x+deltaX, object.y, object.width, object.height);
	requestAnimationFrame(redraw);


};

function draw() {
    context.beginPath();
    context.arc(coordinates.x, coordinates.y, 20, 0, 2 * Math.PI);
    context.fillStyle = 'rgba(250,0,0,0.4)';
    context.fill();
    
    coordinates.x += 1;
    context.fillStyle = "rgba(34,45,23,0.4)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(draw);
    //ctx.clearRect(0,0,can.width,can.height);
}

// Create an object
var object = new Obstacle(0,20,20,20,context);

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
		// context.fillRect(this.x,this.y,this.width,this.height);
}


// Check if an object is within a canvas bounds
(function withinScreen(object){
	var screenWidth = canvas.clientWidth;
	var screenHeight = canvas.clientHeight;
	// Check if object x and y coordinate is more or equal to canvas
	// if(object.x >= screenWidth || object.y >= screenHei){
	//
	// };
})();

// // Add some rects
// for(var i = 0; i < 10; i++) {
// 	// Set a color
// 	context.fillStyle = 'rgb(200,0,0)';
// 	// Set coordinates
// 	context.fillRect(i*(i+2),0,i+i,i*20);
// };

// Move player according to the key pressed
window.addEventListener('keydown', function(event){
	if(event.defaultPrevented)
		return;
	switch(event.key){
		case "ArrowDown":
		console.log('Down pressed');
		removeFromCanvas();
		break;
		case "ArrowUp":
		console.log('Up pressed');
		break;
		case "ArrowLeft":
		console.log('Left pressed');
		break;
		case "ArrowRight":
		console.log('Right pressed');
		draw();
		break;
	}
});
