window.addEventListener('scroll', function() {
  
    let animeBackGround = document.getElementById('scrollable');
    let positionMain = animeBackGround.getBoundingClientRect().top;
    let headerActive = document.querySelector(".header_menu");
   
    let screenHeight = window.innerHeight;
   
    // let animeScroll = document.getElementById('animeScroll');
    // let positionContentFlex = animeScroll.getBoundingClientRect().top;
    // let flexActive = document.querySelector(".content_flex_for_bigScreem")


    // console.log(screenHeight, "tamaño pantalla");
    // console.log(positionContentFlex, "posicion de flex content")
    // console.log(positionMain);

    if(positionMain < -4) {
        headerActive.classList.add("bg_black_scrollable");
    }

    if(positionMain == 0) {
        headerActive.classList.remove("bg_black_scrollable");

    }

    // if(positionContentFlex == screenHeight) {
    //     flexActive.classList.add("move_to");
        
    // }
})