// swipe gestures

let touchstartX = 0

let touchendX = 0

let count = 6; // home

let btn_visibility = false;

let card = "card";

let dot = "dot";

    

function change_pages() {

  if(touchendX < touchstartX) // left

  {

      if(count > 5)

          return;

      

      let page = document.getElementById(card + String(count));

      let dots = document.getElementById(dot + String(count));

      let dots_prev = document.getElementById(dot + String(count+1));

      let card_p1 = document.getElementById("card5p1");

      

      if(count == 5)

      {

          card_p1.style.marginTop = "40px";

          card_p1.style.transition = "margin-top 1s";

      }

      

      page.style.left = "-100vw";

      page.style.transition = "left 0.5s";

      

      dots.style.backgroundColor = "black";

      dots_prev.style.backgroundColor = "white";

      

      show_dots();

      

      count += 1;

  }

      

  if(touchendX > touchstartX) // right

  {

      count -= 1;

      if(count < 1)

      {

          count = 1;

          return;

      }

      let page = document.getElementById(card + String(count));

      let dots = document.getElementById(dot + String(count));

      

      let dots_prev = document.getElementById(dot + String(count +1));

      let card_p1 = document.getElementById("card5p1");

      

      if(count == 5)

      {

          card_p1.style.marginTop = "0px";

          card_p1.style.transition = "margin-top 1s";

      }

      

      

      page.style.left = "0vw";

      page.style.transition = "left 0.5s";

      

      dots.style.backgroundColor = "white";

      dots_prev.style.backgroundColor = "black";

      

      show_dots();

  }

}

// catch swipe events

document.addEventListener('touchstart', e => {

  touchstartX = e.changedTouches[0].screenX

})

document.addEventListener('touchend', e => {

  touchendX = e.changedTouches[0].screenX

  change_pages()

})

// show btn

function switch_to_home() {

    // toggle btn visibility

    

    for(let i=5; i>0; i--)

    {

        let page = document.getElementById(card + String(i));

        let dots = document.getElementById(dot + String(i));

        

        page.style.left = "-100vw";

        page.style.transition = "left 0.5s";

        

        if(i==5)

        {

            let dots = document.getElementById(dot + String(i + 1));

            dots.style.backgroundColor = "white";

        }

        else

            dots.style.backgroundColor = "black";

    }

    count = 6;

}

// change image outline style

function change_outline_style() {

    let img = document.getElementById("card5Img1");

    

    let style = img.style.outlineStyle

    

    if(style == "" || style == "outset")

        img.style.outlineStyle = "inset";

    else 

        img.style.outlineStyle = "outset";

}

// hide dots

function hide_dots() {

    let dots = document.getElementById("dots");

    

    dots.style.display = "none";

}

// show dots

function show_dots() {

    let dots = document.getElementById("dots")

    

    dots.style.display = "initial";

    

    setTimeout(hide_dots, 2000);

}

