
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
	ctx.fillStyle = "rgb(250,250,250)";
	ctx.fillRect(0,0,500,500);
	ctx.lineWidth = "2";
	ctx.lineJoin = "round";
	ctx.strokeStyle = "rgba(0,204,255,.5)";
	ctx.beginPath(); //turtle graphics. mit program language for little kids :'(
	
	x = 0; y = 0;
	
	var i = 0;
	while(i < 500){
		ctx.beginPath();
		x = i;
		ctx.moveTo(x,y);
		ctx.lineTo(x,y+500);
		ctx.stroke();
		i+=15;
	}
	i= 0; x = 0;
	while(i < 500){
		ctx.beginPath();
		y = i;
		ctx.moveTo(x,y);
		ctx.lineTo(x+500,y);
		ctx.stroke();
		i+=15;
	}
	
	
	

	
} 


function circle(xcen, ycen, rad){ //do i not have to declare these variables?
	ctx.arc(xcen,ycen,rad,0,2*Math.PI,false); //false means counterclockwise. true is otherwise. don't need it.
	ctx.stroke();
}

