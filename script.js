// this function just checks if the content is loaded or not and checks the device screen size, based on that it sets the iframe source path of that folder

document.addEventListener("DOMContentLoaded", function() {
    function loadLayout() {
        const iframe_container = document.getElementById('iframe-container');
        let layoutPath;

        if (window.innerWidth <= 768) { // Assuming 768px is the min phone screen size 
            layoutPath = 'phone/index.html';
        } else {
            layoutPath = 'desktop/index.html';
        }

        iframe_container.src = layoutPath;
    }

    // Load layout initially
    loadLayout();

    // Reload layout when screen size changes
    window.addEventListener('reload', function() {
      loadLayout();
    });
});
