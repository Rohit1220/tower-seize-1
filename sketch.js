const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function setup() {
  createCanvas(1600,800);
  engine=Engine.create(); 
  world=engine.world;
  Ground1 = new Ground(800,305,550,10);
  block1 = new block (800,300,50,50);
  block2 = new block (800,250,50,50);
  block3 = new block (800,200,50,50);
  block4 = new block (800,150,50,50);
  block5 = new block (800,100,50,50);
  block6 = new block (850,300,50,50);
  block7 = new block (850,250,50,50);
  block8 = new block (850,200,50,50);
  block9 = new block (850,150,50,50);
  block10 = new block (750,300,50,50);
  block11 = new block (750,250,50,50);
  block12 = new block (750,200,50,50);
  block13 = new block (750,150,50,50);
  block14 = new block (700,300,50,50);
  block15 = new block (700,250,50,50);
  block16 = new block (700,200,50,50);
  block17 = new block (900,300,50,50);
  block18 = new block (900,250,50,50);
  block19 = new block (900,200,50,50);
  block20 = new block (950,300,50,50);
  block21 = new block (950,250,50,50);
  block22 = new block (650,300,50,50);
  block23 = new block (650,250,50,50);
  block24 = new block (600,300,50,50);
  block25 = new block (1000,300,50,50);
  stone1 = new stone (250,50,50);
  sling1 = new SlingShot(stone1.body,{x:250,y:250});
}
function draw() {
  background(255,255,255); 
  Engine.update(engine); 
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
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  stone1.display();
  sling1.display();
  drawSprites();
}
function mouseDragged(){
      Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling1.fly();
}