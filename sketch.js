const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function setup() {
  createCanvas(800,400);
  groundObject = new Ground(width/2,100,100,10);
  block1 = new block(300,195,50,50);
  block2 = new block(300,195,50,50);
  block3 = new block(300,195,50,50);
  block4 = new block(300,195,50,50);
  block5 = new block(300,195,50,50);
  block6 = new block(300,195,50,50);
  block7 = new block(300,195,50,50);
  block8 = new block(300,195,50,50);
  block9 = new block(300,195,50,50);
  block10 = new block(300,195,50,50);
  block11 = new block(300,195,50,50);
  block12 = new block(300,195,50,50);
  block13 = new block(300,195,50,50);
  block14 = new block(300,195,50,50);
  block15 = new block(300,195,50,50);
  block16 = new block(300,195,50,50);
}
function draw() {
  background(255,255,255);  
  Ground1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display()
  drawSprites();
}