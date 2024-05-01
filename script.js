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
        }, 500); // Animation duration: 500 milliseconds (half a second)
    } else {
        // Scrolling up
        $(".navbar-container").stop().animate({
            bottom: "-120px"
        }, 500); // Animation duration: 500 milliseconds (half a second)
    }
    
    lastTouchY = currentTouchY;
});

// navigation helper
function scrollToPage(page) {
document.getElementById(page).scrollIntoView({behavior: 'smooth'});
}