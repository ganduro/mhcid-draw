// state variables, helper functions, etc.
// go here...
var h;
var w;
var planets = [];
var stars = [];
var wait = 1;
var frameCount = 0;
var cleft, ctop;

function createStar() {
	var s = {
		x: Math.floor(Math.random() * (2*w)-w),
		y: Math.floor(Math.random() * (2*h)-h),
		size: Math.floor(1+Math.random()*3)
	};
	return s;
}

// one-time initialization.
// by default, this method is only invoked once, upon page launch.
// - canvas: an HTML canvas element
// - ctx: a 2D drawing context for the canvas
function init(canvas, ctx) {
	h = canvas.height;
	w = canvas.width;
    cleft = canvas.offsetLeft;
    ctop = canvas.offsetTop;
	ctx.translate(w/2, h/2);
	canvas.addEventListener("click", onAddEvent);
	for (var i=0;i<300;i++){
		var s = createStar();
		stars.push(s);
	}
}

function onAddEvent(event) {
	var x = event.pageX - cleft - w/2;
	var y = event.pageY - ctop - h/2;
	var p = createPlanet(x, y);
	planets.push(p);
}

function createPlanet(x, y) {
	var p = {
		r: Math.floor(Math.random()*255),
		g: Math.floor(Math.random()*255),
		b: Math.floor(Math.random()*255),
		distance: Math.sqrt(x*x+y*y),
		angle: Math.atan2(y, x) * 180/Math.PI,
		radius: 15 + Math.floor(30*Math.random()),
		angularSpeed: 0.5 + Math.random()*3,
		dir: Math.random() < 0.5 ? -1 : 1
	};
	return p;
}

function drawPlanet(planet, ctx) {

  // update planet angle
  // dir is either 1 or -1
  planet.angle += planet.dir * planet.angularSpeed;

  var x = planet.distance * Math.cos(planet.angle * Math.PI/180);
  var y = planet.distance * Math.sin(planet.angle * Math.PI/180);


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

 	for (var i=0;i<stars.length;i++) {
 		ctx.fillStyle = "white";
 		ctx.beginPath();
 		ctx.rect(stars[i].x,stars[i].y,stars[i].size,stars[i].size);
 		ctx.fill();
 		ctx.closePath();
 	}

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