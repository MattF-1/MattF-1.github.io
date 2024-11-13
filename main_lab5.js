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
  
    // Check for dark mode preference when page loads
    document.addEventListener('DOMContentLoaded', function() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
    });

    // Update toggle function to save preference
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        // Save the preference
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }

document.addEventListener('DOMContentLoaded', function() {
  const resetBtn = document.getElementById('resetBtn');
  
  if (resetBtn) {
      resetBtn.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent immediate reset
          
          const confirmReset = confirm("Are you sure you want to reset the form? All entered data will be lost.");
          
          if (confirmReset) {
              // If user confirms, reset the form
              document.querySelector('.contact-form').reset();
          }
      });
  }

  // Add submit form handling
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault(); // Prevent default form submission
          
          // Show success message
          alert("Your Information has been sent! Please allow 1-5 days to respond");
          
          // Reset the form
          contactForm.reset();
          
          // Optional: Scroll back to top of form
          contactForm.scrollIntoView({ behavior: 'smooth' });
      });
  }
});