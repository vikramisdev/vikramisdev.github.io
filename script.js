// just redirect to the mail app with the input
// fields from the contact me form
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

// this controls the navigation hide & show animation & functionalities 
var lastTouchY = 0;

$(window).on('touchmove', function(event) {
    var currentTouchY = event.originalEvent.touches[0].clientY;
    
    if (currentTouchY > lastTouchY) {
        // Scrolling down
        $(".navbar").stop().animate({
            bottom: "0px"
        }, 200); // Animation: 500 millisecond 
    } else {
        // Scrolling up
        $(".navbar").stop().animate({
            bottom: "-120px"
        }, 200); // Animation: 500 millisecond
    }
    
    lastTouchY = currentTouchY;
});


// navigation helper
function scrollToPage(page) {
  document.getElementById(page).scrollIntoView({behavior: 'smooth'});
}

// this closes the info dialog box
$(".info-dialog-dismis-btn").click(function() {
  $(".info-dialog").hide();
});

// languages i know and its description
var pSkillSet = {
  python : "Python was the first language that i learnt, so i know it very well.",
  java: "I learned java in my college, don't have a high level experience in it.",
  html: "There is too less to learn, i know it very well.",
  css: "CSS looks easy but when you go deeper you understand its not just about the styles.",
  cprogramming: "C language was hard for me at first. But later it become more interesting for me !",
  javascript: "JavaScript is like a combination of java & python that's why it was easy to learn.",
  docker: "well i not a professional in containerising applications in docker, i just know what docker does.",
  git: "GitHub is very well known platform. I know and understand it since 2019.",
  linux: "Linux attracted me because of its open source and very less (almost no) restrictions.",
  android: "I am just a rookie in android, learning all the basics from starting !",
  kotlin: "As i learned android with java it felt like old and time consuming, therefore started learning kotlin !"
}

var sSkillSet = {
  english: "I can speak english very well.",
  hindi: "Hindi is my mother tongue language hence i am fluent in it.",
  marathi: "As i live in Maharashtra i know marathi very well, i am fluent in Marathi."
}

var plang = $(".about-container-skills-1-content").children();
var slang = $(".about-container-skills-2-content").children();

for (let x of plang) {
  x.addEventListener("click", function(){
    $(".info-dialog-title").text(x.alt.toUpperCase());
    $(".info-dialog-content").text(pSkillSet[x.alt.toLowerCase()]);
    $(".info-dialog").show(200);
  });
}

for (let y of slang) {
  y.addEventListener("click", function(){
    $(".info-dialog-title").text(y.alt.toUpperCase());
    $(".info-dialog-content").text(sSkillSet[y.alt.toLowerCase()]);
    $(".info-dialog").show(200);
  });
}

function openUrl(url) {
  window.open(url);
}

$(".project-1 button").click(function() {
  openUrl("https://vikram.is-a.dev/dynamic-homepage");
});

$(".project-2 button").click(function() {
    openUrl("https://vikram.is-a.dev/dynamic-lyrics");
});

$(".project-1 button").click(function() {
    openUrl("https://vikram.is-a.dev/dynamic-homepage")
 });

$(document).ready(function() {
  $(".navbar").animate({
    bottom: "0px"
  }, 500);
  
  $(".profile-container").animate({
    opacity: "1",
    marginTop: "80px",
    boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.4);"
  }, 500);
});
