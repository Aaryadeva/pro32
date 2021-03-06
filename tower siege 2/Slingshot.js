class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.2
        }
        this.pointB=pointB;
        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
    attach(body)
    {
        this.sling.bodyA = body;
    }
    fly()
    {
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA)
        {
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }

    }
}