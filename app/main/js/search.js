$(document).ready(function(){
    $("#srchandler").on("click", function() {
      // var value = $(this).val().toLowerCase();
      var value =  $("#inputpublic").val().toLowerCase();
      $(".col .card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
  });