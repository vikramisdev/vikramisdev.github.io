// Initialize AOS (Animate On Scroll)
AOS.init({
  once: false,
  duration: 500,
  delay: 100,
});

// Open URL in a new tab
function openUrl(url) {
  window.open(url, "_blank");
}

// Open email client
function openMail() {
  window.open("mailto:vs423502@gmail.com");
}

// Initialize theme to light if not set
if (localStorage.getItem("theme") === null) {
  setTheme("light");
}

function setCookie(name, value, days=365) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = `expires=${date.toUTCString()};`;
  }
  document.cookie = `${name}=${value};${expires}path=/`;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function getCookie(name) {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}


// Set theme in localStorage
function setTheme(theme) {
  setCookie("theme", theme);
  applyTheme(theme);
}

// Get the current theme from localStorage
function getTheme() {
  return getCookie("theme");
}

// Apply theme styles based on the theme
function applyTheme(theme) {
  const isDark = theme === "dark";
  $(".main-container").css("background", isDark ? "#232323" : "#ffffff");
  $(".profile").css("background", isDark ? "#1E1E1E" : "#EBEBFA");
  $(".bio").css("background", isDark ? "#323232" : "#F7F7FF");
  $(".white-text").css("color", isDark ? "black" : "white");
  $(".black-text").css("color", isDark ? "white" : "black");
}

// Toggle dark mode
$(".dark-mode-container").click(function () {
  var button = $(this).find("li");

  // light theme
  if(button.hasClass("bi-moon-fill")) {
    button.removeClass("bi-moon-fill").addClass("bi-sun-fill");
    $(this).css("justify-content", "flex-start");
    setTheme("light");
    applyTheme(getTheme());
  } else if(button.hasClass("bi-sun-fill")) { // dark theme
    button.removeClass("bi-sun-fill").addClass("bi-moon-fill");
    $(this).css("justify-content", "flex-end");
    setTheme("dark");
    applyTheme(getTheme());
  }
});

// Profile animation on load and touch events
$(document).ready(function () {
  setTimeout(function () {
    $(".profile").animate({
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
      borderBottomLeftRadius: "50px",
      borderBottomRightRadius: "50px",
    }, 500);
  }, 800);

  $(".profile").on("touchstart touchend", function (event) {
    const isTouchStart = event.type === "touchstart";
    $(this).stop().animate({
      borderTopLeftRadius: isTouchStart ? "0px" : "0px",
      borderTopRightRadius: isTouchStart ? "0px" : "0px",
      borderBottomLeftRadius: isTouchStart ? "0px" : "50px",
      borderBottomRightRadius: isTouchStart ? "0px" : "50px",
    }, 500);
  });
});
