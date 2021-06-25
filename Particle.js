class Particle{
    constructor(){

        this.gameState="notReached"
 
        var s1=0;var s2=0;var s3=0;var s4=0;
        var options={
            restitution:1,
            friction:0.3,
            density:1,
            isStatic:false
        }

        this.body=Bodies.circle(random(30,450),0,10,options)
        World.add(world,this.body)

        this.color=color(random(0,255),random(0,255),random(0,255))
      
        
    }
    
    display(){
        push()
        fill(this.color)
        translate(this.body.position.x,this.body.position.y)
        circle(0,0,20)
        rotate(this.body.angle)
        
        pop()
    }

}