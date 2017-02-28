function Snake(){
	this.x=0;
	this.y=0;

	this.xspeed=1;
	this.yspeed=0;//pour le faire avancer de gauche a droite

	this.total=0;
	this.tail=[];

	this.dead=function(){
		for(var i=0;i<this.tail.length;i++)
		{
			var pos=this.tail[i];
			var d=dist(this.x,this.y,pos.x,pos.y);
			if(d<1){
				this.tail=[];
				this.total=0;
				console.log("You died");
			}
		}
	}

	this.update=function(){
		//shift spots
		if(this.total===this.tail.length){
			for (var i=0;i<this.tail.length-1;i++)
		{
			this.tail[i]=this.tail[i+1];
		}
		}

		this.tail[this.total-1]=createVector(this.x,this.y);

		//head
		this.x=this.x+this.xspeed*scl;
		this.y=this.y+this.yspeed*scl;

		this.x=constrain(this.x,0,width-scl);
		this.y=constrain(this.y,0,width-scl);


	}

	this.show=function(){

	
		for (var i=0;i<this.tail.length;i++)
		{
				fill(255);
			rect(this.tail[i].x,this.tail[i].y,scl,scl);
		}
				fill(255);
			rect(this.x,this.y,scl,scl);


	}

	this.dir=function(x,y){//direction
		this.xspeed=x;
		this.yspeed=y;
	}

	this.eat=function(food){
	var d=dist(this.x,this.y,food.x,food.y);

	if (d<scl) {
		this.total++;
		console.log(this.total);
		return true;
	}else {
		return false;
	}
	}


}