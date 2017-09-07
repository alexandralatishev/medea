jQuery(document).ready(function ($) {
    // Functions
    // Toggles the visibility of the modals
    function toggleVisibility() {
        if (!$('#trailer').hasClass('hidden')) {
            $('.opacity').addClass('hidden');
            $('#trailer').addClass('hidden');
        }
    }

    // When you click the synopsis button, removes the class hidden of the modal
    $('#btnSynopsis').click(function () {
        $('.opacity').removeClass('hidden');
        $('#synopsis').removeClass('hidden');
    });

    // When you click the trailer button
    $('#btnTrailer').click(function () {
        $('#trailerYoutube')[0].innerHTML = '<video width="100%" height="100%" controls autoplay><source src="video/trailer.mp4">Your Browser does not support the video tag</video>';
        $('.opacity').removeClass('hidden');
        $('#trailer').removeClass('hidden');
    })

    // When you click the arrow, hides the modal
    $('.btn-close-trailer').click(function () {
        toggleVisibility();
        $('#trailerYoutube')[0].innerHTML = '';
    })

    // When you click the opacity the modal hides
    $('.opacity').click(function () {
        toggleVisibility();
        $('#trailerYoutube')[0].innerHTML = '';
    });
    
    // Jquery of the menu
    var sideNav = $('#sideNav');
    var openNav = $('#openNav');
    var closeNav = $('#closeNav');

    openNav.on('click', function () {
        sideNav.css('width', '100%');
    });

    closeNav.on('click', function () {
        sideNav.css('width', '0');
    });
});