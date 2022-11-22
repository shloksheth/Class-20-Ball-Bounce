const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var ball;
var engine;
var world;
var ground;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution:1,
    frictionAir:0.01
  }

  var ground_options = {
    isStatic:true
  }

  ball = Bodies.circle(50,50,50,ball_options);
  World.add(world,ball);
  ellipseMode(RADIUS);

  ground = Bodies.rectangle(400,400,400,20,ground_options);
  World.add(world,ground);
  rectMode(CENTER);
}
function draw(){
  background("#4d4e4f");
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,27);
  rect(ground.position.x,ground.position.y,900,300);
}
