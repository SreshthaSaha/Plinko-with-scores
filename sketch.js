const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var d1,d2,d3,d4;
var particle;
var plinko;
var count = 0;
var score = 0 ;
var particle;
var plinkos = [];
var gameState = "play";

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,30);

  d1 = new Divisions(20,565,20,400);
  d2 = new Divisions(180,565,20,400);
  d3 = new Divisions(330,565,20,400);
  d4 = new Divisions(470,565,20,400);

    // plinko = new Plinko(30,30,15);

  for (var i = 40  ; i < 500 ; i = i + 80){
    plinkos.push(new Plinko(i,60,15));
  }
  for (var i = 20  ; i < 500 ; i = i + 50){
    plinkos.push(new Plinko(i,155,15));
  }
  for (var i = 20  ; i < 500 ; i = i + 50){
    plinkos.push(new Plinko(i,255,15));
  }

  Engine.run(engine);  
 
}

function mousePressed(){
  if(gameState === "play" ){
     count++;
     particle = new Particles(random(30,400),10,10,10);
     console.log(count);
     }
  }

function draw() {
 
background(0);  
  fill("white");
 textSize(50);
 text("100",215,400);
 text("500",60,400);
 text("200",370,400);
 
 fill("white");
 textSize(30);
 text("Score = " + score ,30,30); 

   ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  
  // plinko.display();
  if (particle != null) {
    particle.display();
    //console.log(particle.body.position.y);
    if(particle.body.position.y >= 755 ){
    if(particle.body.position.x < 180 && particle.body.position.x > 20){
      score = score + 500;
      particle = null;
     }else if(particle.body.position.x > 190 && particle.body.position.x < 330){
       score = score + 100;
       particle = null;
     }else if(particle.body.position.x > 200 && particle.body.position.x < 470){
       score = score + 200;
       particle = null;
     }
    }
  }
  for (var i = 0  ; i < plinkos.length ;i++ ){ 
    plinkos[i].display();
  }
  
  if(count === 5){
    gameState = "end";
    textSize(50);
    text("Game Over!",120,220);    
  }

  
   
//   if(frameCount%30===0){
//     particles.push( new Particle(random(width/2 + 300,width/2-200),10,10));
//  } 
//   for (var j = 0; j < particles.length; j++){
//     particles[j].display();
//   } 

//  for (var k = 0; k < divisions.length; k++){
//   divisions[k].display;
// }
// if(frameCount%50===0){
//   divisions.push(new Divisions(random(width/2 + 300,width/2-200),20,10));
// } 

//drawSprites();
}


