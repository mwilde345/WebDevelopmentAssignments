
var x= 250;
var y = 250;
var theta = 0;
var canvas; //what is this stored as?
var ctx;
var radius = 0;

function init () { //this is an initialization function
	canvas = document.getElementById('myCanvas');//this relates to the canvas id call in our html file
	ctx = canvas.getContext('2d'); //give it 2d or 3d when using canvas
	draw();
}
//COOL! i have an array a. a.map(f); it applies function f to all elements of array

//more professional to have that ^ to call the draw function. like a main. 

function draw(){  //this bad boy will open up when we load node1.html.
	ctx.fillStyle = "rgba(155,155,155,.5)"
	ctx.fillRect(0,0,500,500);
	ctx.lineWidth = "5";
	ctx.lineJoin = "round";
	ctx.strokeStyle = "rgba(150,150,80,.5)";
	ctx.beginPath(); //turtle graphics. mit program language for little kids :'(
	
	radius = 80;
	circle(x,y,radius);
	ctx.beginPath();
	x-=20;
	y-=20;
	ctx.moveTo(x,y);
	turn(160);
	forward(60);
	turn(220);
	forward(60);
	
	
	turn(70);
	forward(60);
	turn(220);
	forward(60);
	
	turn(70);
	forward(60);
	turn(215);
	forward(60);
	
	turn(70);
	forward(60);
	turn(220);
	forward(60);
	
	turn(70);
	forward(60);
	turn(220);
	forward(60);
	
} 

function forward (w) {
	x = x + w*Math.sin(theta);
	y = y + w*Math.cos(theta);
	ctx.lineTo(x,y);
	ctx.stroke(); // lets you see it. 
}

function turn (angle) { 
	angle = (Math.PI/180)*angle; //cuz we only use radians
	theta = theta + angle;
}

function circle(xcen, ycen, rad){ //do i not have to declare these variables?
	ctx.arc(xcen,ycen,rad,0,2*Math.PI,false); //false means counterclockwise. true is otherwise. don't need it.
	ctx.stroke();
}

