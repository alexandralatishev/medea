var castSingle = (function ($) {

    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        var castMember = $('#cast');
        var jqxhr = $.getJSON( "../js/json/cast_crew.json", function(data) {
            jsonSuccess(data);
        })
        .fail(function() {
            jsonError();
        })

        // Triggered if the JSON succeed
        function jsonSuccess(data) {
            enquire
            .register("screen and (min-width:1200px)", {
                match : function() {
                    var castInfo = '';
                    
                    // Resets
                    if($('#mobileBio')) {
                        $('#mobileBio').remove();
                    };            
                    if($('#castBio').html() == undefined) {
                        $('#castInfo').append('<p id="castBio"></p>')  
                        castInfo =  $('#castInfo');
                    }
                    castMember.html('');

                    var castObj = data.cast.en;
                    var childArray = [];
                    $('#castBio').html(castObj[0].bio);
                    castObj.forEach(function(element, index) {
                        var h3 = $('<h3></h3>');
                        h3.html(element.name);
                        h3.on('click', function() {              
                            childArray = castMember.children();
                            $('#castBio').html(element.bio);
                            
                            // Toggle the selected
                            childArray.removeClass('text-selected');                                                
                            $(this).addClass('text-selected');
                        })
                        castMember.append(h3);
                    });
                    childArray = castMember.children();
                    childArray.eq(0).addClass('text-selected');
                },
            })
            .register("screen and (max-width:1199px)", {
                match: function() {
                    // Resets
                    if( $('#castBio')) {
                        $('#castBio').remove();
                    };
                    castMember.html('');

                    var castObj = data.cast.en;
                    var childArray = [];
                    castObj.forEach(function(element, index) {
                        var h3 = $('<h3></h3>');
                        h3.html(element.name);
                        h3.on('click', function() {
                            childArray = castMember.children();
                            if( $('#mobileBio')) {
                                $('#mobileBio').remove();
                            };
                            $(this).after('<p class="dropdown-text" id="mobileBio"></p>');
                            $('#mobileBio').html(element.bio);

                            // Toggle the selected
                            childArray.removeClass('text-selected');                                                
                            $(this).addClass('text-selected');
                        })
                        castMember.append(h3);
                    });
                }
            });
        }

        // Triggered if the JSON fails
        function jsonError() {
            castBio.html("Sorry, the page didn't load properly, try again later");    
        }
    };

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function() {
            if( !instance ) {
                instance = init();
            }
            return instance;
        }
    };
})(jQuery);

castSingle.getInstance();
