function toggleStyleSheet(){
    let currentcss = document.getElementById("mainStyleSheet");
   if(currentcss.getAttribute('href')==='style.css'){
    currentcss.setAttribute('href','style2.css');
    localStorage.setItem('savecss','0');
   }
   else if(currentcss.getAttribute('href')==='style2.css'){
    currentcss.setAttribute('href','style.css');
    localStorage.setItem('savecss','1');
   }
}


window.addEventListener("DOMContentLoaded", () => {
  // Apply saved theme on load (fixes = vs === bug)
  let saved = localStorage.getItem("savecss");
  let link = document.getElementById("mainStyleSheet");
  if (saved === "0") {
    link.setAttribute("href", "style2.css");
  } 
  else{
      link.setAttribute("href", "style.css");
      localStorage.setItem("savecss", "1");
    }

  document.querySelectorAll(".style1_header h1").forEach((titleEl) => {
    titleEl.style.cursor = "pointer";
    titleEl.title = "Click to toggle style";
    titleEl.addEventListener("click", toggleStyleSheet);
  });
});