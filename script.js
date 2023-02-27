// navbar animation 

function toggle_navbar() {
    let navbar = document.getElementById("navbar");
    let all = document.getElementById("all");
    let sidemenu = document.getElementById("sideMenu");
    let sidemenusize;
    
    nbca = navbar.style.transform;
    let swidth = window.innerWidth;
    let sheight = window.innerHeight;
    
    // resize side menu
    if(swidth < sheight)
        sidemenusize = "25%";
    else if(swidth > sheight)
        sidemenusize = "30%";
    else
        sidemenusize = "50%";


    // toggle rotation of bar container
    if(nbca == "" || nbca == "rotate(0deg)")
    {
        // rotate navbar from 0⁰ to 90⁰
        navbar.style.transform = "rotate(90deg)";
        // animate the rotation
        navbar.style.transition = "1s transform";
        
        // show the side menu
        sidemenu.style.paddingLeft = sidemenusize;
        sidemenu.style.transition = "1s padding-left";
        
    }
    else
    {
        // rotate navbar from 90⁰ to 0⁰
        navbar.style.transform = "rotate(0deg)";
        // animate the rotation
        navbar.style.transition = "1s transform";
        
        // hide side menu
        sidemenu.style.paddingLeft = "0px";
        sidemenu.style.transition = "1s padding-left";
    }
        
}


// open urls
function open_url(url) {
    window.open(url)
}
