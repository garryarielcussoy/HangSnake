function makeid(length, height) {
    let final            =[]
    let characters       = 'WORKOUTAG'
    let charactersLength = characters.length;
   //  let j=0;
    for(j=0;j<height;j++){
      let result = []
      for ( let i = 0; i < length; i++ ) {
       result.push(" ");
     }final.push(result);
   }for (t=0;t<charactersLength;t++){
      x=Math.floor(Math.random()*10)
      y=Math.floor(Math.random()*10)   
      final[x][y]=characters[t]
   }return final
}

console.log(makeid(10,10))