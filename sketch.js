var paper,box;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	ground=createSprite(width/2,height-35,width,10);
	ground.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
	World.add(world,ground); 
	
	
	Engine.run(engine);
  
    box1 = new Box(600,645,200,20);

}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  
  drawSprites();
 
}



