var ground,boy,boyimg;
function preload(){

  boyimg = loadImage("bo1.png");
  cloudImage = loadImage("cloud.png");
     

}

function setup(){ 
    createCanvas(windowWidth,windowHeight);
    boy = createSprite(50,height-120,10,10);
    boy.addImage(boyimg);
    //creating a scroolling effect
    ground = createSprite(width/2,height-100,windowWidth,20);
    ground.x = ground.width /2;
    ground.velocityX = -3; 

}

function draw(){
    background("darkblue");
    drawSprites();


    if (ground.x < 0){
        ground.x = ground.width/2;
      }

       //jump when the space key is pressed
    if(keyDown("space")&& boy.y >= 100) {
        boy.velocityY = -12;
        
    }
    
    //add gravity
    boy.velocityY = boy.velocityY + 0.8


     //stop trex from falling down
    boy.collide(ground);




}


function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var pile = createSprite(600,120,40,10);
      pile.addImage(cloudImage);
      cloud.scale = 0.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 200;
      
      //adjust the depth
      cloud.depth = trex.depth;
      trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
  }

