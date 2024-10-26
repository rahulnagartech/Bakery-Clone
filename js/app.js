const menubar = document.querySelector("nav ul")
const bars = document.querySelector("#bars")
const bgoverlay = document.querySelector(".bg_overlay_container")

bars.addEventListener(
    "click",
    function () {
    menubar.classList.add("open")
    bgoverlay.classList.add("open-bg_overlay_container")
    bars.classList.add("fa-xmark")
}
)

bgoverlay.addEventListener(
    "click",
    function(){
        menubar.classList.remove("open")
        bgoverlay.classList.remove("open-bg_overlay_container")
        bars.classList.remove("fa-xmark")
    }
)

document.addEventListener(
    "scroll",
    function (){
        if(window.scrollY>45){
            document.body.classList.add("sticky_fixed")
        }
        else{
            document.body.classList.remove ("sticky_fixed")
        }
    }
)



var items = document.querySelectorAll("#tab-parent li");
var boxes = document.querySelectorAll(".menu_item");


for ( var item of items) {
  item.addEventListener(
    "click", 
    function (event) {

      var currentActive = document.querySelector(".active");
      currentActive.classList.remove("active");

      var currentOpen = document.querySelector(".open");
      currentOpen.classList.remove("open");

      boxes[event.target.dataset.index].classList.add("open")
        
    event.target.classList.add("active");
  }
  );
}