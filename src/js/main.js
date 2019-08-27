document.addEventListener("DOMContentLoaded", function(){
    var openButton = document.querySelector(".menu-toggle");
    var navBar = document.getElementById('main-menu');

    openButton.onclick = function(){ navBar.classList.add('expanded')};

    var closeButton = document.querySelector(".menu-close");

    closeButton.onclick = function() {navBar.classList.remove('expanded')};
    navBar.onblur = function() {navBar.classList.remove('expanded')};

    document.onclick = function(event){
        if (event.target !== openButton && navBar.classList.contains('expanded')){
          navBar.classList.remove('expanded');
        }
    };
      
});
  