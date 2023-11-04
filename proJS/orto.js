window.addEventListener('scroll', function() {
  
    //MENÚ
    let animeBackGround = document.getElementById('scrollable');
    let positionMain = animeBackGround.getBoundingClientRect().top;
    let headerActive = document.querySelector(".header_menu");
    
    if(positionMain < -4) {
        headerActive.classList.add("bg_black_scrollable");
    }

    if(positionMain == 0) {
        headerActive.classList.remove("bg_black_scrollable");

    }
})
