// document.getElementById("buttonMore").addEventListener("mousemove", function(){
//     console.log("Event Triggered");
// })

// document.getElementById("textField").addEventListener("focus", function(){
//     console.log("Event Triggered");
// })

// document.getElementById("textField").addEventListener("blur", function(){
//     console.log("Event Triggered blur");
// })

// document.getElementById("textField").addEventListener("keydown", function(event){
//     console.log(event.target.value);
// })
// document.getElementById("textField").addEventListener("keypress", function(event){
//     console.log(event.target.value);
// })
document.getElementById("textField").addEventListener("keyup", function(event){
    console.log(event.target.value);
})