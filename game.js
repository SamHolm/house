const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

context.clearRect(0, 0, canvas.width, canvas.height);

context.fillStyle = "black";
context.fillRect(0, 0, 200, 400);
//context.clearRect(20, 20, canvas.width-40, 400-40);
showColor(0,0, "lime");