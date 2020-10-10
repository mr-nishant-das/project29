class ground{
    constructor() {
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(450, 390, 900, 20, options);
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
      }
}