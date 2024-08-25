AOS.init({
  once: false,
  duration: 500,
  delay: 100,
});

function openUrl(url) {
  window.open(url, (target = "_blank"));
}

function openMail() {
  window.open("mailto:vs423502@gmail.com");
}

// init theme to light
if (localStorage.getItem("theme") == null) {
  setTheme("light");

}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
}

function getTheme() {
  return localStorage.getItem("theme");
}

// jquery

$(document).ready(function () {
  // start animation when loaded
  setTimeout(function () {
    $(".profile").animate(
      {
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
      },
      500
    );
  }, 800);

  $(".profile").on("touchstart", function () {
    $(this).stop().animate(
      {
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
      },
      500
    );
  });

  $(".profile").on("touchend", function () {
    $(this).stop().animate(
      {
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
      },
      500
    );
  });
});

$(".dark-mode-container").click(function () {
  const darkModeButton = $(this).find("li");

  if (getTheme() === "dark") {
    setTheme("light");
    darkModeButton.toggleClass("bi-sun-fill bi-moon-fill");
    $(this).css({
      justifyContent: "flex-end",
    });
    applyDarkTheme(true);
  } else {
    setTheme("dark");
    darkModeButton.toggleClass("bi-moon-fill bi-sun-fill");
    $(this).css({
      justifyContent: "flex-start",
    });
    applyDarkTheme(false);
  }
});

function applyDarkTheme(status) {
  if (status) {
    $(".main-container").css("background", "#232323");
    $(".profile").css("background", "#1E1E1E");
    $(".bio").css("background", "#323232");
    $(".white-text").css("color", "black");
    $(".black-text").css("color", "white");
  } else {
    $(".main-container").css("background", "#ffffff");
    $(".profile").css("background", "#EBEBFA");
    $(".bio").css("background", "#F7F7FF");
    $(".white-text").css("color", "white");
    $(".black-text").css("color", "black");
  }
}

