// 0 for closed and 1 for open
let menu_status = 0;
let active_tab = ".home-wrapper";

function profile_animation() {
    sleep(5000);

    let pfp_img = document.querySelector(".pfp-img");
    
    pfp_img.style.transform = "scale(1.2)";
    pfp_img.style.transition = "transform 3s ";
}


profile_animation();


function open_slide_menu() {
    let slider = document.querySelector(".slider");
    let menuIcon = document.querySelector(".menu-icon");
    
    if(menu_status == 0)
    {
        slider.style.height = "130px";
        slider.style.width = "130px";
        
        slider.style.transition = "height 0.3s, width 0.3s";
            
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
    let menu_icon = document.querySelector(".menu-icon");
    
    if(menu_status == 1)
    {
        slider.style.height = "70px";
        slider.style.width = "70px";
        
        slider.style.transition = "height 0.3s, width 0.3s";
        
        menu_status = 0;
         menu_icon.classList.replace("bi-arrow-right-circle-fill", "bi-menu-button-wide-fill");    
    }
}



function compose_mail() {
    let name = document.querySelector(".name");
    let message = document.querySelector(".message")
    
    if(name.value == "" || message.value == "") {
        alert("Fill all the details !");
        return;
    }
    
    show_submit_logo();
    
    let sender = ""
    let receiver = "vs423502@gmail.com";
    let msg = message.value;
    
    window.open(`mailto:${receiver}?to=${receiver}&body=${msg}`);
}



function show_submit_logo() {
    let btn = document.querySelector(".submit-button");
    
    btn.innerText = "";
    btn.classList.add("bi-patch-check-fill");
    btn.style.backgroundColor = "lightgreen";
}



function remove_submit_logo() {
    let btn = document.querySelector(".submit-button");
   
   btn.style.backgroundColor = "white";
   btn.classList.remove("bi-patch-check-fill");
    btn.innerText = "compose mail";
}



function open_tabs(tab) {
    // hide the previous tab
    let previous_tab = document.querySelector(active_tab);
    previous_tab.style.display = "none";
    
    let current_tab = document.querySelector(tab);
    current_tab.style.display = "block";
    
    // a flag to know active tab
    active_tab = tab;
}



function open_url(url) {
    if(url == "twitter")
        window.open(`https://twitter.com/vikram_v18`, "_blank");
    else if(url == "facebook")
        window.open("https://facebook.com/profile.php?id=100015739515127", "_blank");
    else if(url == "whatsapp")
        window.open("https://wa.me/8805469136", "_blank");
    else if(url == "instagram")
        window.open("https://instagram.com/vikramisdev", "_blank");
    else 
        window.open(url)
}


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}