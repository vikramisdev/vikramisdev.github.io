AOS.init({
  once: false,
  duration: 500,
  delay: 100
});

function openUrl(url) {
  window.open(url, target="_blank");
}

function openMail() {
  window.open("mailto:vs423502@gmail.com");
}

// jquery

$(document).ready(function(){
    // start animation when loaded
    setTimeout(function(){
          $(".profile").animate({
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "50px"
        }, 500);
    }, 800);
    
    $(".profile").on("touchstart", function(){
        $(this).stop().animate({
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px"
        }, 500);
    });

    $(".profile").on("touchend", function(){
        $(this).stop().animate({
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "50px"
        }, 500);
    });
});

