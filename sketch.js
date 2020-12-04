var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200,100,20,20);
  car.shapeColor = "green";
  car.velocityX = 3;
  wall = createSprite(1000,100,50,70);
  wall.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
//movingRect.y = World.mouseY;


  bounceoff(car,wall);

  
  /*if(isTouching(car,wall)){
    car.shapeColor = "red";
    wall.shapeColor = "red";

  }
  else{
    car.shapeColor = "green";
    wall.shapeColor = "green";  
  }*/
  drawSprites();
}

