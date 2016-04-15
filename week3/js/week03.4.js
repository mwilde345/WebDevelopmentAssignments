
var x= 0;
var y = 0;
var theta = 0;
var canvas; //what is this stored as?
var ctx;
var radius = 0;

function init() { //this is an initialization function
	canvas = document.getElementById('myCanvas');//this relates to the canvas id call in our html file
	ctx = canvas.getContext('2d'); //give it 2d or 3d when using canvas
	draw();
}

function draw(){  
	ctx.fillStyle = "rgb(250,250,250)";
	ctx.fillRect(0,0,500,500);
	ctx.lineWidth = "5";
	ctx.lineJoin = "round";
	ctx.strokeStyle = "rgba(0,204,255,.5)";
	ctx.beginPath(); 
	
	circle(100,100,80);
	ctx.fillStyle = "rgba(255, 102, 0,.6)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.strokeStyle = "rgba(150,25,78,.5)";
	circle(220,100,80);
	ctx.fillStyle = "rgba(102, 102, 0,.3)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.strokeStyle = "rgba(0,78,180,.5)";
	circle(100,220,80);
	ctx.fillStyle = "rgba(102, 255, 0,.5)";
	ctx.fill();
	
	ctx.beginPath();
	
	
	
	

	
} 


function circle(xcen, ycen, rad){ 
	ctx.arc(xcen,ycen,rad,0,2*Math.PI,false); 
	ctx.stroke();
}

