const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


ctx.fillStyle = 'red';
ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(55, 55, 40, 40);
ctx.fill();



ctx.fillStyle = 'green';
ctx.fillRect(25, 150, 100, 100);
ctx.fill();

ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.moveTo(125, 300);
ctx.lineTo(25, 275);
ctx.lineTo(25, 325);
ctx.fill();


ctx.beginPath();
ctx.arc(75, 400, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(110, 400);
ctx.arc(75, 400, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.moveTo(65, 390);
ctx.arc(60, 390, 5, 0, Math.PI*2, true); // Mouth (clockwise)
ctx.moveTo(95, 390);
ctx.arc(90, 390, 5, 0, Math.PI*2, true); // Mouth (clockwise)
ctx.stroke();




