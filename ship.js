// ship

function Ship() {
    this.x = width/2;
    this.y = height - 20;
    this.width = 60;
          this.height = 20;
    this.xdir = 0;
  
    this.show = function() {
      fill(255, 3, 217);
      rectMode(CENTER);
      rect(this.x, this.y, this.width, this.height);
      rect(this.x + 1, this.y - 10, 20, 30);
  
    }
  
    this.setDir = function(dir) {
      this.xdir = dir;
    }
  
    this.move = function(dir) {
      this.x += this.xdir*5;
    }
  
  }
  