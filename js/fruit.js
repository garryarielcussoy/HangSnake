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

        // Dinding A
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.lineCap = 'round'
        ctx.moveTo(50, 130);
        ctx.lineTo(50, 50);
        ctx.lineTo(210, 50);
        ctx.stroke(); 

        // Dinding B
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.lineCap = 'round'
        ctx.moveTo(450, 370);
        ctx.lineTo(450, 450);
        ctx.lineTo(290, 450);
        ctx.stroke();

        // Dinding PlusA
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.lineCap = 'round'
        ctx.moveTo(250, 150);
        ctx.lineTo(250, 350);
        ctx.stroke();

        // Dinding PlusB
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.lineCap = 'round'
        ctx.moveTo(150, 250);
        ctx.lineTo(350, 250);
        ctx.stroke();

        // Dinding 1A
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.lineCap = 'square'
        ctx.moveTo(50, 450);
        ctx.lineTo(70, 450);
        ctx.lineTo(70, 430);
        ctx.lineTo(50, 430);
        ctx.lineTo(50, 450);
        ctx.stroke();

        // Dinding 1B
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.lineCap = 'square'
        ctx.moveTo(450, 50);
        ctx.lineTo(430, 50);
        ctx.lineTo(430, 70);
        ctx.lineTo(450, 70);
        ctx.lineTo(450, 50);
        ctx.stroke();


    }
}