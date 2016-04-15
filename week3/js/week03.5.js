
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
	ctx.strokeStyle = "rgb(150,10,250)";
	ctx.fillRect(0,0,500,500);
	ctx.lineWidth = "5";
	ctx.moveTo(50,50);
	ctx.lineTo(450,50);
	ctx.stroke();
	
	
	ctx.fillStyle = "lightgrey";
	ctx.fillRect(220,170,200,35);
	
	ctx.fillStyle = "rgb(255,98,150)";
	ctx.font = "italic small-caps bold 25px arial";
	ctx.textAlign= "center";
	ctx.fillText("Chicken Little",250,35);
	
	var gradient = ctx.createLinearGradient(0,0,myCanvas.width,0);
	gradient.addColorStop("0","yellow");
	gradient.addColorStop("0.5","rgba(255,0,0,.1)");
	gradient.addColorStop(".6","blue");
	gradient.addColorStop("0.7","rgba(255,255,0,.3)");
	gradient.addColorStop(".8","blue");
	gradient.addColorStop("0.9","rgba(255,0,255,.4)");
	gradient.addColorStop("1.0","blue");
	ctx.fillStyle = gradient;
	ctx.textAlign = "left";
	ctx.fillText("Eat More Chikin!",220,200);
	
	ctx.beginPath();
	circle(180,400,200);
	ctx.fill();
	
	
	var img = document.getElementById("img");
	ctx.drawImage(img,100,200);
	
	
	
	
	

	
} 


function circle(xcen, ycen, rad){ 
	ctx.arc(xcen,ycen,rad,0,2*Math.PI,false); 
	ctx.stroke();
}

