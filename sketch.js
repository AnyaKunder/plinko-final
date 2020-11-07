const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground; 

var particles=[];
var plinkos=[];
var divisions=[];
var divisionheight=300;

function setup() {
  engine = Engine.create();
    world = engine.world;
    ground=new Ground(width/2,height,width,20)
    for(var a=0;a<=width;a=a+80){
      divisions.push(new Division(a,height-divisionheight/2,10,divisionheight))
    }
    for(var j=75;j<=width;j=j+50){
      plinkos.push(new Plinko(j,75))
    }
    for(var j=50;j<=width;j=j+50){
      plinkos.push(new Plinko(j,175))
    }
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
Engine.update(engine)
if(frameCount%50===0){
particles.push(new Particle(random(width/2-30, width/2+30),10))

}
for(var i =0;i<particles.length;i++){
  particles[i].display()
  
}
for(var i =0;i<particles.length;i++){
  divisions[i].display()
} 
for(var i =0;i<particles.length;i++){
  plinkos[i].display()
} 
}