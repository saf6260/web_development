//reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2 but object1 != object3 due to object2 being a reference of object1,
and object3 being a different variable from object1

//instantiation
class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);   
    }
    play(){
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
