
//carousel changes pics//
$('#myCarousel').each(function() {
    $(this).carousel({
        interval: false
    });
});

//resizes navbar on scroll//

           // When the toggle areas in your navbar are clicked, toggle them
           $("#search-button, #search-icon").click(function(e){
               e.preventDefault();
               $("#search-button, #search-form").toggle();
           });
        })

        $(function () {
            $('#fileupload').fileupload({
                dataType: 'json',
                done: function (e, data) {
                    $.each(data.result.files, function (index, file) {
                        $('<p/>').text(file.name).appendTo(document.body);
                    });
                }
            });
        });
