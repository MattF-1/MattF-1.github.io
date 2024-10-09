function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  }

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

    function getUserName() {
      {
        document.getElementById("nameDisplay").classList.toggle("show");
        }
      let userName = prompt("Please enter your name:");
      window.onclick = function(event) {
      if (userName) {
          document.getElementById("nameDisplay").innerHTML = "Hello, " + userName + "!";
      }
    }
  }

  function enlargeImage() {
     var img = document.getElementById("myimage")
     if (img.classList.contains("enlarged")) {
      img.classList.remove("enlarged");
      img.style.width = "100";
     }
     else {
      img.classList.add("enlarged");
      img.style.width = "200px";
     }

    }
  
