// const items = document.getElementsByClassName("item")
// for (const item of items) {
//     item.addEventListener("click", function(event){
//         event.target.parentNode.removeChild(event.target);
//     });
// }

document.getElementById("list-container").addEventListener("click", function(event){
    event.target.parentNode.removeChild(event.target);
})

document.getElementById("btn-add-item").addEventListener("click", function(){
    const listContainer = document.getElementById("list-container");
    const inputItem = document.getElementById("inputItem");
    const inputItemValue = inputItem.value;
    inputItem.value = "";
    const newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText = inputItemValue;
    listContainer.appendChild(newItem);

})