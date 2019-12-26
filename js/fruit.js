function Fruit(){
    this.x;
    this.y;

    
    this.pickLocation = function(){
        this.x = Math.abs((Math.floor(Math.random()*rows-1))*scale)%500;
        this.y = Math.abs((Math.floor(Math.random()*columns-1))*scale)%500;
        if (this.x === 0){
            this.x = 20;
        }
        if (this.y === 0){
            this.y = 20;
        }
    }

    this.pickLocation2 = function(){
        this.x = 2000;
        this.y = 2000;
    }

    this.draw = function(letter){
        ctx.fillStyle = "white"
        ctx.font = "18px Arial"
        ctx.fillText(letter, this.x, this.y)
    }

    this.draw2 = function(){
        ctx.fillStyle = "#333642"
        ctx.fillRect(this.x, this.y, scale, scale)
    }
}