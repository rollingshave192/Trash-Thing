class Dustbin{
    constructor(x,y,width,height){
        
        var options = {
        isStatic:true,
       
        }
     this.angle = 180;
        this.body = Bodies.rectangle(x , y+height, width,height,options);
    this.body1 = Bodies.rectangle(x-width/2,y,height,width,options);
    this.body2 = Bodies.rectangle(x+width/2,y,height,width,options);
    World.add (world , this.body,this.body1,this.body2);
    this.w = width;
    this.h=height;
}
    display()
	{		var pos=this.body.position;		
			push();
			translate(pos.x, pos.y);
            rotate(this.angle);
            strokeWeight(3);
			fill(255,0,255)
           rectMode(CENTER);
            rect(0,0,this.w, this.h);
			pop();		
            var pos=this.body1.position;		
			push();
			translate(pos.x, pos.y);
            rotate(this.angle*0);
            strokeWeight(3);
			fill(255,0,255)
           rectMode(CENTER);
            rect(0,0,this.h, this.w);
			pop();	    
            var pos=this.body2.position;		
			push();
			translate(pos.x, pos.y);
            rotate(this.angle*0);
            strokeWeight(3);
			fill(255,0,255)
           rectMode(CENTER);
            rect(0,0,this.h, this.w);
			pop();	
        }
 }