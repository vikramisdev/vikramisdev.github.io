// animate header

function animate_header() {
    let firstblock = document.getElementById("header-top");
    
    let secondblock = document.getElementById("header-bottom");
    
    firstblock.style.borderRadius = "0px 0px 400px 0px";
    firstblock.style.transition = "1s border-radius";
    
    secondblock.style.borderRadius = "400px 0px 0px 0px";
    secondblock.style.transition = "1s border-radius";
}

