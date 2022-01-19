var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg, zombieGroup;
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;
var life = 3;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/background.jpg")
  zombieImg = loadImage("assets/zombie.png")
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 0.6
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


//creating the zombies group
zombieGroup = new Group();


heart1 = createSprite(displayWidth-150,40,20,20)
heart1.visible=false;
heart1.addImage("heart1",heart1Img);
heart1.scale = 0.4;

heart2 = createSprite(displayWidth-100,40,20,20)
heart2.visible=false;
heart2.addImage("heart2",heart1Img);
heart2.scale = 0.4;

heart3 = createSprite(displayWidth-150,40,20,20)
heart3.addImage("heart3",heart1Img);
heart3.scale = 0.4;

}

function draw() {
  background(0); 

if(life === 3){
  heart3.visible = true
  heart2.visible = false
  heart1.visible = false
}
if(life === 2){
  heart3.visible = false
  heart2.visible = true
  heart1.visible = false
}
if(life === 1){
  heart3.visible = false
  heart2.visible = false
  heart1.visible = true
}


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
enemy();
drawSprites();

}

function enemy(){
  if(frameCount%50===0){
    zombie=createSprite(random(1100,1100),random(400,900),40,40);
    zombie.addImage(zombieImg);
    zombie.scale=0.20;
    zombie.velocityX=-3;
    zombie.debug=true;
    zombie.setCollider("rectangle",0,0,400,400);
    zombie.lifetime=400;
    zombieGroup.add(zombie);
  }
}
