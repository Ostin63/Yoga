$(document).ready((function(){$(".sliler-info").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-teams"}),$(".slider-teams").slick({slidesToScroll:1,slidesToShow:3,vertical:!0,arrows:!0,centerMode:!1,asNavFor:".sliler-info",responsive:[{breakpoint:1456,settings:{slidesToShow:3,vertical:!0}},{breakpoint:768,settings:{slidesToShow:1,vertical:!1}}]}),$(".slider-teams").on("afterChange",(function(e,s,o){$(".counter").html(o+1+" &sol; "),$(".counter-sub").html(s.slideCount)})),$(".slider-reviews").slick({slidesToScroll:1,slidesToShow:2,arrows:!0,centerMode:!1,responsive:[{breakpoint:1456,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]}),$(".slider-reviews").on("afterChange",(function(e,s,o){$(".counter").html(o+1+" &sol; "),$(".counter-sub").html(s.slideCount)}))}));