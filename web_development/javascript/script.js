var database = [
    {
        username: "scott",
        password: "supersecret"
    },
    {
        username: "Sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is cool!"
    },
    {
        username: "Mitch",
        timeline: "Java script is sooooooo sweet"
    }
];

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

function isuservalid(user, pass){
    for (var i = 0; i < database.length; i++){
        if (user === database[i].username && pass === database[i].password){
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isuservalid(user, pass)){
        console.log(newsFeed);
    }else{
        alert("Sorry, wrong username and password");
    }
}

signIn(userNamePrompt, passwordPrompt);
