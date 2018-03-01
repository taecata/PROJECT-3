class Time {
    constructor (x, y, x2, y2, s){
        this.x = Number(x);
        this.y = Number(y);
        this.x2 = Number(x2);
        this.y2 = Number(y2);
        this.name = s;
    }

    display() {
        
        if (mouseIsPressed) {
            stroke('pink');
            line(this.x, this.y, this.x2, this.y2);
          } else {
            stroke('pink');
            strokeWeight(10);
            line(this.x, this.y, this.x2, this.y2);

            textAlign(CENTER);
            textSize(10);
            fill(255);
            text(this.name, this.x, this.y + 20);
          }
        }

    }


