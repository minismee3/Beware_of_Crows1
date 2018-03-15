
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
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
        $("panel").hover(function(){
            $(".stuff").toggle();
        });
        $('#item-wrapper a').mouseenter(function () {
            console.log($(this).data('panel'));
            if ($(this).data('panel')) {
                $('.panel').hide();
                $('#' + $(this).data('panel')).show();
            }
            });
        $('#item-wrapper').mouseleave(function () {
            $('.panel').hide();
        });
