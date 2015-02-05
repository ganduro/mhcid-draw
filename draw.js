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

function onAddEvent(event) {
	var x = event.offsetX;
	var y = event.offsetY;
	var p = createPlanet(x, y);
	planets.push(p);
}

function createPlanet(x, y) {
	var p = {
		r: Math.floor(Math.random()*255),
		g: Math.floor(Math.random()*255),
		b: Math.floor(Math.random()*255),
		distance: Math.sqrt(x*x + y*y),
		angle: Math.atan2(y, x),
		radius: 15 + Math.floor(30*Math.random()),
		angularSpeed: 0.5 + Math.random()*3,
		dir: Math.random() < 0.5 ? -1 : 1
	};
	return p;
}

function drawPlanet(planet, ctx) {

  // update planet angle
  planet.angle += planet.angularSpeed;

  // dir is either 1 or -1
  var x = planet.distance * planet.dir * Math.cos(planet.angle * Math.PI/180);
  var y = planet.distance * planet.dir * Math.sin(planet.angle * Math.PI/180);


  // draw planet at location x, y with radius and color randomized
  	ctx.beginPath();
  	ctx.fillStyle = "rgb(" + planet.r + "," + planet.g + "," + planet.b + ")";
	ctx.arc(x,y,planet.radius,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();
}

// frame drawing routine.
// this method will be invoked once for every frame.
// - canvas: an HTML canvas element
// - ctx: a 2D drawing context for the canvas
function draw(canvas, ctx) {

	ctx.fillStyle = "black";
 	ctx.fillRect(-w, -h, 2*w, 2*h);

	for (var i=0; i<planets.length; ++i) {
		drawPlanet(planets[i],ctx);
	}

  	ctx.beginPath();
  	ctx.fillStyle = 'gold';
	ctx.arc(0,0,50,0,2*Math.PI);
	ctx.fill();
	ctx.closePath();

  	if (frameCount % wait === 0) {
    // DON'T ROTATE ALL THE THINGS
    //ctx.rotate(angle * Math.PI/180);

    //make some planets, son
  	/*ctx.beginPath();
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
	ctx.closePath();*/
    
  }
  // update the frame count
  frameCount += 1;
}