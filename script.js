document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.slideshow img');
    const totalImages = images.length;
  
    function showNextImage() {
      images[currentIndex].classList.remove('visible');
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add('visible');
    }
  
    setInterval(showNextImage, 5000); // Change image every 5 seconds
  });

function openNav() {
    document.getElementById("myNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("myNav").style.width ="0";
}

function openCheckout() {
  document.getElementById("myCheckout").style.width = "250px";
}

function closeCheckout() {
  document.getElementById("myCheckout").style.width ="0";
}