'use strict';

(function() {
	var canvas = document.getElementById("canvas");   // the canvas where game will be drawn
	var context = canvas.getContext("2d");            // canvas context
	var levelCols=30;							// level width, in tiles
	var levelRows=17;							// level height, in tiles
	var tileSize=30;							// tile size, in pixels
	var playerCol=0;                                  // player starting column
	var playerRow=20;                                  // player starting row
	
	var level = [        						// the 11x9 level - 1=wall, 0=empty space
		[0,0,2,2,2,0,0,0,2,2,2],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1],
	];
 
	var playerYPos=playerRow*tileSize;				// converting Y player position from tiles to pixels
	var playerXPos=playerCol*=tileSize;               // converting X player position from tiles to pixels
	
	canvas.width=canvas.width + (tileSize*levelCols);                   // canvas width. Won't work without it even if you style it from CSS
	canvas.height=canvas.height + (tileSize*levelRows);                   // canvas height. Same as before
 
	renderLevel();

    function renderLevel(){
		// clear the canvas
		context.clearRect(0, 0, canvas.width, canvas.height);
		// Draw tiles
		context.fillStyle = "#ff0000";
		for(var i=0;i<levelRows;i++){
			for(var j=0;j<levelCols;j++){
                // if 1 draw ground at the bottom of the canvas
				if(level[i][j]==1){
					context.fillRect(j*tileSize,canvas.height-tileSize,tileSize,tileSize);	
                }
                // Draw clouds
                if(level[i][j]==2){
					context.fillRect(j*tileSize,10,tileSize,tileSize);	
				}
			}
		}
		// player position on the canvas
		context.fillStyle = "#00ff00";
		context.fillRect(playerXPos,playerYPos,tileSize,tileSize);
	}

})();