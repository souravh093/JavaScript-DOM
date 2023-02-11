function handleOnClick() {
  const handlerStatus = document.getElementById("handlerStatus");
  handlerStatus.textContent = "Update handler status";
}

document.getElementById("eventListener").addEventListener("click", function () {
  const handlerStatus = document.getElementById("handlerStatus");
  handlerStatus.textContent = "Something is changing to the handler";
});


// option 2 recap
document.getElementById("inputUpdate").addEventListener('click', function(){
    const inputField = document.getElementById("inputField");
    const inputValue = inputField.value;
    // console.log(inputField.value);
    const inputText = document.getElementById("inputText");
    inputText.innerText = inputValue;
    inputField.value = '';

})