document.getElementById("btnDelete").addEventListener("click", function(){
    const removeInfo = document.getElementById("secretInfo");

    removeInfo.style.display = "none";
})

document.getElementById("deleteConfirm").addEventListener("keyup", function(event){
    const confirm = event.target.value;
    const removeInfo = document.getElementById("btnDelete");
    if(confirm === "delete") {
        removeInfo.removeAttribute("disabled");
    }else {
        removeInfo.setAttribute("disabled", true);
    }
})