// 0 for closed and 1 for open
let menu_status = 0;

function read_pos() {
    let pfp = document.querySelector(".actualImg");
    let bounding = pfp.getBoundingClientRect();
}


function open_slide_menu() {
    let slider = document.querySelector(".slider");
    let menuIcon = document.querySelector(".menu-icon");
    
    if(menu_status == 0)
    {
        slider.style.width = "300px";
        slider.style.transition = "0.5s width";
        menu_status = 1;
        menuIcon.classList.replace("bi-menu-button-wide-fill", "bi-arrow-right-circle-fill");
    }
    else
    {
        close_slide_menu();
    }
}


function close_slide_menu() {
    let slider = document.querySelector(".slider");
    let menuIcon = document.querySelector(".menu-icon");
    
    if(menu_status == 1)
    {
        slider.style.width = "0px";
        slider.style.transition = "0.5s width";
        menu_status = 0; menuIcon.classList.replace("bi-arrow-right-circle-fill", "bi-menu-button-wide-fill");
    }
    
    
}


function open_menu(tab) {
    if(tab == "index")
        window.open(tab + ".html");
    else
        alert("The tab is not ready yet !")
}

