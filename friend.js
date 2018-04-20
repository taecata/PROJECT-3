class Friend {
    constructor (x, x2, y2, s){
        this.x = Number(x);
        this.x2 = Number(x2);
        this.y2 = Number(y2);
        this.name = s;
    }

    display() {
   
    if(this.y2 == 2017){
        stroke('red');}
        else{ if(this.y2 == 2016){
                stroke('red');}
                    else{ if(this.y2 == 2015){
                        stroke('red');}
                            else{
                                stroke('blue');}
                            }
                        }

    
    translate(400,400);
    strokeWeight(0.5);
    rotate(radians(frameCount));
    line(0, 0, this.x*100, this.x*100);

    textAlign(CENTER);
    textSize(10);
    fill(255);
    text(this.name, this.x*10, this.x2*10);
       
    }

}


