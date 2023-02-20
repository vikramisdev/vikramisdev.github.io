function cstoft() {
  let c = document.getElementById("celcius");
  let r = document.getElementById("result");
  let b = document.getElementById("rbtn");
  let old_value = c.value;

  if(c.value == "" || !isNumeric(c.value))
    return c.value = "";    
  
  r.innerHTML = old_value + " °C = " + String(c.value*9/5+32) + " °F";
  r.style.padding = "10px";
  r.style.backgroundColor = "white";
  r.style.marginTop = "20px";
}

function expand_topbar() {
  let topbar_bottom = document.getElementById("topbar_bottom");
  let topbar = document.getElementById("topbar");
  let topbarbg = document.getElementById("topbarbg");
  
  let h = topbar_bottom.style.height;
  
  if(h=="" || h=="0px")
  {
    
    topbar_bottom.style.height = "300px";
    topbar.style.boxShadow = "0px 0px 40px 5px black";
    topbarbg.style.backgroundColor = "gray";
  }
  else
  {
    topbar_bottom.style.height = "0px";
    topbar.style.boxShadow = "none";
    topbarbg.style.backgroundColor = "black";
  }
}

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseFloat(str)) 
}

