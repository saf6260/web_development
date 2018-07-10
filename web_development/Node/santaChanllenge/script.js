const fs = require('fs');

/*fs.readFile('./input.txt', (err, data) => {
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
})*/ //My way ^
//The better way v

function question1() {
    fs.readFile('./input.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionArray = directions.split('');
        const answer = directionArray.reduce((acc, currentValue) => {
            if (currentValue ==="(") {
                return acc += 1;
            } else if (currentValue ===")"){
                return acc -= 1;
            }
        },0)
        console.timeEnd('santa-time');
        console.log('floor:', answer);
    })
}

question1()

function question2() {
    fs.readFile('./input.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionArray = directions.split('');
        let acc = 0;
        let counter = 0;
        const answer = directionArray.some((currentValue) =>{
            if(currentValue === '('){
                acc += 1;
            } else if(currentValue === ')'){
                acc -= 1;
            }
            counter ++;
            return acc < 0;
        })
        console.timeEnd('santa-time');
        console.log('basement entered at: ', counter);
    })
}

question2();

