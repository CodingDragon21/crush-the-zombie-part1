const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var base1;
var base2;
var bridge;
var link;
var stone;
var Stones = []

function setup() {
  createCanvas(1000, 700);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  
  ground = new Base(500,680,1000,20)
  base1 = new Base(100,320,200,90)
  base2 = new Base(900,320,200,90)
  bridge = new Bridge(20,{x:180,y:320})
  Composite.add(bridge.body,base2.body)
  link = new Link(bridge,base2.body)

  for(var i = 0; i<8;i++){
    var x = random(width/2-200,width/2+300)
    var y = random(-10,100);
    var stone = new Stone(x,y,30);
    Stones.push(stone)
  }

}

function draw() {
  background("skyblue");
  ground.show()
  Engine.update(engine);
  console.log(Stones)

  ground.show()
  base1.show()
  base2.show()
  bridge.show()
  for(var j = 0; j<Stones.length ; j++){
    Stones[j].show()
  }
  push()
  fill("purple")
  textFont("jokerman")
  textSize(30)
  text("Crush The Zombie Part 1",360,100)

}
