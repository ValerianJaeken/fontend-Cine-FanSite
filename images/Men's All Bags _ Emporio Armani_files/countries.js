"use strict";!function($,$Y){var e=$(".scroller"),t=$(".content-countries"),o=$(".nations li"),r=$(".filtered");var s=function(){e.perfectScrollbar("destroy"),e.perfectScrollbar({suppressScrollX:!0,minScrollbarLength:100}),e.perfectScrollbar("update"),e.scrollTop=0};$Y.watchOne({"yTos::HelpersFinishedLoading":function(){"countries"!=yTos.navigation.Controller&&s(),$("#fayt").on("keyup change",function(){var s=$(this).val().toLowerCase();s.length>0?$(".alpha").addClass("hidden"):$(".alpha").removeClass("hidden"),o.each(function(){var e=$(this).text().toLowerCase();$(this).toggle(!!e.match(s)),e.match(s)?$(this).addClass("filtered"):$(this).removeClass("filtered"),0===$(".filtered").length?$(".not-found").removeClass("hidden"):$(".not-found").addClass("hidden")}),t.length&&(e.scrollTop=0,r.lenght>0&&r.lenght<6?e.perfectScrollbar("destroy"):e.perfectScrollbar("update"))}),$(".nations li").each(function(){var e=$(this).find(".text").text().substring(0,1),t=$(this).prev().find(".text").text().substring(0,1);if(void 0!==e&&t!==e){var o="<span class='alpha "+e.toLowerCase()+"'>"+e+"</span>";$(this).before(o)}}),"countries"==yTos.navigation.Controller.toLowerCase()&&o.removeClass("selected")}}),$Y.watch({"store::OpenCountry":s,"store::CloseCountry":function(){e.perfectScrollbar("destroy")}})}(jQuery,yTos);
//# sourceMappingURL=countries.js.map
