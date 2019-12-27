const list_words=["Workout","Horse","Cat"]

function hangman(){
    i=Math.floor(Math.random()*3)
    const kosong=[]
    const kumpulan=[]
   
    for(t=0;t<list_words[i].length; t++){
             dict={index:0,
                   huruf:""
             }
             kosong.push("__")
             dict.index=t
             dict.huruf=list_words[i][t]
             kumpulan.push(dict)
            // console.log(kumpulan)
        }console.log(kumpulan)
        console.log(kosong)
    
    }


hangman()