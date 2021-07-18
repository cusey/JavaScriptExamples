const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Red retangle inside smaller clear retangle inside smaller retangle with boundary 
ctx.fillStyle = 'red';
ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(55, 55, 40, 40);
ctx.fill();



//Green retangle
ctx.fillStyle = 'green';
ctx.fillRect(25, 150, 100, 100);
ctx.fill();

//Purple triangle
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.moveTo(125, 300);
ctx.lineTo(25, 275);
ctx.lineTo(25, 325);
ctx.fill();


//Smile face

// r = Radius, Start Angle = sa, End Angle = ea, Counterwise = c 
let outer =       { x: 75,    y: 400,  r: 50,  sa: 0,   ea: Math.PI *2,    c:true };
let mouth =       { x: 75,    y: 400,  r: 35,  sa: 0,   ea: Math.PI,       c:false };
let left_eye =    { x: 60,    y: 390,  r: 5,   sa: 0,   ea: Math.PI *2,    c:true };
let right_eye =   { x: 90,    y: 390,  r: 5,   sa: 0,   ea: Math.PI *2,    c:true  };

ctx.beginPath();
ctx.arc(outer.x, outer.y, outer.r, outer.sa, outer.ea, outer.c); // Outer circle
ctx.moveTo(110, 400);
ctx.arc(mouth.x, mouth.y, mouth.r, mouth.sa, mouth.ea, mouth.c); // Mouth (clockwise)
ctx.moveTo(65, 390);
ctx.arc(left_eye.x, left_eye.y, left_eye.r, left_eye.sa, left_eye.ea, left_eye.c);  // Left eye
ctx.moveTo(95, 390);
ctx.arc(right_eye.x, right_eye.y, right_eye.r, right_eye.sa, right_eye.ea, right_eye.c); // Right eye
ctx.stroke();

// Red Filled triangle
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(25, 500);
ctx.lineTo(100, 500);
ctx.lineTo(25, 575);
ctx.fill();

// Stroked triangle
ctx.beginPath();
ctx.moveTo(50, 575);
ctx.lineTo(125, 575);
ctx.lineTo(125, 500);
ctx.closePath();
ctx.stroke();

// Cubic Bézier curve (cbc)
let cbc_start = { x: 150,   y: 25  };
let cbc_cp1 =   { x: 230,   y: 30  };
let cbc_cp2 =   { x: 150,   y: 80  };
let cbc_end =   { x: 250,   y: 125 };

ctx.beginPath();
ctx.moveTo(cbc_start.x, cbc_start.y);
ctx.bezierCurveTo(cbc_cp1.x, cbc_cp1.y, cbc_cp2.x, cbc_cp2.y, cbc_end.x, cbc_end.y);
ctx.stroke();






