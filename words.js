var list_of_huruf='ABCDEFGHIJ'

function draw_letters(){
    for (i=0; i<list_of_huruf.length;i++){
        new_huruf=document.createElement('p')
        new_huruf.textContent=list_of_huruf[i]
        document.querySelector("#myCanvas").appendChild(new_huruf)
    }
    
}

function makeid(length, height, cb) {
    let final            =[]
    let characters       = 'WORKOUTAG'
    let charactersLength = characters.length;
    let posisi=[]
   //  let j=0;
    for(j=0;j<height;j++){
      let result = []
      for ( let i = 0; i < length; i++ ) {
       result.push(" ");
     }final.push(result);
   }for (t=0;t<charactersLength;t++){
      x=Math.floor(Math.random()*10)
      y=Math.floor(Math.random()*10)

   }return final
}

console.log(makeid(10,10))