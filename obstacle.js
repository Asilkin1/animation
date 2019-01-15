
// Obstacle object
var Obstacle = {
	// An obstacle object constructor
  // @param context: where to draw an object
	// @param width: set an object width
	// @param height: set an object height
	constructor: function Obstacle (context,width,height){
		  this.x = coordinates.x;
			this.y = coordinates.y;
			this.width = width;
			this.height = height;
			this.context = context;
	},
	// Render function for an object of type Obstacle
	// @param context: where to draw an object
	render: function(context){
		context.beginPath();
		context.fillRect(this.x, this.y,this.width,this.height);
	}
}
