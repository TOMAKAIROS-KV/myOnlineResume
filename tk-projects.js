//INTRO ANIMATION STARTS HERE
function fadeIntro() {
  document.querySelectorAll("#tk-top-h1").forEach((tktoph1, index) => {
    tktoph1.classList.add("fade");
  });
}

//FUNCTIONS START WHEN 50% IS IN VIEW.
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.target.id === "tk-top-h1" && entry.intersectionRatio >= 0.5) {
      fadeIntro(); // Call this function when tk-1 is 50% in view
    }
  });
}

// Create Intersection Observer instance
const options = {
  threshold: 0.5, // Fire callback when 50% of the element is in view
};

const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the elements
const tktoph1 = document.getElementById("tk-top-h1");
const tkproject1 = document.querySelector(".tk-project1");

observer.observe(tktoph1);

// Get the project box element
const projectBox = document.querySelector(".project-box");

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle box shadow change
function handleBoxShadowChange() {
  if (isInViewport(projectBox, 0.25)) {
    projectBox.classList.add("box-shadow-visible");
  } else {
    projectBox.classList.remove("box-shadow-visible");
  }
}

// Check box shadow on page load
handleBoxShadowChange();

// Check box shadow on scroll
window.addEventListener("scroll", handleBoxShadowChange);

window.addEventListener("load", function () {
  var tkContainer = document.querySelector(".tk-container");

  function handleResize() {
    var windowWidth = window.innerWidth;
    if (windowWidth >= 1080 && windowWidth <= 3440) {
      // Check if it's within the specified width range
      tkContainer.style.height = "40vh";
      tktoph1.style.transform = "translateY(150px)"; // Updated line
    } else {
      // Reset the styles if it's outside the specified width range
      tkContainer.style.height = "";
      tktoph1.style.transform = ""; // Updated line
    }
  }

  // Initial check on load
  handleResize();

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);
});
