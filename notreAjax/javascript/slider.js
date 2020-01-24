//--------------------------------------------------------
// -Project: Front-End Developppement Ajax/Jquery/.Json  -
// -@Date: 23 janvier 2020                               -
// -@Authors: Youness & Dale                             -
// -------------------------------------------------------



$(document).ready(function() {
  let defaultImg = 1;  
  let sliderNext = 2;
  let sliderPrev = null;
  let count = $("img").length;

  function startSlider() {
    loop = setInterval(function() {
      $("#slider .slides").animate(
        { "margin-left": "-=720px" },
        1000,
        function() {
          defaultImg++;
          if (defaultImg == count) {
            defaultImg = 1;
            $(".slides").css("margin-left", 0);
          }
        }
      );
    }, 3000);
  }

  function stopSlider() {
    clearInterval(loop);
  }

  $("#next").click(function() {
    $("#slider .slides").animate(
      { "margin-left": "-=720px" },
      1000,
      function() {
        defaultImg++;
        if (defaultImg == count) {
          defaultImg = sliderNext;
          $(".slides").css("margin-left", 0);
        }
      }
    );
  });

  $("#prev").click(function() {
    $("#slider .slides").animate({ "margin-right": "10px" }, 1000, function() {
      defaultImg = sliderPrev;
      if (defaultImg >= count) {
        defaultImg = sliderPrev;
        $(".slides").css("margin-right", 0);
      }
    });
    console.log("hello je ne fonctionne pas ");
  });

  $("#slider")
    .on("mouseenter", stopSlider)
    .on("mouseleave", startSlider);
  startSlider();
});
