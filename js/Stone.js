class Stone{
    constructor(x,y,radius){
        var options = {
            density:0.0001
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world,this.body)
    }
    show(){
      var pos = this.body.position
      var angle = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      fill("white")
      ellipseMode(CENTER)
      ellipse(0,0,this.radius+30,this.radius+30)
      pop()
    }
}