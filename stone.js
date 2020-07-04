class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			}
		this.x=x;
		this.y=y;
        this.r=r
        Matter.Bodies.polygon(this.x, this.y,50,this.r, [options])
		World.add(world, this.body);
	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
	}
}