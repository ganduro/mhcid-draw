// state variables, helper functions, etc.
// go here...
var h;
var w;
var angle = 0.5;
var wait = 1;
var frameCount = 0;

// one-time initialization.
// by default, this method is only invoked once, upon page launch.
// - canvas: an HTML canvas element
// - ctx: a 2D drawing context for the canvas
function init(canvas, ctx) {
	h = canvas.height;
	w = canvas.width;
	ctx.translate(w/2, h/2);
}


// frame drawing routine.
// this method will be invoked once for every frame.
// - canvas: an HTML canvas element
// - ctx: a 2D drawing context for the canvas
function draw(canvas, ctx) {
	ctx.fillStyle = "black";
  ctx.fillRect(-width, -height, 2*width, 2*height);

  	ctx.beginPath();
  	ctx.fillStyle = 'gold';
	ctx.arc(0,0,50,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();

  	if (frameCount % wait === 0) {
    // rotate coordinate space by 'angle' degrees
    ctx.rotate(angle * Math.PI/180);
    // draw a black, 100x100 rectangle
  	ctx.beginPath();
  	ctx.fillStyle = 'green';
	ctx.arc(0,-150,30,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();

  	ctx.beginPath();
  	ctx.fillStyle = 'red';
	ctx.arc(100,-50,15,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();

  	ctx.beginPath();
  	ctx.fillStyle = 'violet';
	ctx.arc(-300,0,40,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
    
  }
  // update the frame count
  frameCount += 1;
}