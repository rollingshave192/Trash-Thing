
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,paper1
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	
	//Create the Bodies Here.
	world = engine.world;
	ground = new Ground(600,height,1200,20);
	paper1 = new Paper(50,50,20);
	dustbin = new Dustbin(1095,height-35,100,20);
	Engine.run(engine);
     
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("red");
  ground.display();
  paper1.display();
  drawSprites();
  dustbin.display();
  
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

}
}


