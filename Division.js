class Division{
    constructor(x,y){

        var options={
            isStatic:true

        }
        
        this.body=Bodies.rectangle(x,y,10,200,options)
        
        World.add(world,this.body)
    }
    display(){
        push()
        fill("white")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,10,200)
        pop()
    }
}