
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball1,ground;
var dustbin1,dustbin2;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(600,830,1200,20);

ball1 = new ball(100,100);

dustbin1 =new dustbin(810,250,300,PI/2);

	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ball1.display();
  ground.display();
  dustbin1.display();
  drawSprites();
 
}



