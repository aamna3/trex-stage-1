var ground, ground_image;
var invisible_ground;
var trex ,trex_running;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");  
ground_image = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,150,20,30);
 trex.addAnimation("trex running",trex_running);
 trex.scale = 0.5

 ground = createSprite(300,180,600,10);
 ground.addImage("ground image", ground_image);
ground.velocityX = -5

invisible_ground = createSprite(300,190,600,5);
invisible_ground.visible = false;

}

function draw(){
  background("cyan")
 
  if (ground.x < 0 ){
    ground.x = 300
  }
 
  if (keyDown ("space") && trex.y > 120){
    trex.velocityY = -10;
  } 

trex.velocityY = trex.velocityY + 0.5
trex.collide (invisible_ground);
console.log (trex.y)

  drawSprites();


}
