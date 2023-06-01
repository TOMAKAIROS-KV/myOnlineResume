document.getElementById("line1text").addEventListener("click", function () {
  const line1window = document.querySelector("#line1window");
  line1window.classList.toggle("show-linewindow");
  setPointerEvents();
});

document.querySelector("#tk-cls-btn1").addEventListener("click", function () {
  const line1window = document.querySelector("#line1window");
  line1window.classList.add("fade-out");
  setTimeout(function () {
    line1window.classList.remove("show-linewindow");
    line1window.classList.remove("fade-out");
    setPointerEvents();
  }, 250); // Wait for the fade-out animation to finish (500ms)
});

document.getElementById("line2text").addEventListener("click", function () {
  const line2window = document.querySelector("#line2window");
  line2window.classList.toggle("show-linewindow");
  setPointerEvents();
});

document.querySelector("#tk-cls-btn2").addEventListener("click", function () {
  const line2window = document.querySelector("#line2window");
  line2window.classList.add("fade-out");
  setTimeout(function () {
    line2window.classList.remove("show-linewindow");
    line2window.classList.remove("fade-out");
    setPointerEvents();
  }, 250); // Wait for the fade-out animation to finish (500ms)
});

document.getElementById("line3text").addEventListener("click", function () {
  const line3window = document.querySelector("#line3window");
  line3window.classList.toggle("show-linewindow");
  setPointerEvents();
});

document.querySelector("#tk-cls-btn3").addEventListener("click", function () {
  const line3window = document.querySelector("#line3window");
  line3window.classList.add("fade-out");
  setTimeout(function () {
    line3window.classList.remove("show-linewindow");
    line3window.classList.remove("fade-out");
    setPointerEvents();
  }, 250); // Wait for the fade-out animation to finish (500ms)
});

document.getElementById("line4text").addEventListener("click", function () {
  const line4window = document.querySelector("#line4window");
  line4window.classList.toggle("show-linewindow");
  setPointerEvents();
});

document.querySelector("#tk-cls-btn4").addEventListener("click", function () {
  const line4window = document.querySelector("#line4window");
  line4window.classList.add("fade-out");
  setTimeout(function () {
    line4window.classList.remove("show-linewindow");
    line4window.classList.remove("fade-out");
    setPointerEvents();
  }, 250); // Wait for the fade-out animation to finish (500ms)
});

//This is the pointer events for the WINDOWS
function setPointerEvents() {
  const tkClsBtns = document.querySelectorAll(".tk-cls-btn");
  const pageElements = document.querySelectorAll("body *:not(.tk-cls-btn)");

  let isActiveWindow = false;

  // Check if any line window is active
  if (
    isActive("#line1window") ||
    isActive("#line2window") ||
    isActive("#line3window") ||
    isActive("#line4window")
  ) {
    isActiveWindow = true;
  }

  for (let i = 0; i < tkClsBtns.length; i++) {
    tkClsBtns[i].style.pointerEvents = "auto";
  }

  for (let i = 0; i < pageElements.length; i++) {
    pageElements[i].style.pointerEvents = isActiveWindow ? "none" : "auto";
  }
}

//This is for if to determine if linewindows is active or not. it will help indicate whether it is true or not. this code works hand in hand with the function setPointerEvents(); above
function isActive(selector) {
  const element = document.querySelector(selector);
  return element.classList.contains("show-linewindow");
}

// THIS IS TO ANIMATE & FADE THE LINES and LINE TEXT ONE AFTER ANOTHER.
const animateLines = document.querySelectorAll(".animateLine");
const lines = document.querySelectorAll(".line");
const putLineAnimation1 = document.querySelector("#putLineAnimationHere1");
const putLineAnimation2 = document.querySelector("#putLineAnimationHere2");
const putLineAnimation3 = document.querySelector("#putLineAnimationHere3");
const putLineAnimation4 = document.querySelector("#putLineAnimationHere4");

//TIMELINE ANIMATION STARTS HERE
function startTimeline() {
  document.querySelectorAll(".tk-content1").forEach((tkcontent1, index) => {
    tkcontent1.classList.add("fade");
  });

  // Add classes to the putLineAnimationHere element
  putLineAnimation1.classList.add("line", "animateLine");
  setTimeout(function () {
    putLineAnimation2.classList.add("line", "animateLine");
  }, 1000); // 1000 milliseconds delay before executing the next line
  setTimeout(function () {
    putLineAnimation3.classList.add("line", "animateLine");
  }, 2000); // 2000 milliseconds delay before executing the next line
  setTimeout(function () {
    putLineAnimation4.classList.add("line", "animateLine");
  }, 3000); // 3000 milliseconds delay before executing the next line

  document.querySelectorAll(".linetext").forEach((linetext, index) => {
    linetext.style.animationDelay = `${index * 1}s`;
    linetext.classList.add("fade");
  });
}
//INTRO ANIMATION STARTS HERE
function fadeIntro() {
  document.querySelectorAll(".tk-createwrap").forEach((tkcreatewrap, index) => {
    tkcreatewrap.classList.add("fade");
  });
  document
    .querySelectorAll(".tk-content-down-arrow")
    .forEach((tkcontentdownarrow, index) => {
      tkcontentdownarrow.classList.add("tk-arrow-animation");
    });
}

//FUNCTIONS START WHEN 50% IS IN VIEW.
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.target.id === "tk-1" && entry.intersectionRatio >= 0.5) {
      fadeIntro(); // Call this function when tk-1 is 50% in view
    }

    if (entry.target.id === "tk-2" && entry.intersectionRatio >= 0.5) {
      startTimeline(); // Call this function when tk-2 is 50% in view
    }
  });
}

// Create Intersection Observer instance
const options = {
  threshold: 0.5, // Fire callback when 50% of the element is in view
};

const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the elements
const tk1Element = document.getElementById("tk-1");
const tk2Element = document.getElementById("tk-2");

observer.observe(tk1Element);
observer.observe(tk2Element);
