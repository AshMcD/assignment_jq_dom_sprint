
$(function() {
    $("h1").html("Boring Ass JQuery");

    var traversels = new Array("Document","Elelment", "Head", "Body","Title" );

    $(".info-box").append("<ol id='newList'></ol>");
      for (olnum = 0; olnum < traversels.length; olnum ++) {
        $("#newList").append("<li>" + traversels[olnum] + "</li>");
    }
      $("ol").css("text-align", "center");



    });
