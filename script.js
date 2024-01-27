let c = document.getElementById("canvas");
let ctx = c.getContext('2d');


c.height = window.innerHeight;
c.width = window.innerWidth;

ctx.lineWidth = 4;

function ranColor(){
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);

  return `rgb(${r},${g},${b})`;
}


function makeCircle(){
  let j = Math.floor(Math.random()*5);
  let i = j;
  setInterval(()=>{
    if(i>=0){
      ranClr = ranColor();
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = ranClr;
      ctx.strokeStyle = ranClr;
      let ranRadius = Math.floor(Math.random()*400);
      ctx.clearRect(0,0,c.width,c.height);
      ctx.beginPath();
      ctx.arc(c.width/2,c.height/2,ranRadius,i,Math.PI*i);
      ctx.stroke();
      console.log(i);
    }
    i-=0.1;
  },1);

}

function draw(){
  makeCircle();
  setTimeout(()=>{
    draw()
  },100)
}

draw()
// makeCircle();