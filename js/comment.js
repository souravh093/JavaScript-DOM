document.getElementById("commentButton").addEventListener("click", function(){
    const getComment = document.getElementById("newComment");
    const commentValue = getComment.value;
    const showComment = document.getElementById("commentContainer");

    const newElement = document.createElement("p");
    showComment.appendChild(newElement);
    newElement.innerText = commentValue;
    getComment.value = "";
})