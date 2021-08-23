const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;

var challenge1;
var challenge2;
var challenge3;
var forms;
var img;
var gameState = 0;
var clock1, clock2, clock3, clock4, clock5, clock6, clock7, clock8;
var clock = 8;
var score = 0;

function preload() {}

function setup() {
  createCanvas(1350, 640);

  engine = Engine.create();
  world = engine.world;

  form = new Form();
  security = new Security();
  challenge1 = new Challenge1();
  challenge2 = new Challenge2();
  challenge3 = new Challenge3();
}
function draw() {
  background("white");

  Engine.update(engine);

  console.log(gameState);

  if (gameState === 0) {
    form.display();
    challenge1.hide();
    security.hide();
  } else if (gameState === 1) {
    form.hide();
    challenge1.display();
    challenge1.show();
  } else if (gameState === 2) {
    challenge1.hide();
    security.show();
    challenge2.display();
  } else if (gameState === 3) {
    form.hide();
    challenge1.hide();
    security.hide();
    challenge3.display();
  }
}
