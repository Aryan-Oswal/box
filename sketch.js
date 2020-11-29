const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var box1;
var box2;
var box3;
var ground;
function setup() {
  createCanvas(800,400);
  background ("blue");

  Myengine = Engine.create()
  Myworld = Myengine.world;
  box1 = new Box(130,100,50,30)  
  box2 = new Box(100,300,60,50) 
  box3 = new Box(110,50,30,50)  
  ground = new Ground(400,390,800,10)
}

function draw() {
  background("blue");  
  Engine.update(Myengine)
  box1.display()
  box2.display();
  box3.display()
  ground.display()

}
