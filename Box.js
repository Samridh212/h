const { CENTER, FILL } = require("./p5");

class box {
   constructor(x,y,width,height){
      var options = {
       isStatic:true   
      }
      this.body = Bodies.rectangle(x,y,width,height);
      World.add(world,this.body)
   }
   display(){
     var pos = this.body.position;
     rectMode(CENTER)
     fill(255,0,0)
     rect(pos.x,pox.y,this.width,this.height)


   }

}