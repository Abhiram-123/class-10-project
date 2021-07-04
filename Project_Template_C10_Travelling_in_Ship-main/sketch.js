var sea
var ship

function preload(){
 seaImg=loadImage("sea.png");
 shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,0,0);
  sea.addImage(seaImg);
  
  ship=createSprite(50,250,10,10);
  ship.addAnimation("ship4",shipImg);
  ship.scale=0.1;

}

function draw() {
 drawSprites()
  
}