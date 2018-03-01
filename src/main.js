let clickers = 5;
let startTime = Date.now();

//Position element in DOM
function sync(dom, pos) {
	dom.style.left = `${pos.x}px`;
	dom.style.top = `${pos.y}px`;
	console.log(dom.style.left);
	console.log(dom.style.top);
}

function addClicker() {
  const pos = {
  	x: Math.random() * 500,
  	y: Math.random() * 300
  };
  console.log(pos);
  const img = new Image();
  img.src = "res/images/p1_duck.png";
  img.style.position = "absolute";
  img.addEventListener("click", removeClicker, false);
  sync(img, pos);
  document.querySelector("#board").appendChild(img);

};


function removeClicker (e) {
  e.target.parentNode.removeChild(e.target);  
  clickers--;  
  checkGameOver();
}

function checkGameOver() {
	document.querySelector("#remain").innerHTML = clickers;
	if (clickers === 0){
		const taken = Math.round((Date.now() - startTime)/1000);
		alert(`De-ducked in ${taken} seconds!`);
	}
}
//for (var i = clickers - 1; i >= 0; i--) {
  //addClicker();
//}

const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const {width: w, height: h} = canvas;

/*
ctx.fillStyle = "black";
ctx.fillRect(0, 0, w, h);
ctx.fillStyle = "#555";



let x, y, radius;

for (let i = 0; i < 550; i++) {
  x = Math.random() * w;
  y = Math.random() * h;
  radius = Math.random() * 3;

ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2, false);
ctx.fill();
}
*/

const img = new Image();
img.src = "res/images/p1_duck.png";
img.addEventListener("load", draw, false);

function draw() {
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * w - 50;
    const y = Math.random() * h - 100;
    ctx.drawImage(img, x, y);
  }
}

