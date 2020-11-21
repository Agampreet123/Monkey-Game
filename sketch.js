var survivalTime = 0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,50);
  monkey.scale = 0.1
  monkey.addAnimation("running",monkey_running);
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2

bananaGroup = createGroup();
obstacleGroup = createGroup();  
 
  
}


function draw() {
  background(255);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50)
  if(keyDown("space")&&monkey.y>=159){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  if(ground.x < 0){
    ground.x = ground.width/2
  }
  food();
  obstacles();
drawSprites();
  
}
function food(){
  if(frameCount % 80 === 0){
      banana = createSprite(350,120,40,10);
     banana.y = Math.round(random(120,200));
     banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.scale = 0.1;
    banana.lifetime = 100;
    
    bananaGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(400,325,20,20);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 100;
    
    obstacleGroup.add(obstacle);
  }
}






