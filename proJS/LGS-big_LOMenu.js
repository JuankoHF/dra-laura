window.addEventListener('scroll', function() {
  
    let screenHeight = window.innerHeight;

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
    
   //SECTION ABOUT
    let animeScroll = document.getElementById('animeScroll');
    let positionContentFlex = animeScroll.getBoundingClientRect().top;
    let aboutActive = document.querySelector(".about");
    let bgBlackActive = document.querySelector(".about_bg_black")
     
    if(positionContentFlex < screenHeight / 2) {
        aboutActive.classList.add("animate_color_backgroud");
        bgBlackActive.classList.add("anime_about_bg_black")
    }

    if(positionContentFlex > screenHeight) {
        aboutActive.classList.remove("animate_color_backgroud");
        bgBlackActive.classList.remove("anime_about_bg_black")

    }

    //IMAGE SECTION PERSONAL DATA 
    let animeImage = document.getElementById('animeImage');
    let positionAnimeImage = animeImage.getBoundingClientRect().top;
    let careWhiteActive = document.querySelector(".care_white");

    
    if(positionAnimeImage < screenHeight) {
        careWhiteActive.classList.add("move_care_white");
    }

    if(positionAnimeImage > screenHeight) {
        careWhiteActive.classList.remove("move_care_white");
    }

    //IMAGE SECTION about 
    //  let animePoligon = document.getElementById('animePoligon');
    //  let positionAnimePoligon = animePoligon.getBoundingClientRect().top;
    //  let poligonWhiteActive = document.querySelector(".poligon_wite");
 
     
    //  if(positionAnimePoligon < screenHeight) {
    //      poligonWhiteActive.classList.add("move_poligon_wite");
    //  }
 
    //  if(positionAnimeImage > screenHeight) {
    //      poligonWhiteActive.classList.remove("move_poligon_wite");
    //  }

    //TRANSCICION ENTRE SECCIONES

    // let section2 = document.getElementById('section2');
    // let positionSection2 = section2.getBoundingClientRect().top;
    // let pictureUnderActive = document.querySelector(".profile_picture-under")
    // let personalDataActive = document.querySelector(".personal_data")



    console.log(screenHeight, "tamaño pantalla");
    console.log(positionAnimeImage, "posicion de imagen")
    // console.log(positionMain);

    // if(positionSection2 < screenHeight / 2) {
    //     pictureUnderActive.classList.add('fixed');
    //     personalDataActive.classList.add('top_absolute1');
    // }

    

    


   
})

