const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24;
var hitter1, hitter2;
var slingdy;
var engine;
var world;
var ball;

function setup() {

  createCanvas(1300,700);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //hitter
  hitter1 = new stand(390, 300, 250, 10);
  hitter2 = new stand(700, 200, 200, 10);

  
  //first ground base objects 
  block1 = new box(330, 275, 30, 40);
  block2 = new box(360, 275, 30, 40);
  block3 = new box(390, 275, 30, 40);
  block4 = new box(420, 275, 30, 40);
  block5 = new box(450, 275, 30, 40);
  block19 = new box(300, 275, 30, 40);
  block20 = new box(480, 275, 30, 40);
  //first ground second level base objects
  block6 = new box(360, 235, 30, 40);
  block7 = new box(390, 235, 30, 40);
  block8 = new box(420, 235, 30, 40);
  block21 = new box(330, 235, 30, 40);
  block22 = new box(450, 235, 30, 40);
  //first ground third base and last block
  block9 = new box(390, 195, 30, 40);
  block23 = new box(360, 195, 30, 40);
  block24 = new box(420, 195, 30, 40);

  //second ground base objects
  block10 = new box(640, 175, 30, 40);
  block11 = new box(670, 175, 30, 40);
  block12 = new box(700, 175, 30, 40);
  block13 = new box(730, 175, 30, 40);
  block14 = new box(760, 175, 30, 40);
  //second ground second level base objects
  block15 = new box(670, 135, 30, 40);
  block16 = new box(700, 135, 30, 40);
  block17 = new box(730, 135, 30, 40);
  //second ground third base and final block
  block18 = new box(390, 155, 30, 40);

  //boll
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  //slingshot
  slingdy = new slingshot(this.ball, {x: 100, y:200});
  
  //both the grounds
  ground1 = new ground();
 
}

function draw() {
  background("black");

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

  ground1.display();

  hitter1.display();
  hitter2.display();

  slingdy.display();
  drawSprites();

}
function mouseDragged(){
	Matter.Body.setPosition(hitter.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingdy.fly();
}

function keyPressedXD(){
	if( keyCode === 32){
		Matter.Body.setPosition(hitter.body, {x: 235, y:420});
	  slingdy.attach(hitter.body);
	}
}

function detectcollision(ahitter, atarget){
	targetBodyPosition = atarget.body.position;
	hitterBodyPosition = ahitter.body.position;
	
	var distanshe = dist(hitterBodyPosition.x, hitterBodyPosition.y, targetBodyPosition.x, targetBodyPosition.y);
	if(distanshe<=atarget.radius+ahitter.radius){
		Matter.Body.setStatic(atarget.body, false);
	}
}
