// //--------------------------------------------------------
// // -Project: Front-End Developppement Ajax/Jquery/.Json  -
// // -@Date: 23 janvier 2020                               -
// // -@Authors: Youness & Dale                             -
// // -------------------------------------------------------

// //Mon Bloc de Code Super Répétitif  pas besoin de beaucoup d'expilication click = afficher data .json

$(document).ready(function() {
  $("#labrune").on("click", function() {
    $.ajax({
      type: "GET",
      url: "./javascript/girls.json",
      dataType: "json",
      success: function(data) {
        console.log(data.girls[0]);
        $("#main-menu > ul").show(); //defaut est hidden
        $("img")
          .attr("src", data.girls[0].image) // change le source de mon image en le recuperant par .json
          .show();
        $(".idGirl").html(data.girls[0].id); // recupere le data de mon fichier .json et le montre dans un div avec classe .idgirl
        $(".idGirl").css({ opacity: 0.5 });
        $(".descGirl").html(data.girls[0].description);
        $(".girlChar").html(data.girls[0].charactere);
        $(".details").html(data.girls[0].details);
        $(".info").html(data.girls[0].info);
        clearInterval(loop); // Merci google, ici qaund le boutton est cliquer j'arrete mon slider et montre une image et des infos recuperé dans .json
        return false;
      }
    });
  });

  $("#lablonde").on("click", function() {
    $.ajax({
      type: "GET",
      url: "./javascript/girls.json",
      dataType: "json",
      success: function(data) {
        console.log(data.girls[1]);
        $("#main-menu > ul").show();
        $("img")
          .attr("src", data.girls[1].image)
          .show();
        $(".idGirl").html(data.girls[1].id);
        $(".idGirl").css({ opacity: 0.5 });
        $(".descGirl").html(data.girls[1].description);
        $(".girlChar").html(data.girls[1].charactere);
        $(".details").html(data.girls[1].details);
        $(".info").html(data.girls[1].info);
        clearInterval(loop);
        return false;
      }
    });
  });

  $("#laRousse").on("click", function() {
    $.ajax({
      type: "GET",
      url: "./javascript/girls.json",
      dataType: "json",
      success: function(data) {
        console.log(data.girls[2]);
        $("#main-menu > ul").show();
        $("img")
          .attr("src", data.girls[2].image)
          .show();
        $(".idGirl").html(data.girls[2].id);
        $(".idGirl").css({ opacity: 0.5 });
        $(".descGirl").html(data.girls[2].description);
        $(".girlChar").html(data.girls[2].charactere);
        $(".details").html(data.girls[2].details);
        $(".info").html(data.girls[2].info);
        clearInterval(loop);
        return false;
      }
    });
  });

  $("#laRolls").on("click", function() {
    $.ajax({
      type: "GET",
      url: "./javascript/girls.json",
      dataType: "json",
      success: function(data) {
        console.log(data.girls[3]);
        $("#main-menu > ul").show();
        $("img")
          .attr("src", data.girls[3].image)
          .show();
        $(".idGirl").html(data.girls[3].id);
        $(".idGirl").css({ opacity: 0.5 });
        $(".descGirl").html(data.girls[3].description);
        $(".girlChar").html(data.girls[3].charactere);
        $(".details").html(data.girls[3].details);
        $(".info").html(data.girls[3].info);
        clearInterval(loop);
        return false;
      }
    });
  });

  $("#Red").on("click", function() {
    $.ajax({
      type: "GET",
      url: "./javascript/girls.json",
      dataType: "json",
      success: function(data) {
        console.log(data.girls[4]);
        $("#main-menu > ul").show();
        $("img")
          .attr("src", data.girls[4].image)
          .show();
        $(".idGirl").html(data.girls[4].id);
        $(".idGirl").css({ opacity: 0.5 });
        $(".descGirl").html(data.girls[4].description);
        $(".girlChar").html(data.girls[4].charactere);
        $(".details").html(data.girls[4].details);
        $(".info").html(data.girls[4].info);
        clearInterval(loop);
        return false;
      }
    });
  });
});
