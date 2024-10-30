window.onload=function(){
    var user = document.getElementById("username");
    console.log(user.value); // the user input value.
    console.log(user.type); // the type of the form element.
    }
<input type="text" id="myinput" oninput="inputHandler()">

<p id="emptyParagraph">Dynamically change on webpage input without
prompt</p>

function inputHandler()
{
var myvalue = document.getElementById("myinput").value;
document.getElementById("emptyParagraph").innerHTML = "Your Input:" + myvalue;
}
localStorage.setItem("username", "marijn"); // store the items
console.log(localStorage.getItem("username"));// → marijn
localStorage.removeItem("username"); // remove from the localstorage