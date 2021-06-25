const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle=[]
var division=[]
var plinko=[]


function setup() {
  createCanvas(480,800);
  engine=Engine.create()
  world=engine.world;
  Engine.run(engine)
  
  Ground1=new Ground(240,785,480,30)
  Ground2=new Ground(10,400,20,800)
  Ground3=new Ground(470,400,20,800)

  for (var a=50;a<480;a=a+65){
    division.push(new Division(a,675))
  }

  for(var b=30;b<470;b=b+45){
    plinko.push(new Plinko(b,60)) 
    }
  
    for (var d=60;d<470;d=d+45){
      plinko.push(new Plinko(d,120))
    }

    for(var e=30;e<470;e=e+45){
      plinko.push(new Plinko(e,180)) 
      }

      for (var f=60;f<470;f=f+45){
        plinko.push(new Plinko(f,240))
      }

      for (var g=60;g<470;g=g+45){
        plinko.push(new Plinko(g,360))
      }

      for(var h=30;h<470;h=h+45){
        plinko.push(new Plinko(h,300)) 
        }
  
    
}

function draw() {
  background("black");  
  Engine.update(engine)

  if (frameCount%30===0){
    particle.push(new Particle())
  }

  for (var i=0;i<particle.length;i++){
    particle[i].display()
  }


   for (var c=0;c<plinko.length;c++){
     plinko[c].display()
   }
  
  
  for (var k=0;k<division.length;k++){
    division[k].display()
  }

  drawSprites();


 
  Ground1.display()
  Ground2.display()
  Ground3.display()
}