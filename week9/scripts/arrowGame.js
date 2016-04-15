//
var r = Raphael("paper", 640, 480);
//I declare these as global so all methods can use and edit them.
var stopped = 0;
var randomY = 0;
var clickX = 0;
var clickY = 0;
var originX = 320;
var originY = 240;
var distance = 0;
//I want circles() to make a lightgreen circle. circles2() makes an orange circle.
//at the end of draw(event), if coordinates 'intersect' the fillColor becomes "red";
var fillColor = "lightgreen";

//this is my middle circle. Essentially I want originX and originY to be the new origin for this grid system.
//so that's why in draw(event) i create variables newX and newY
var a = r.circle(originX,originY,20).attr({stroke: "black", fill: "red", "fill-opacity": .4});
document.getElementById("paper").style.transformOrigin = "320 240";
var source = r.circle(originX,originY,7).attr({fill: "blue"});

//this creates a green circle at a random Y that moves across the canvas right to left. 
//at the end of animation it calls circles2() which creates an orange circle.
function circles(){
		randomY = Math.floor(Math.random()*460)+20;
		var x = r.circle(680,randomY,30).attr({fill: fillColor,"fill-opacity": .4});
		
		//if stop on the html has been clicked...global variable stopped is now 1. thus stopping this and circles2() animations
		if(stopped===0){
		x.animate({transform:"t-700 0"},(Math.floor(Math.random()*2000)+500),circles2);
		}
		fillColor = "orange";	
}
function circles2(){
	randomY = Math.floor(Math.random()*460)+20;
	var y = r.circle(680,randomY,30).attr({fill: fillColor,"fill-opacity": .4});
	if(stopped===0){
	y.animate({transform:"t-700 0"},(Math.floor(Math.random()*2000)+500),circles);
	}
	fillColor = "lightgreen";
}
//this is called when one clicks my raphael canvas.
//shoots the blue circle to the newX and (-1)*newY because the Y axis is inverted. I am trying to make my own
//grid system with my red dot as the origin.
function draw(event){
	//canvas addevent listener. canvas.getBoundingClientRect();
	//clienty-rect.top clientx-rect.left;
	//Meteor setInterval 
	//Meteor collection with null connection. On key events, update the collection and set the interval to however many times a second
	//use meteor.call and it will access the method where you store the stuff to the collection and get that. 
		clickX = event.clientX;
		clickY = event.clientY;
		var newX = (clickX-originX);
		var newY = (clickY-originY)-((clickY-originY)*2);
		
		//I use distance method to make sure I can get all dots moving at the same velocity.
		distance = pointDistance(originX,originY,clickX,clickY);
		
		var a = r.circle(originX,originY,7).attr({fill: "blue"});
		a.animate({transform: "t "+newX+" "+(-1)*newY},(distance/1.8),function(){//1.8 is my 'speed'; The higher the number, the fast the dots move. 
			this.animate({opacity: .0},200);
		});
		
		//display the stats and numbers.
		$(""+distance.toFixed(2)).insertAfter('.arrowgame');
		$('.arrowgame').empty();
		$('.arrowgame').append("Distance: "+distance.toFixed(2)+" Origin x,y: "+originX+","+originY+" new point: "+newX+","+newY+" click point: "+clickX+","+clickY);
		if(clickY===randomY){
			fillColor = "red";
		}
		
}
//changes global stopped variable because i couldn't figure out how to stop the animation from another method
//i.e. circles.stop() or circles.x.stop() ?? etc.
function stop(){
	stopped = 1;
}

//starts cycle of making circles and animating.
function resume(){
	stopped = 0;
	circles();
}

//used to help determine speed.
function pointDistance(x1,y1,x2,y2){
	var dist = Math.sqrt( Math.abs((x2 - x1)*(x2-x1)) + Math.abs((y2 - y1)*(y2-y1)));
	return dist;
}
