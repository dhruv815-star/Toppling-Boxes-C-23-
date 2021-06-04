const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box1, box2;


function setup() 
{
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(200,400,400,20);
  
  
  console.log(ground);

  box1 = new Box(100,100,50,50);
  box2 = new Box(120,20,50,100);

}

function draw() 
{
  background("skyblue");
  
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();
}