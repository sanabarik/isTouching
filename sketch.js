var r1, r2;
var car, wall;



function setup() {
createCanvas(1200,800);
  r1 = createSprite(400, 200, 50, 50);
  r2 =  createSprite(600,500,50,50);
  car = createSprite(100,200,50,50);
  wall = createSprite(1000,300,10,500);

  r1.shapeColor = "green";
  r2.shapeColor = "green";
  car.shapeColor = "blue";
  wall.shapeColor = "blue";

  car.velocityX = 5;
}

function draw() {
  background(255,255,255);
  r2.x = World.mouseX;
  r2.y = World.mouseY;
  
  if (isTouching(car, wall)) {
    textSize = 50;
    fill("red")
    text("DANGER",400,200);
  }
  drawSprites();
}

function isTouching(object1, object2) {
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
     object2.x - object1.x < object2.width/2 + object1.width/2 && 
     object2.y - object1.y < object2.height/2 + object1.height/2 &&
      object1.y - object2.y < object1.height/2 + object2.height/2) {
 
        return true;
  }

  else{
   return false;
  }
}