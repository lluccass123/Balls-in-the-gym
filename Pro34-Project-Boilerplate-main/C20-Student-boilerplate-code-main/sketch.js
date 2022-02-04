
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball, ball2, ball3, ball4, ball5, ball6;
var ground;
var ball3;
var wall;
var leftWall;
var rightWall;
var topWall;
var bottomWall;
var button1;
var button2;
var button3;
var backgroundimage, background;

function preload(){
  backgroundimage = loadImage("court.png");
}
function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;


  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  var ball2_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  var ball3_options = {
    restitution: 0.75,
    frictionAir:0.01
  }

  topWall = new Ground(500,10,1000,20);
  leftWall = new Ground(10,200,20,400);
  rightWall = new Ground(1000,200,20,400);
  bottomWall = new Ground(500,390,1000,20);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(100,10,20,ball2_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(300,10,10,ball3_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(300,10,20,ball2_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(300,10,29,ball_options);
  World.add(world,ball5);

  ball6 = Bodies.circle(300,10,39,ball3_options);
  World.add(world,ball6);

  button1 = createImg('rightarrow.png');
  button1.position(220,30);
  button1.size(65,50);
  button1.mouseClicked(hforce);
  button2 = createImg('uparrow.png');
  button2.position(150,30);
  button2.size(60,55);
  button2.mouseClicked(vforce);
  button3 = createImg('leftarrow.png');
  button3.position(60,30);
  button3.size(50,50);
  button3.mouseClicked(hforce2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw(){
  background(51);
  image(backgroundimage,500,200,1000,400);
  imageMode(CENTER);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,25);
  ellipse(ball4.position.x,ball4.position.y,25);
  ellipse(ball5.position.x,ball5.position.y,29);
  ellipse(ball6.position.x,ball6.position.y,39);
  topWall.show();
  leftWall.show();
  rightWall.show();
  bottomWall.show();
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0});
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.025});
}
function hforce2(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.005,y:0});
}