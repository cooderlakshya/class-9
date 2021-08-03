var ball
function setup() { 
  createCanvas(400, 400);
   ball=createSprite(200,200,20,20)
}
function draw() {
  background("red");
  if(keyDown(RIGHT_ARROW)){
    ball.x=ball.x+2
  }
  if(keyDown(LEFT_ARROW)){
  ball.x=ball.x-2
  }
  drawSprites();
}