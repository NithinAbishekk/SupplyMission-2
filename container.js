class Container{
    constructor(x1,y1,w1,h1){
        var option ={
           isStatic : true
        }
        this.body = Bodies.rectangle(x1,y1,w1,h1,option);
        this.width = w1;
        this.height = h1;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255,0,0);
        rect(pos.x,pos.y,this.width,this.height);

    }
}