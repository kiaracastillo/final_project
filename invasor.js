// invadres

function Flower(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
  
    this.xdir = 1;
  
    this.grow = function() {
      this.r = this.r + 2;   
    }
  
    this.shiftDown = function() {
      this.xdir *= -1;
      this.y += this.r;
    }
  
    this.move = function() {
      this.x = this.x + this.xdir;
    }
  
    this.show = function() {
      noStroke();
      fill(3, 255, 167, 150);
      ellipse(this.x, this.y, this.r*2, this.r*2);
    }
  
  }