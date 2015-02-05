// state variables, helper functions, etc.
// go here...
var h;
var w;
var planets = [];
var angle = 0.5;
var wait = 1;
var frameCount = 0;

	var planetOneR = Math.floor(Math.random()*255);
	var planetOneG = Math.floor(Math.random()*255);
	var planetOneB = Math.floor(Math.random()*255);

	var planetTwoR = Math.floor(Math.random()*255);
	var planetTwoG = Math.floor(Math.random()*255);
	var planetTwoB = Math.floor(Math.random()*255);

	var planetThreeR = Math.floor(Math.random()*255);
	var planetThreeG = Math.floor(Math.random()*255);
	var planetThreeB = Math.floor(Math.random()*255);

//defines 
function addPlanet(x, y, radius, r, g, b) {
  planets.push({
    x: x,
    y: y,
    radius: radius,
    c: "rgb(" + r + "," + g + "," + b + ")"
  });
}

// add a new planet
function onAddEvent(evt) {
  // randomize color choices
  var r = Math.floor(Math.random()*255);
  var g = Math.floor(Math.random()*255);
  var b = Math.floor(Math.random()*255);
  // add the planet at the mouse offsetX and offsetY
  addPlanet(evt.offsetX, evt.offsetY, r, g, b);
}

// one-time initialization.
// by default, this method is only invoked once, upon page launch.
// - canvas: an HTML canvas element
// - ctx: a 2D drawing context for the canvas
function init(canvas, ctx) {
	h = canvas.height;
	w = canvas.width;
	ctx.translate(w/2, h/2);
	canvas.addEventListener("click", onAddEvent);
}

function getPolar(x, y) {
  var radius = Math.sqrt(x*x + y*y);
  var angle = Math.atan2(y, x);
  return [radius, angle];
}

function drawPlanet(p, ctx) {
  // update planet angle
  p.angle += p.angularSpeed;

  // dir is either 1 or -1
  var x = p.distance * p.dir * Math.cos(p.angle * Math.PI/180);
  var y = p.distance * p.dir * Math.sin(p.angle * Math.PI/180);

  // draw planet at location x, y

}

// frame drawing routine.
// this method will be invoked once for every frame.
// - canvas: an HTML canvas element
// - ctx: a 2D drawing context for the canvas
function draw(canvas, ctx) {
	ctx.fillStyle = "black";
  ctx.fillRect(-w, -h, 2*w, 2*h);

  	ctx.beginPath();
  	ctx.fillStyle = 'gold';
	ctx.arc(0,0,50,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();

  	if (frameCount % wait === 0) {
    // rotate all the things.
    ctx.rotate(angle * Math.PI/180);

    //make some planets, son
  	ctx.beginPath();
  	ctx.fillStyle = "rgb(" + planetOneR + "," + planetOneG + "," + planetOneB + ")";
	ctx.arc(-100,-100,30,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();

  	ctx.beginPath();
  	ctx.fillStyle = "rgb(" + planetTwoR + "," + planetTwoG + "," + planetTwoB + ")";
	ctx.arc(100,-25,15,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();

  	ctx.beginPath();
  	ctx.fillStyle = "rgb(" + planetThreeR + "," + planetThreeG + "," + planetThreeB + ")";
	ctx.arc(-100,150,40,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
    
  }
  // update the frame count
  frameCount += 1;
}