
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
sss
        // toggle searchbar//
           $(function(){

              $("#search-button, #search-icon").click(function(e){
                  e.preventDefault();
                  $("#search-button, #search-form").toggle();
              });
           })
         }
//modal
// Get the modal
var modal = document.getElementById('myModal1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg1');
var modalImg = $("#img01");
var captionText = document.getElementById("caption1");
$('.myImg1').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
