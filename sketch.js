const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;
var polygon_img;
var score = 0;
var bg;
function preload(){
   polygon_img = loadImage("Sprites/polygon.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  polygon = Bodies.circle(50, 200, 20),
  World.add(world,polygon);
  text("score: "+ 0, 750, 40);
  slingShot = new Slingshot(this.polygon,{x:100, y:200});
  ground = new Ground(600,height,1200,20);
  stand1 = new Stand(400, 265, 300, 20);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);
}

function draw() {
  background("black");
  ground.display();  
  stand1.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
  slingShot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
  slingShot.attach(polygon);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "white";
  }
  else{
      bg = "black";
  }

  backgroundImg = bg;
  console.log(backgroundImg);