$(document).ready((function(){$(".sliler-info").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-teams"}),$(".slider-teams").slick({slidesToScroll:1,slidesToShow:3,vertical:!0,arrows:!0,centerMode:!1,asNavFor:".sliler-info",responsive:[{breakpoint:1456,settings:{slidesToShow:3,vertical:!0}},{breakpoint:768,settings:{slidesToShow:1,vertical:!1}}]}),$(".slider-teams").on("afterChange",(function(e,o,l){$(".counter").html(l+1+" &sol; "),$(".counter-sub").html(o.slideCount)})),$(".slider-reviews").slick({slidesToScroll:1,slidesToShow:2,arrows:!0,centerMode:!1,vertical:!1,responsive:[{breakpoint:1456,settings:{slidesToShow:2,vertical:!0}},{breakpoint:768,settings:{slidesToShow:1,vertical:!1}}]}),$(".slider-reviews").on("afterChange",(function(e,o,l){$(".counter-reviews").html(l+1+" &sol; "),$(".counter-reviews-sub").html(o.slideCount)}));let e=$(".block-counter");$(".tracked").waypoint((function(o){let l=this.element.id;if("up"===o){let e=parseInt(l.split("-")[1]);e>1&&e--,l=[l.split("-")[0],e].join("-")}e.removeClass("show"),$.each(e,(function(){$(this).attr("href").slice(1)==l&&$(this).addClass("show")}))}))[0].options.offset=-1,$(".left-block").on("click",(function(){$(".nav-modal").addClass("show-block"),$(".modal-overlay").addClass("show-block")})),$(".nav-modal__close").on("click",(function(){$(".nav-modal").removeClass("show-block"),$(".modal-overlay").removeClass("show-block")})),$(".nav-modal__text").on("click",(function(){$(".nav-modal").removeClass("show-block"),$(".modal-overlay").removeClass("show-block")})),$(".button-top").on("click",(function(){$(".block-cart-all").addClass("show-block"),$(".button-top").addClass("button-active")})),$(".block-button").on("click",(function(){$(".block-cart-all").removeClass("show-block"),$(".button-top").removeClass("button-active")})),$(".order").on("click",(function(e){$(".intro-modal").addClass("show-block"),$(".modal-overlay").addClass("show-block")})),$(".modal-form__close").on("click",(function(e){$(".intro-modal").removeClass("show-block"),$(".modal-overlay").removeClass("show-block")})),jQuery.validator.addMethod("checkMask",(function(e,o){return/\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(e)})),$(".modal-form").validate({rules:{fname:{required:!0,minlength:2},fmail:{required:!0,email:!0},fphone:{required:!0,checkMask:!0}},messages:{fname:{required:"Это поле обязательно",minlength:"Введите не менее 2-х символов в поле 'Имя'"},fmail:{required:"Это поле обязательно",email:"Необходим формат адреса email"},fphone:{required:"Это поле обязательно",checkMask:"Введите полный номер телефона"},fcheckbox:{required:"Необходимо Ваше согласие"}}}),$("#phone").mask("+7(999)999-9999",{autoclear:!1}),$(".free-lesson").validate({rules:{fbname:{required:!0,minlength:2},fbphone:{required:!0,checkMask:!0}},messages:{fbname:{required:"Это поле обязательно",minlength:"Введите не менее 2-х символов в поле 'Имя'"},fbphone:{required:"Это поле обязательно",checkMask:"Введите полный номер телефона"}}}),$("#phone-bottom").mask("+7(999)999-9999",{autoclear:!1})}));let subscriptionsDate=document.querySelectorAll(".subscriptions-date");for(let e=0;e<subscriptionsDate.length;e++){subscriptionsDate[0].classList.add("period-selection")}let timeTable=document.querySelectorAll(".block-timetable");for(let e=0;e<timeTable.length;e++){timeTable[0].classList.add("active")}let catCarts=[];for(let e=0;e<timeTable.length;e++){let o=timeTable[e];catCarts.push(o)}let addThumbnailClickBtn=function(e,o){e.addEventListener("click",(function(e){let l=e.target;for(let e=0;e<subscriptionsDate.length;e++){subscriptionsDate[e].classList.remove("period-selection")}l.classList.add("period-selection");for(let e=0;e<timeTable.length;e++){timeTable[e].classList.remove("active")}o.classList.add("active")}))};for(let e=0;e<subscriptionsDate.length;e++)addThumbnailClickBtn(subscriptionsDate[e],catCarts[e]);let recButton=document.querySelectorAll(".rec"),blockDescription=document.querySelectorAll(".block-description"),modalOverlay=document.querySelector(".modal-overlay"),infoCarts=[];for(let e=0;e<blockDescription.length;e++){let o=blockDescription[e];infoCarts.push(o)}let addThumbnailClick=function(e,o){e.addEventListener("click",(function(e){o.classList.add("show-block"),modalOverlay.classList.add("show-block")}))};for(let e=0;e<recButton.length;e++)addThumbnailClick(recButton[e],infoCarts[e]);let btnClose=document.querySelectorAll(".btn-close"),closeBlock=function(e,o){e.addEventListener("click",(function(e){o.classList.remove("show-block"),modalOverlay.classList.remove("show-block")}))};for(let e=0;e<btnClose.length;e++)closeBlock(btnClose[e],infoCarts[e]);