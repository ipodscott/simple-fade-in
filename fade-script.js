document.addEventListener("DOMContentLoaded", function() {
  const wpSiteCover = document.querySelectorAll(".wp-block-cover");

  wpSiteCover.forEach(function(block) {
  setTimeout(function() {
    block.classList.add("fade-in");
  }, 100);
  });
});


window.addEventListener('scroll', function() {
  const topHeader = document.querySelector('.top-header');
  const bottomFooter = document.querySelector('.site-footer-container');
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > 60) {
    //topHeader.classList.add('scrolled');
  } else {
    //topHeader.classList.remove('scrolled');
  }
  

  
});


// Helper function to determine if an element is in the viewport
function isInViewport(element, offset = 0) {
  const rect = element.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  return (
  rect.top <= (windowHeight * offset) &&
  rect.left <= (windowWidth * offset) &&
  rect.bottom >= 0 &&
  rect.right >= 0
  );
}

// Function to handle the fade-in effect
function fadeInOnScroll(elements, offset) {
  elements.forEach(element => {
  if (isInViewport(element, offset)) {
    element.classList.add('visible');
  } else {
    element.classList.remove('visible');
  }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in-element');
  const offset = 0.80; // 80% of the center of the viewport

  // Initial check to fade-in elements
  fadeInOnScroll(fadeElements, offset);

  // Add a scroll event listener to fade-in elements when they enter the viewport
  window.addEventListener('scroll', () => {
  fadeInOnScroll(fadeElements, offset);
  });
});


window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const setOpacity = (selector, value) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.style.opacity = value;
  });
  };

  setOpacity('.top', 1 - scrollTop / 750);
  setOpacity('.fadey', 1 - scrollTop / 1200);

  const setMarginTop = (selector, value) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.style.marginTop = value;
  });
  };

  setMarginTop('.move-down', 0 + scrollTop * 0.25 + 'vh');
  setMarginTop('.move-down.slow', 0 + scrollTop * 0.065 + 'vh')
  setMarginTop('.move-up', 0 + scrollTop * 0.25 + 'vh');
  setMarginTop('.move-up.slow', 0 - scrollTop * 0.025 + 'vh');
});