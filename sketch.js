var helicopterIMG, helicopterSprite,packageSprite,packageIMG;
var packageBody,ground;
var contain1,contain2,contain3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("box.png")

	
}

function setup() {
	createCanvas(800, 650);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.visible = false;
	packageSprite.scale=0.1;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

 
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	packageBody.visible = false;
	World.add(world, packageBody);

	
	contain1 = new Container(380,500,165,13);
	contain2 = new Container(292,476,11,60);
	contain3 = new Container(467,476,11,60);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  contain1.display();
  contain2.display();
  contain3.display();

  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	packageBody.visible = true;
	packageSprite.visible = true;
     
  }
}

