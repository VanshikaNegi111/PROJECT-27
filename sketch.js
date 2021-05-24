
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var roofObject;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, bobObject6, bobObject7
var rope1, rope2, rope3, rope4, rope5, rope6, rope7;
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(600,170,300,20);
	bob1 = new bob(320,455,40);
	bob2 = new bob(360,455,40);
	bob3 = new bob(400,455,40);
	bob4 = new bob(440,455,40);
	bob5 = new bob(480,455,40);
	bob6 = new bob(520,455,40);
	bob7 = new bob(560,455,40);

	
	rope1 = new rope(bob1.body,roofObject.body,-120, 0);
	rope2 = new rope(bob2.body,roofObject.body,-80, 0);
	rope3 = new rope(bob3.body,roofObject.body,-40, 0);
	rope4 = new rope(bob4.body,roofObject.body,0, 0);
	rope5 = new rope(bob5.body,roofObject.body,40, 0);
	rope6 = new rope(bob6.body,roofObject.body,80, 0);
	rope7 = new rope(bob7.body,roofObject.body,120, 0);

	
	
	Engine.run(engine);
	
  
}


function draw() {
 Engine.update(engine);
  rectMode(CENTER);
  background(230);

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  
 
}


function keyPressed()
{
 if (keyCode === 32)
 {
	 Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-40, y:-85});
 }

}







