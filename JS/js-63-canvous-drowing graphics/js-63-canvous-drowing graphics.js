var canvas = document.querySelector("#canvousID");
//using canvas method getContext can excess  2d,3d.
var ctx = canvas.getContext("2d");
//border line width
ctx.lineWidth = 3;
//border color
ctx.strokeStyle = "black";

//border
ctx.strokeRect(10, 10, 380, 280);
//color change
ctx.fillStyle = "green";
//for making rectangle shape use function
//x,y,width,height
ctx.fillRect(12, 12, 376, 276);
//finding center,width= canvas.width/2
//height=canvas.height/2
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
//for creating circle we have to use beingPath() function

//start form where
//x,y, radius ,starting angel ,ending angel, anti-clockwise ->false

ctx.beginPath();
ctx.arc(centerX, centerY, 60, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.stroke();
ctx.fill();
