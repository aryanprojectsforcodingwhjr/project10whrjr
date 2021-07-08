
function preload(){
  ship1 = loadImage("ship-1.png");
  ship2 = loadImage("ship-2.png");
  ship3 = loadImage("ship-3.png");
  ship4 = loadImage("ship-4.png");
  seaimg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(50,160,20,50);
  sea.addImage("seaimg");
  sea.scale = 0.5;
  
  ship = createSprite(200,180,400,20);
  ship.addImage("ship1");
  ship.x = ground.width /2;
  ship.velocityX = -4;
  
}

function draw() {
  background("blue");
 
}