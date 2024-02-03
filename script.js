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
