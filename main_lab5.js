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
        const body = document.body;
        const button = document.getElementById('darkModeBtn');
        
        if (body.classList.contains('dark-mode')) {
            // Switch to light mode
            body.classList.remove('dark-mode');
            button.textContent = '🌙 Dark Mode';
            document.body.style.backgroundColor = '#F5E6C4';  // Light cream background
            document.body.style.color = '#000080';  // Dark blue text
        } else {
            // Switch to dark mode
            body.classList.add('dark-mode');
            button.textContent = '☀️ Light Mode';
            document.body.style.backgroundColor = '#000000';  // Pure black background
            document.body.style.color = '#FFFFFF';  // White text
        }
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

document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', e => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length) {
                value = value.length <= 3 ? value :
                        value.length <= 6 ? `${value.slice(0,3)}-${value.slice(3)}` :
                        `${value.slice(0,3)}-${value.slice(3,6)}-${value.slice(6,10)}`;
            }
            e.target.value = value;
        });

        phoneInput.addEventListener('blur', e => {
            if (e.target.value && !/^\d{3}-\d{3}-\d{4}$/.test(e.target.value)) {
                alert("Please enter a valid phone number in the format: 123-456-7890");
                e.target.focus();
            }
        });
    }
});

function toggleFontSize() {
    const body = document.body;
    const button = document.getElementById('fontSizeBtn');
    
    if (body.classList.contains('large-text')) {
        // Reset to normal size
        body.classList.remove('large-text');
        button.innerHTML = '<span class="size-icon">Aa</span>Increase Text Size';
        localStorage.setItem('largeText', 'false');
    } else {
        // Increase text size
        body.classList.add('large-text');
        button.innerHTML = '<span class="size-icon">Aa</span>Reset Text Size';
        localStorage.setItem('largeText', 'true');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Check for saved text size preference
    const largeText = localStorage.getItem('largeText') === 'true';
    if (largeText) {
        document.body.classList.add('large-text');
        document.getElementById('fontSizeBtn').innerHTML = 
            '<span class="size-icon">Aa</span>Reset Text Size';
    }
});

// Photo gallery functions
function enlargeImage(img) {
    const modal = document.getElementById('imageModal');
    const enlargedImg = document.getElementById('enlargedImg');
    const modalCaption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    enlargedImg.src = img.src;
    modalCaption.textContent = img.nextElementSibling.textContent;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (event.target !== document.getElementById('enlargedImg')) {
        modal.style.display = 'none';
    }
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('imageModal').style.display = 'none';
    }
});

// Add these functions for photo information
function showPhotoInfo(button) {
    const modal = document.getElementById('infoModal');
    const infoText = document.getElementById('photoInfoText');
    const infoTitle = document.querySelector('.info-modal h3');
    
    // Check if it's a video info button
    if (button.classList.contains('video-info-btn')) {
        infoTitle.textContent = 'Video Information';
    } else {
        infoTitle.textContent = 'Photo Information';
    }
    
    infoText.textContent = button.getAttribute('data-info');
    modal.style.display = 'block';
}

function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Close info modal when clicking outside
window.onclick = function(event) {
    const infoModal = document.getElementById('infoModal');
    if (event.target == infoModal) {
        infoModal.style.display = 'none';
    }
}

// Close info modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('infoModal').style.display = 'none';
    }
});

