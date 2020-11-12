var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 100, 50);
  fixedRect.shapeColor = "orange";

  movingRect = createSprite(600,200,100,200);
  movingRect.shapeColor = "orange";
}

function draw() {
  background(0); 
  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2
     && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 
     && movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2
     && fixedRect.y-movingRect.y< fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } 
  else{
    fixedRect.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }
  drawSprites();
}