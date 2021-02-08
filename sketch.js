
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper, paper_img;
var dustbin1,dustbin2, dustbin3, dustbin_img;


function preload(){
  //dustbin_img=loadImage("images/dustbingreen.png");
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;
  
  paper = new Paper(200, 200, 20);
  
  
  ground = new Ground(width/2, 470, width, 20);

  dustbin1 = new Dustbin(635, 415, 20, 85);
  
  dustbin2 = new Dustbin(765, 415, 20, 85);
  dustbin3 = new Dustbin(700, 450, 150, 20);

	Engine.run(engine);
}

function draw() {
  background( "pink");

  Engine.update(engine);
  
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3 .display();
  ground.display();

  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x : 70, y : -50});
  }
}