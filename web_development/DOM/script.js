var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("LI");

function listLength(){
    return listItems.length;
}

for (var i = 0; i < listLength(); i++){
    var btn = document.createElement("button");
        btn.appendChild(document.createTextNode("Delete"));
        listItems[i].appendChild(btn);
        btn.onclick = removeParent;
}

function removeParent(event){
    event.target.removeEventListener("click", removeParent, false);
    event.target.parentNode.remove();
}

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
    btn.onclick = removeParent;
}

function addListAfterClick() {
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress() {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function markAsDone(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("done");
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", markAsDone);
