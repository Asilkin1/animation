// main.js
'use strict';

var context = canvas.getContext('2d');

// Setup game scene
function setupWindow() {
	// Set up a canvas
	var gameArea = document.getElementById('gameArea');
	var widthToHeight = 4 / 3;
	var newWidth = window.innerWidth;
	var newHeight = window.innerHeight;
	var newWidthToHeight = newWidth / newHeight;

	if (newWidthToHeight > widthToHeight) {
		newWidth = newHeight * widthToHeight;
		gameArea.style.height = newHeight + 'px';
		gameArea.style.width = newWidth + 'px';
	} else {
		newHeight = newWidth / widthToHeight;
		gameArea.style.width = newWidth + 'px';
		gameArea.style.height = newHeight + 'px';
	}

	gameArea.style.marginTop = (-newHeight / 2) + 'px';
	gameArea.style.marginLeft = (-newWidth / 2) + 'px';

	var canvas = document.getElementById('canvas');
	canvas.width = newWidth;
	canvas.height = newHeight;
};

// Remove specified object from the canvas
// @param {object} - specify object to remove from the canvas
function removeFromCanvas(object) {
	context.clearRect(object.x, object.y, object.width, object.height);
};

function clearCanvas() {
	context.clearRect(0, 0, 2000, 2000);
};

var enemy1 = Object.create(Enemy);
var player = Object.create(Player);
var grass = Object.create(Obstacle);

// Draw to the main scene
(function draw() {
	// Remove objects from canvas
	// Done once for all objects on the canvas
	// clearCanvas();

	// Update objects position on the x and y axis
	player.update();

	// player.display();
	grass.render(Obstacle.x, Obstacle.y);

    renderLevel();
	// Call this function recursively to draw objects to canvas
	// requestAnimationFrame(draw);
})();


// Check if the player is within a canvas bounds
function checkBounds() {
	// Move player within screen bounds
	if (Player.x < 0) {
		Player.speedX *= -1;
	}
	if (Player.x > window.innerWidth) {
		Player.speedX *= -1;
	}
	if (Player.y < 0) {
		Player.speedY *= -1;
	}
	if (Player.y > window.innerHeight) {
		Player.speedY *= -1;
	}
};

// Keyboard pressed event listener
window.addEventListener('keypress', function (event) {
	if (event.defaultPrevented)
		return;

	switch (event.key) {
		case "ArrowDown":
			console.log('Down pressed'); Player.speedY += 1; break;
		case "ArrowUp":
			console.log('Up pressed'); Player.speedY -= 1; break;
		case "ArrowLeft":
			console.log('Left pressed'); Player.speedX -= 1; break;
		case "ArrowRight":
			console.log('Right pressed'); Player.speedX += 1; break;
	}

});

// Window resize event listener
window.addEventListener('resize', setupWindow);
window.addEventListener('orientationchange', setupWindow);
setupWindow();
