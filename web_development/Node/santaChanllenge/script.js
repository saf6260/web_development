const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    console.time('funchallenge');
    if(err){
        console.log(err);
    } else{
        let floor = 0;
        let first = false;
        let basement = 0;
        const readableData = data.toString('utf8');
        for(let i = 0; i < readableData.length; i++){
            if(readableData[i] === "("){
                floor++;
            } else if(readableData[i] === ")"){
                floor--;
            }
            if(floor === -1 && first === false){
                first = true;
                basement = i + 1;
            }
        }
        console.log(floor);
        console.log(basement);
    }
    console.timeEnd('funchallenge');
})
