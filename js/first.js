
//carousel changes pics//
$('#myCarousel').each(function() {
    $(this).carousel({
        interval: false
    });
});

//picture upload button///
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

        // toggle searchbar//
           $(function(){

              $("#search-button, #search-icon").click(function(e){
                  e.preventDefault();
                  $("#search-button, #search-form").toggle();
              });
           })
