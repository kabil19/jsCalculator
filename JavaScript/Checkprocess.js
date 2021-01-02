$(document).ready(function () {

document.getElementById("btn").addEventListener("click",myfun);


function myfun() {
    var element = document.createElement("p");
    var node = document.createTextNode("This Is a newly created paragraph!");
    element.appendChild(node);
    document.getElementById("myId").appendChild(element);

}






})







