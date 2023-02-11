// option 1 onclick event 
{/* <button onclick="document.body.style.backgroundColor='yellow'">Make yellow</button> */}

// options 2 onclick event Recommended options Important we will use this
function makeRed() {
    document.body.style.backgroundColor = "red";
}

// Options 3 onclick event
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

// options 4 onclick event Recommended options
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// options 5 onclick event
const pinkButton = document.getElementById("makePink");
pinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// options 6 onclick event  Recommended options
const makeGreenButton = document.getElementById("makeGreen");
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// Important options
// Final option using event handlers for interactive website 
document.getElementById("makeGolderRoad").addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
});