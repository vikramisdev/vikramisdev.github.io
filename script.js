function composeMail() {
    var name = document.getElementById('mail-name').value;
    var message = document.getElementById('mail-message').value;
    var recipientEmail = 'vs423502@gmail.com';

    if (name.trim() === '' || message.trim() === '') {
        alert('Please fill all the details of mail.');
    }
    else {
        var body = 'My name is ' + name + ', \n\n' + message;
        var mailtoUrl = 'mailto:' + recipientEmail + '?subject=' + '&body=' + body;
        window.location.href = mailtoUrl;

        name.value = '';
        message.value = '';
    }
}

// jQuery
var lastTouchY = 0;

$(window).on('touchmove', function(event) {
    var currentTouchY = event.originalEvent.touches[0].clientY;
    
    if (currentTouchY > lastTouchY) {
        // Scrolling down
        $(".navbar-container").stop().animate({
            bottom: "0px"
        }, 200); // Animation duration: 500 milliseconds (half a second)
    } else {
        // Scrolling up
        $(".navbar-container").stop().animate({
            bottom: "-120px"
        }, 200); // Animation duration: 500 milliseconds (half a second)
    }
    
    lastTouchY = currentTouchY;
});


// navigation helper
function scrollToPage(page) {
  document.getElementById(page).scrollIntoView({behavior: 'smooth'});
}

$(".info-dialog-dismis-btn").click(function() {
  $(".info-dialog").hide();
});

var skillSet = {
  python : "I know python very well",
  java: "I know java",
  html: "I know html",
  css: "I know css",
  cprogramming: "I know c programming",
  javascript: "i know js",
  docker: "i know docker",
  git: "i know git and github",
  linux: "i know linux ",
  android: "i know android",
  kotlin: "i know kotlin."
}

var obj = $(".about-container-skills-1-content").children();

for (let x of obj) {
  x.addEventListener("click", function(){
    $(".info-dialog-title").text(x.alt.toUpperCase());
    $(".info-dialog-content").text(skillSet[x.alt]);
    $(".info-dialog").show(200);
  });
}
