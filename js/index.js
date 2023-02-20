function cstoft() {
  let c = document.getElementById("celcius");
  let r = document.getElementById("result");
  let b = document.getElementById("rbtn");
  let old_value = c.value;

  if(c.value == "" || !isNumeric(c.value))
    return c.value = "";    
  
  r.innerHTML = old_value + " °C = " + c.value*9/5+32 + " °F";
  r.style.padding = "10px";
  r.style.backgroundColor = "white";
  r.style.marginTop = "20px";
  
  
}

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseFloat(str)) 
}
