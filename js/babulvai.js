document.getElementById("item2").addEventListener("click", function(event){
    console.log("Item 2 clicked");
    event.stopImmediatePropagation();
})

document.getElementById("list-ul").addEventListener("click", function(){
    console.log("List ul clicked");
})

document.getElementById("list-container").addEventListener("click", function(){
    console.log("list-container clicked");
})

document.getElementById("body").addEventListener("click", function(){
    console.log("body clicked");
})