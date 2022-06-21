$(function () {

    // DEBUT ENVIRONNEMENT JQUERY 

    // Effet Menu Mobile //    
    $("#menu-mobile ul").hide();
    $(".btn").click(function () {

        $("#menu-mobile ul").slideToggle(1000, "linear");
    });


    //Défilement Animé Fleche Ancre //

    $('.js-scrollTo').on('click', function () { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible

        var speed = 750; // Durée de l'animation, vitesse d'éxécution (en ms) 
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed); // Go
        return false;
    });

    // window : signifie le navigateur, la fenêtre d'affichage 
    $(window).scroll(function () { // scroll : vitesse d'éxécution
        var scroll = $(window).scrollTop(); // .scrollTop: cacule la distance du haut de page et bas de page
        if (scroll >= 200) {
            $(".fleche").addClass("affiche");
        } else {
            $(".fleche").removeClass("affiche");
        }
    });



    //// ATTACHER MENU HAUT DE PAGE ////


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $(".menusite").addClass("fixe");
        } else {
            $(".menusite").removeClass("fixe");
        }
    });


    // FIN ENVIRONNEMENT JQUERY 

});
