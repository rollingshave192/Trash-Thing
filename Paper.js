class Paper {/* 1) after constructor you didnt wrote any brackets 
                2) the class ending brackets were not there
                3)  also body is not added to world 
                4) display function was also not there
                5) in sketch .jsyou addEngine.update Engine in draw Function
                6) X and Y andradius Should be asked from Users   
I haveMade the Changes according ly and writing it here that you understand */ 
    constructor(x,y,radius){
        var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
        }
    this.body = Bodies.circle(x , y, radius,options);
    World.add (world , this.body);
    this.r = radius;
    }
    display()
	{		var pos=this.body.position;		
			push();
			translate(pos.x, pos.y);

            strokeWeight(3);
			fill(255,0,255)
            ellipseMode(RADIUS);
            ellipse(0,0,this.r, this.r);
			pop();		
	}
}