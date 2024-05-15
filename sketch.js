function setup() {
  createCanvas(600, 400);
  background("black");
}

function draw() {
stroke("white");
  fill("pink");
  

if(mouseIsPressed){
  rect(mouseX, mouseY, 50, 40);
}
}