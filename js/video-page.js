$(function () {

    initScreen();

    $(window).resize(function () {
       initScreen();
    });

    function initScreen() {
        var videos = $(".dc-video");
        var height = videos.height();
        videos.css({'width': height / 0.3 * 0.4})
        $("#cur").addCurVideo();
    }

});

$.fn.addCurVideo = function () {
    $(this).addClass("cur-video");
    var height = $(this).height();
    console.log(height);
    $(this).css({'width': height / 0.3 * 0.4})
};
