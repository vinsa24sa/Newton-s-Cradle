const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(390, 100, 400, 30);

	bob1 = new Bob(250, 400, 70);
	bob2 = new Bob(320, 400, 70);
	bob3 = new Bob(390, 400, 70);
	bob4 = new Bob(460, 400, 70);
	bob5 = new Bob(530, 400, 70);

	rope1 = new rope(bob1.body, {x:250, y:100});
	rope2 = new rope(bob2.body, {x:320, y:100});
	rope3 = new rope(bob3.body, {x:390, y:100});
	rope4 = new rope(bob4.body, {x:460, y:100});
	rope5 = new rope(bob5.body, {x:530, y:100});
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-45})
	}
}

