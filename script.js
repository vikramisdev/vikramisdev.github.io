// animate header

function animate_header() {
    let firstblock = document.getElementById("header-top");
    
    let secondblock = document.getElementById("header-bottom");
    
    firstblock.style.borderRadius = "0px 0px 100% 0px";
    firstblock.style.transition = "1s border-radius";
    
    secondblock.style.borderRadius = "100% 0px 0px 0px";
    secondblock.style.transition = "1s border-radius";
}

// open url 

function open_url(url) {
    window.open(url)
}
