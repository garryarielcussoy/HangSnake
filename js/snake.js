function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.stop = function(){
        this.xSpeed = 0;
        this.ySpeed = 0;
        for (let i=0; i<this.tail.length;i++){
            this.tail[i].xSpeed = 0;
            this.tail[i].ySpeed = 0;
        }
    }

    this.draw = function(target = -1){
        if (target !== 0){
            ctx.fillStyle = "#5B8422";

            for (let i=0; i<this.tail.length;i++){
                ctx.fillRect(this.tail[i].x,this.tail[i].y, scale, scale);

            }
            ctx.fillRect(this.x, this.y, scale, scale);
        } 
    }

    this.update = function(){
        for (let i=0; i<this.tail.length -1;i++){
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total -1]= { x: this.x, y:this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // Dinding A Horizontal
        if (this.x >= 40 && this.x <= 210 && this.y === 40){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            let crashmusic = document.getElementById("crash");
            crashmusic.play();
            alert('Game Over!')
            return -1
        } 

        // Dinding A Vertical
        if (this.y >= 40 && this.y <= 130 && this.x === 40){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            let crashmusic = document.getElementById("crash");
            crashmusic.play();
            alert('Game Over!')
            return -1
        }
        
        // Dinding B Horizontal
        if (this.x >= 280 && this.x <= 450 && this.y === 440){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            let crashmusic = document.getElementById("crash");
            crashmusic.play();
            alert('Game Over!')
            return -1
        } 

        // Dinding B Vertical
        if (this.y >= 360 && this.y <= 450 && this.x === 440){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            let crashmusic = document.getElementById("crash");
            crashmusic.play();
            alert('Game Over!')
            return -1
        }

        // Dinding Tengah Horizontal
        if (this.x >= 140 && this.x <= 340 && this.y === 240){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            let crashmusic = document.getElementById("crash");
            crashmusic.play();
            alert('Game Over!')
            return -1
        }

        // Dinding Tengah Vertical
        if (this.y >= 140 && this.y <= 340 && this.x === 240){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            let crashmusic = document.getElementById("crash");
            crashmusic.play();
            alert('Game Over!')
            return -1
        }

        // Dinding Kecil Bawah Kiri
        if (this.y >= 420 && this.y <= 440 && this.x >= 40 && this.x <= 60){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            let crashmusic = document.getElementById("crash");
            crashmusic.play();
            alert('Game Over!')
            return -1
        }

        // Dinding Kecil Atas Kanan
        if (this.y >= 40 && this.y <= 60 && this.x >= 420 && this.x <= 440){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            let crashmusic = document.getElementById("crash");
            crashmusic.play();
            alert('Game Over!')
            return -1
        }

        if (this.x >= canvas.width){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            let crashmusic = document.getElementById("crash");
            crashmusic.play();
            alert('Game Over!')
            return -1
        }
        else if (this.y >= canvas.height){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            let crashmusic = document.getElementById("crash");
            crashmusic.play();
            alert('Game Over!')
            return -1
        }
        else if (this.x < 0){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            let crashmusic = document.getElementById("crash");
            crashmusic.play();
            alert('Game Over!')
            return -1
        }
        else if (this.y < 0){
            let backgroundmusic = document.getElementById("backgroundmusic");
            backgroundmusic.pause();
            let crashmusic = document.getElementById("crash");
            crashmusic.play();
            alert('Game Over!')
            return -1
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

    this.cekTabrakBadan = function(){
        for (var i=0; i<this.tail.length; i++){
            if (this.x === this.tail[i].x && this.y === this.tail[i].y){
                this.total++;
                let backgroundmusic = document.getElementById("backgroundmusic");
                backgroundmusic.pause();
                let crashmusic = document.getElementById("crash");
                crashmusic.play();
                alert('Bunuh Diri!!!')
                return -2;
            }
        }   
    }
}