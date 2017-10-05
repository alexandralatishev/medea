var crewSingle = (function ($) {

    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        var crewMember = $('#crew');
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
                    var crewInfo = '';
                    
                    // Resets
                    if($('#mobileBio')) {
                        $('#mobileBio').remove();
                    };            
                    if($('#crewBio').html() == undefined) {
                        $('#crewInfo').append('<p id="crewBio"></p>')  
                        crewInfo =  $('#crewInfo');
                    }
                    crewMember.html('');

                    var crewObj = data.crew.es;
                    var childArray = [];
                    $('#crewBio').html(crewObj[0].bio);
                    crewObj.forEach(function(element, index) {
                        var h3 = $('<h3></h3>');
                        h3.html(element.name);
                        h3.on('click', function() {              
                            childArray = crewMember.children();
                            $('#crewBio').html(element.bio);
                            
                            // Toggle the selected
                            childArray.removeClass('text-selected');                                                
                            $(this).addClass('text-selected');
                        })
                        crewMember.append(h3);
                    });
                    childArray = crewMember.children();
                    childArray.eq(0).addClass('text-selected');
                },
            })
            .register("screen and (max-width:1199px)", {
                match: function() {
                    // Resets
                    if( $('#crewBio')) {
                        $('#crewBio').remove();
                    };
                    crewMember.html('');

                    var crewObj = data.crew.es;
                    var childArray = [];
                    crewObj.forEach(function(element, index) {
                        var h3 = $('<h3></h3>');
                        h3.html(element.name);
                        h3.on('click', function() {
                            childArray = crewMember.children();
                            if( $('#mobileBio')) {
                                $('#mobileBio').remove();
                            };
                            $(this).after('<p class="dropdown-text" id="mobileBio"></p>');
                            $('#mobileBio').html(element.bio);

                            // Toggle the selected
                            childArray.removeClass('text-selected');                                                
                            $(this).addClass('text-selected');
                        })
                        crewMember.append(h3);
                    });
                }
            });
        }

        // Triggered if the JSON fails
        function jsonError() {
            crewBio.html('Lo sentimos pero la página no cargó correctamente, inténtelo de nuevo más tarde');    
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

crewSingle.getInstance();
