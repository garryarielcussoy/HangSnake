function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.stop = function(){
        this.xSpeed = 0
        this.ySpeed = 0
    }

    this.draw = function(){
        ctx.fillStyle = "#5B8422";

        for (let i=0; i<this.tail.length;i++){
            ctx.fillRect(this.tail[i].x,this.tail[i].y, scale, scale);

        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function(){
        for (let i=0; i<this.tail.length -1;i++){
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total -1]= { x: this.x, y:this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x >= canvas.width){
            alert('Game Over !')
        }
        else if (this.y >= canvas.height){
            alert('Game Over !')
        }
        else if (this.x < 0){
            alert('Game Over !')
        }
        else if (this.y < 0){
            alert('Game Over !')
        }
    }
    
    this.changeDirection = function(direction){
        switch(direction){
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'Left':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    this.eat = function(fruit){
        if (this.x === fruit.x && this.y+20 === fruit.y){
            this.total++;    
            return true
        }
        else{
            return false
        }
    }

    this.cekTabrakBadan = function(target){
        for (var i=0; i<this.tail.length; i++){
            if (this.x === this.tail[i].x && this.y === this.tail[i].y){
                this.total++;
                if (target !== 0){
                    alert('Bunuh Diri!!!')
                }    
            }
        }   
    }
}