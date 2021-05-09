const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
 var bob1,bob2,bob3,bob4,bob5
 var rope1,rope2,rope3,rope4,rope5
 var block;
function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);

//ball
  bob1 = new Bob(2,200,80,80)
  bob2 = new Bob(300,200,80,80)
  bob3 = new Bob(400,200,80,80)
  bob4 = new Bob(500,200,80,80)
  bob5 = new Bob(600,200,80,80)


  //rope
  rope1 = new Rope(bob1.body,{x:200,y:50} )
  rope2 = new Rope(bob2.body,{x:300,y:50} )
  rope3 = new Rope(bob3.body,{x:400,y:50} )
  rope4 = new Rope(bob4.body,{x:500,y:50} )
  rope5 = new Rope(bob5.body,{x:600,y:50} )

  block = createSprite(200,200,120,50);
}
function draw() {
 
drawSprites();
  background(180);
  Engine.update(engine);  


 ground.display();
  //ball
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //rope
  rope1.display();
  rope2.display(); 
  rope3.display();  
  rope4.display();  
  rope5.display(); 
}

function mouseDragged()
{
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}