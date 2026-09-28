console.log(document);

const buttonClick = document.getElementById("Click");
const doubleClick = document.getElementById("Dclick");
const HoldPress = document.getElementById("Hold");
const Food = document.getElementById("Food");

const updatePhrase = document.getElementById("Update");
const InputName = document.getElementById("InputName");
const count = document.getElementById("counter");
const image = document.getElementById("image")

InputName.addEventListener("input", function () {
    updatePhrase.innerHTML = InputName.value;
});

let CLICKCOUNNT = 0;
buttonClick.addEventListener("click", function () {
    CLICKCOUNNT++;
    count.innerHTML = `click count: ${CLICKCOUNNT}`;
});

image.addEventListener("mouseover", function(){
    updatePhrase.innerHTML = "Mouse is hovering right now!";
});

image.addEventListener("mouseout", function(){
    updatePhrase.innerHTML = "Mouse is not hovering anymore!";
});

doubleClick.addEventListener("dblclick", function () {
    updatePhrase.innerHTML = "Button 2X CLICKED!";
    updatePhrase.style.color = "red";
});

InputName.addEventListener("focus", function(){
    updatePhrase.innerHTML = "Typing";
});

InputName.addEventListener("blur", function(){
    updatePhrase.innerHTML = "Not typing anymore";
});

HoldPress.addEventListener("mousedown", function () {
    updatePhrase.innerHTML = "Mouse button is pressed.";
    updatePhrase.style.color = "blue"
});

HoldPress.addEventListener("mouseup", function () {
    updatePhrase.innerHTML = "Mouse button was released.";
    updatePhrase.style.color = "cyan";
});

Food.addEventListener("change", function(){
    updatePhrase.innerHTML = `${InputName.value}'s favourite food is ${Food.value}`;
});
