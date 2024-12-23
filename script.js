// Generate moving stars
const starCount = 100;
const body = document.body;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  // Randomize initial position
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  // Randomize animation delay and speed
  star.style.animationDelay = `${Math.random() * 2}s`;
  star.style.animationDuration = `${1 + Math.random() * 3}s`;

  body.appendChild(star);
}

// Add CSS dynamically
const style = document.createElement("style");
style.textContent = `
  .star {
    position: fixed;
    width: 3px;
    height: 3px;
    background: #58a6ff;
    border-radius: 50%;
    animation: moveStar infinite ease-in-out, twinkle 2s infinite;
  }
`;
document.head.appendChild(style);




const toggleSwitch = document.getElementById('theme-toggle');

// Check saved theme in localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.add(savedTheme);
toggleSwitch.checked = savedTheme === 'light';

// Toggle theme on switch change
toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});



function zoomImage(imageId) {
    // Get the clicked image
    const selectedImage = document.getElementById(imageId);
    const zoomedImg = document.getElementById('zoomedImg');
    const fullscreen = document.getElementById('fullscreen');

    // Set the zoomed image source
    zoomedImg.src = selectedImage.src;

    // Display the fullscreen modal
    fullscreen.style.display = 'flex';
}

function closeZoom() {
    // Close the fullscreen view
    const fullscreen = document.getElementById('fullscreen');
    fullscreen.style.display = 'none';
}
  
// Locked 
const lockIcon = document.querySelector('.lock-icon');
const getAccessBtn = document.getElementById('getAccessBtn');

lockIcon.addEventListener('click', function() {

    getAccessBtn.classList.add('scaled');

 
    setTimeout(function() {
        getAccessBtn.classList.remove('scaled');
    }, 2000); 
});
  
  
  






document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const fullscreenOverlay = document.getElementById("fullscreenOverlay");
  const fullscreenImage = document.getElementById("fullscreenImage");
  const closeBtn = document.getElementById("closeBtn");

  // Open image in full screen
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      fullscreenImage.src = item.src;
      fullscreenOverlay.style.display = "flex";
    });
  });

  // Close full screen
  closeBtn.addEventListener("click", () => {
    fullscreenOverlay.style.display = "none";
    fullscreenImage.src = "";
  });

  // Close full screen when clicking outside the image
  fullscreenOverlay.addEventListener("click", (e) => {
    if (e.target === fullscreenOverlay) {
      fullscreenOverlay.style.display = "none";
      fullscreenImage.src = "";
    }
  });
});
