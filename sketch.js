var garden,rabbit;
var gardenImg,rabbitImg;
var redl
var orange
var apple


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

rabbit.x = World.mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_Sprite = Math.round(random(1,3))

if (frameCount % 80 == 0) {
  if (select_Sprite == 1) {
   createapple()
} else if (select_Sprite == 2) {
  createorange()
} else {
  createred()
     }
  }
}

function createred(){
redl = createSprite(random(50, 350),40, 10, 10)
redl.addImage(redImg)
redl.scale=0.06
  redl.velocityY = 3
  redl.lifetime = 150

}

function createapple(){
apple = createSprite(random(50, 350),40, 10, 10)
apple.addImage(appleImg)
apple.scale=0.06
  apple.velocityY = 3
  apple.lifetime = 150

}

function createorange(){
orange = createSprite(random(50, 350),40, 10, 10)
orange.addImage(orangeImg)
orange.scale=0.06
  orange.velocityY = 3
  orange.lifetime = 150

}



