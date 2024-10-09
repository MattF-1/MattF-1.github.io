// JavaScript Document

function firsteventhandler(){
  alert("Hello!");
}

// Mouse Over Event Handler
function mOver(some_tag) {
  some_tag.innerHTML = "Thank You";
   some_tag.style.color = "blue";
}
function mOut(some_tag) {
   some_tag.innerHTML = "Mouse Over Me";
   some_tag.style.color = "orange";
}

// Step D: Arrays 
var arr = []; // an empty array.
var a = document.getElementById("mydiv"); // picks up a div element.
arr.push(a); // now arr has a single i tem.
var b = document.getElementById("yourdiv"); // picks up another div.
arr.push(b); // arr now has two items.
a = arr.pop(); // will remove 'yourdiv' and assigned into a variable.
alert(a); // alerts the variable a, which contains 'yourdiv' DOM element.

// Step E: Dropdown menu
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() 
{
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
