const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//closures
//Child scope always has connection to parent scope

//currying 
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

//compose 
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => sum + 1;

compose(sum, sum)(5);

//returns 7 due to 5 plus 1 = 6  then takes 6 (the result) and runs 6 + 1 = 7
