
class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
           restitution : 0.3,
           friction : 0.5,
           density : 1.2
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this. dustbin_img=loadImage("images/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;

      push();
      translate(pos.x, pos.y);
      noStroke();
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(255);
      rect(0, 0, this.width, this. height);
      pop();
      image(this.dustbin_img,600,315,215,150);
    }
  }