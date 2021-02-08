class Paper { 
    constructor(x, y, r) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this. paper_img=loadImage("images/paper.png");

        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body)
    }
     display(){
         var paperpos = this.body.position;
         
         push();
         translate(paperpos.x, paperpos.y);
         //ellipseMode(RADIUS);
         strokeWeight(3);
         stroke("black");
         fill("white");
         //ellipse(0, 0, this.r, this.r);
         image(this.paper_img,0,0,50,50);
         pop();
     }
}