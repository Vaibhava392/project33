class Particles {
    constructor(x, y) {
      
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':4.5,
          isStatic : false
      }
      this.radius = 10

      this.body = Bodies.circle(x, y, this.radius, options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      noStroke();
      fill(this.color);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };