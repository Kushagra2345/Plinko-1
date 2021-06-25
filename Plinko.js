class Plinko{
    constructor(x,y){

        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,5,options)
        World.add(world,this.body)
        this.color=color(random(0,255),random(0,255),random(0,255))

        this.x=x
        this.y=y
    }

    display(){
        push()
        fill(this.color)
        var x=this.body.position.x
        var y=this.body.position.y
        circle(x,y,10)
       
        pop()
    }
}