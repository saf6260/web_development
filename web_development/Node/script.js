const fs = require('fs');

fs.readFile('./Hello.txt', (err, data) => {
    console.time('funchallenge');
    if (err) {
        console.log('errrrooooorrr');
    }
    console.log('1', data.toString('utf8'));
    console.timeEnd('funchallenge');
})

const file = fs.readFileSync('./Hello.txt');
console.log('2', file.toString());

/*fs.appendFile('./Hello.txt', ' This is so cool!', err => {
    if(err) {
        console.log(err);
    }
})*/

fs.writeFile('bye.txt', 'Sad to see you go', err => {
    if(err){
        console.log(err)
    }
});

fs.unlink('./bye.txt', err => {
    if(err) {
        console.log(err)
    }
});
