// JavaScript

// Function to compose email
var navbarHidden = false;

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
        // Open mail client with composed email
        window.open(mailtoUrl);
        // Clear input fields
        document.getElementById('mail-name').value = '';
        document.getElementById('mail-message').value = '';
    }
}

// navigation helper
function scrollToPage(page) {
  document.getElementById(page).scrollIntoView({behavior: 'smooth'});
}

function openUrl(url) {
  window.open(url);
}

// jQuery

// Function to handle touch event for navbar animation
var lastTouchY = 0;
$(window).on('touchmove', function(event) {
    var currentTouchY = event.originalEvent.touches[0].clientY;
    
    if (currentTouchY > lastTouchY) {
        // Scrolling down, show navbar
        animateNavbarShow("0px", 1000);
    } else {
        // Scrolling up, hide navbar
        animateNavbarHide();
    }
    
    lastTouchY = currentTouchY;
});


// Function to animate navbar show
function animateNavbarShow(value = "0px", duration=2000) {
    anime({
        targets: ".navbar",
        bottom: value,
        easing: "easeOutExpo",
        duration: duration
    });
}

// Function to animate navbar hide
function animateNavbarHide() {
    animateNavbarShow("-120px", 2000);
}

// Function to animate profile tab down when page loads completely
function animateProfileTabDown(duration=2000) {
    anime({
        targets: ".profile-container",
        opacity: "1.0",
        marginTop: "80px",
        boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.4)",
        duration: duration,
    });
}

// languages i know and its description
var pSkillSet = {
  python : "Python was the first language that i learnt, so i know it very well.",
  java: "I learned java in my college, don't have a high level experience in it but i know the basics.",
  html: "Html is simple yet so much in it, i have completed like everything in it.",
  css: "CSS looks easy but when you go deeper you understand its not just about the styles, I know css 60%",
  cprogramming: "At first C language was the hardest for me. But later it become more interesting for me !",
  javascript: "JavaScript is like a combination of java & python that's why i like it to learn more & more.",
  docker: "well i am not a professional in containerising applications in docker, but i just know what docker does.",
  git: "GitHub is very well known platform. I know and understand it since 2019, But still don't have a professional level experience in it.",
  linux: "Linux attracted me because of its open source and very less (almost no) restrictions in its environment.",
  android: "I am just a rookie in android, learning all the basics from starting !",
  kotlin: "As i learned android with java it felt like old and time consuming, therefore started learning kotlin !",
  jetpack_compose: "Just started learning this android based new way of programming in kotlin, which is easy, short & efficient."
}

var sSkillSet = {
  english: "English was the secondary language i learnt, I can speak and understand English. Though i am not very fluent in speaking English !",
  hindi: "Hindi is my native language. That's why i can speak and understand it very well.",
  marathi: "As i lived in Maharashtra (state in India) i can speak marathi fluently, its not very accurate tho :/"
}

var plang = $(".about-container-skills-1-content").children();
var slang = $(".about-container-skills-2-content").children();

function setAndShowDialog(x, skillSet, duration=200) {
  $(".info-dialog-title").text(x.alt.toUpperCase());
  $(".info-dialog-content").text(skillSet[x.alt.toLowerCase()]);
  anime({
    targets: ".info-dialog",
    visibility: "visible",
    duration: duration,
  });
  //$(".info-dialog").show(duration);
}

for (let x of plang) {
  x.addEventListener("click", function(){
    setAndShowDialog(x, pSkillSet);
  });
}

for (let y of slang) {
  y.addEventListener("click", function(){
    setAndShowDialog(y, pSkillSet);
  });
}

// Event listeners for closing info dialog box
$(".info-dialog-dismis-btn").click(function() {
    $(".info-dialog").hide();
});

// Loop through language skill elements and attach event listeners
$(".about-container-skills-1-content").children().each(function() {
    $(this).click(function() {
        var lang = $(this).attr("alt").toLowerCase();
        $(".info-dialog-title").text(lang.toUpperCase());
        $(".info-dialog-content").text(pSkillSet[lang]);
        $(".info-dialog").show(200);
    });
});

// Loop through spoken language elements and attach event listeners
$(".about-container-skills-2-content").children().each(function() {
    $(this).click(function() {
        var lang = $(this).attr("alt").toLowerCase();
        $(".info-dialog-title").text(lang.toUpperCase());
        $(".info-dialog-content").text(sSkillSet[lang]);
        $(".info-dialog").show(200);
    });
});

$(".project-1 button").click(function() {
  openUrl("https://vikram.is-a.dev/dynamic-homepage");
});

$(".project-2 button").click(function() {
    openUrl("https://vikram.is-a.dev/dynamic-lyrics");
});

$(".project-1 button").click(function() {
    openUrl("https://vikram.is-a.dev/dynamic-homepage")
 });

// Run animations when page is fully loaded
$(document).ready(function() {
    $("body").css({
      visibility: "visible"
    });
    animateProfileTabDown();
    animateNavbarShow();
});

socialUrl = {
  "facebook": "https://www.facebook.com/profile.php?id=100015739515127",
  "instagram": "https://instagram.com/vikramisdev",
  "twitter": "https://x.com/vikram_v18",
  "linkedin": "https://www.linkedin.com/in/vikramisdev"
}

$(".compose-button li").click(function() {
  openUrl(socialUrl[$(this).attr("name")]);
});