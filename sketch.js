var particles = [];
var plinkos = [];
var divisions = [];
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var score = 0;
var turn = 0;
var gamestate = "play";
var particle;

var engine, world;
var divisionHeight = 300;



function setup(){
    var canvas = createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(width/2,height,width,20);
    for (var k = 0; k <= width; k = k + 80){
      divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight))
    }
    for (var j = 75; j <= width; j = j + 50){
      plinkos.push(new Plinko(j,75))
    }
    for (var j = 50; j <= width - 10; j = j + 50){
      plinkos.push(new Plinko(j,175))
    }
    for (var j = 75; j <= width; j = j + 50){
      plinkos.push(new Plinko(j,275))
    }
    for (var j = 50; j <= width - 10; j = j + 50){
      plinkos.push(new Plinko(j,375))
    }
    if(particle = null){
      particles.display();

      if(particles.body.position.y>760){

        if (particle.body.position.x < 300){
          score=score+500;
          particle = null;
        if (count >= 5){
          gamestate = "end";
        }
      }
      }
    }
}

function draw(){
    background("black");
    text ("score" +  score,10,10);
    Engine.update(engine);
    ground.display();
    for (var j = 0; j < plinkos.length; j++){
      plinkos[j].display();
    } 
    if(frameCount%20===0){
      particles.push(new Particles(random(width/2-10, width/2+10),10,10))
    }
    for (var j = 0; j < particles.length; j++){
      particles[j].display();
    } 
    for (var k = 0; k < divisions.length; k++){
      divisions[k].display();
    }
    if (gamestate = "end"){
      text("gameOver", 300,400)
    }
}
function mousePressed(){
  if(gamestate == "end"){
    count++;
    particle = new Particles(mouseX, 10, 10)
  }
}