const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


ctx.fillStyle = 'red';
ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(55, 55, 40, 40);



ctx.fillStyle = 'green';
ctx.fillRect(25, 150, 100, 100);

ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.moveTo(125, 300);
ctx.lineTo(25, 275);
ctx.lineTo(25, 325);
ctx.fill();

