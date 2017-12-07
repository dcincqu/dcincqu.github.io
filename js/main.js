// work mac window
// height: 636
// width: 1280
// max size: 1920 * 1080
// screen size
var screenHeight = $(window).height();
var screenWidth = $(window).width();
var screenHScale = screenHeight / 636.0;
var minBGWidth = 0;

$(function () {
    // for group panel
    // 0: main, 1: indite, 2: art, 3: aftereffect, 4: dub
    var panel = 0;

    $(".sk-fading-circle").remove();
    $("body").css({'overflow': "auto"});
    $(".loading").fadeOut(
        1000,
        function () {
            $(this).remove();
        });
    initScreen(true);

    $(".home-bg").sparkleh({
        count: 250
    });

    $(".group-description").mCustomScrollbar({
        scrollInertia: 950,
        autoDraggerLength: true,
        autoHideScrollBar: true
    });

    $(window).resize(function () {
        initScreen(false);
    });

    var groupButton = $(".group-button");

    // button animation
    groupButton.mouseenter(function () {
        resetButtonSize($(this), 1.05)
    });
    groupButton.mouseleave(function () {
        resetButtonSize($(this), 1 / 1.05);
    });

    // group button function
    // show group
    $("#button-indite").click(function () {
        panel = 1;
        $(".home-bg").addClass("blur");
        $("#group-indite-container").fadeIn("fast");
    });
    $("#button-art").click(function () {
        panel = 2;
        $(".home-bg").addClass("blur");
        $("#group-art-container").fadeIn("fast");
    });
    $("#button-aftereffect").click(function () {
        panel = 3;
        $(".home-bg").addClass("blur");
        $("#group-aftereffect-container").fadeIn("fast");
    });
    $("#button-dub").click(function () {
        panel = 4;
        $(".home-bg").addClass("blur");
        $("#group-dub-container").fadeIn("fast");
    });
    // back home
    $(".group-button-close").click(function ()  {
        switch (panel) {
            case 1:
                $("#group-indite-container").fadeOut(
                    "fast",
                    function () {
                        $(".home-bg").removeClass("blur");
                    });
                break;
            case 2:
                $("#group-art-container").fadeOut(
                    "fast",
                    function () {
                        $(".home-bg").removeClass("blur");
                    });
                break;
            case 3:
                $("#group-aftereffect-container").fadeOut(
                    "fast",
                    function () {
                        $(".home-bg").removeClass("blur");
                    });
                break;
            case 4:
                $("#group-dub-container").fadeOut(
                    "fast",
                    function () {
                        $(".home-bg").removeClass("blur");
                    });
                break;
        }
        panel = 0;
    });
    // pre and next group
    $("#inditeToLeft").click(function() {
        panel = 4;
        $(".group-info-bg").css({'display': "none"});
        $("#group-dub-container").css({'display': "block"})
    });
    $("#inditeToRight").click(function() {
        panel = 2;
        $(".group-info-bg").css({'display': "none"});
        $("#group-art-container").css({'display': "block"})
    });

    $("#artToLeft").click(function() {
        panel = 1;
        $(".group-info-bg").css({'display': "none"});
        $("#group-indite-container").css({'display': "block"})
    });
    $("#artToRight").click(function() {
        panel = 3;
        $(".group-info-bg").css({'display': "none"});
        $("#group-aftereffect-container").css({'display': "block"})
    });

    $("#aftereffectToLeft").click(function() {
        panel = 2;
        $(".group-info-bg").css({'display': "none"});
        $("#group-art-container").css({'display': "block"})
    });
    $("#aftereffectToRight").click(function() {
        panel = 4;
        $(".group-info-bg").css({'display': "none"});
        $("#group-dub-container").css({'display': "block"})
    });

    $("#dubToLeft").click(function() {
        panel = 3;
        $(".group-info-bg").css({'display': "none"});
        $("#group-aftereffect-container").css({'display': "block"})
    });
    $("#dubToRight").click(function() {
        panel = 1;
        $(".group-info-bg").css({'display': "none"});
        $("#group-indite-container").css({'display': "block"})
    });

    // functions
    function initScreen(firstLoad) {
        // screen size
        screenHeight = $(window).height();
        screenHeight = screenHeight > 1080 ? 1080 : screenHeight;
        screenWidth = $(window).width();
        screenWidth = screenWidth > 1920 ? 1920 : screenWidth;
        screenHScale = screenHeight / 636.0;

        var homeBG = $(".home-bg");
        var buttonContainer = $(".button-container");
        var groupWidth = 0;

        $(".title").autoSetTitle();
        buttonContainer.autoSetButtonContainerView(92);

        groupWidth = $("#inditeImg").autoSetGroupView(248.0, 480.0, groupWidth);
        groupWidth = $("#artImg").autoSetGroupView(453.0, 480.0, groupWidth);
        groupWidth = $("#aftereffectImg").autoSetGroupView(200.0, 480.0, groupWidth);
        groupWidth = $("#dubImg").autoSetGroupView(289.0, 480.0, groupWidth);
        minBGWidth = groupWidth;

        homeBG.setBGMinWidth();
        $(".group-info-bg").setBGMinWidth();
        buttonContainer.setBGMinWidth();

        if(!firstLoad) {
            $(".sparkle-canvas").css({
                'width': homeBG.width(),
                'height': homeBG.height()
            })
        }
    }

    function resetButtonSize(button, scale) {
        button.stop(true, true);
        var w = button.width() * scale;
        var h = button.height() * scale;
        button.animate({width: w, height: h}, "fast")
    }
});

$.fn.autoSetTitle = function () {
    // title
    var width = 875 * 0.7 * screenHScale;
    var height = 125 * 0.7 * screenHScale;
    // qq qrcode
    var qqWidth = 149.5 * screenHScale;
    var qqHeight = 157 * screenHScale;
    // wechart qrcode
    var wechartHeight = qqHeight;
    var wechartWidth = wechartHeight * 372.0 / 421.0;
    // video
    var videoHeight = 450 * screenHScale * 0.8;
    var videoWidth = 544 * screenHScale * 0.8;
    // position
    var left = (screenWidth * 4 / 7 - width) / 2;
    left = left < 0 ? 0 : left;
    var qrLeft = left + (width - qqWidth - wechartWidth - 50) / 2;
    var qrTop = height + 100 * screenHScale;
    var videoLeft = left * 2 + width;

    $(this).css({
        'width': width,
        'height': height,
        'left': left,
        'top': 50 * screenHScale
    });

    $(".qr-code-qq").css({
        'width': qqWidth,
        'height': qqHeight,
        'left': qrLeft,
        'top': qrTop
    });

    $(".qr-code-wechat").css({
        'width': wechartWidth,
        'height': wechartHeight,
        'left': qrLeft + qqWidth + 50,
        'top':qrTop
    });

    $(".ad-video").css({
        'width': videoWidth,
        'height': videoHeight,
        'left': videoLeft,
        'top': 77 * screenHScale
    });

    $(".ad-button-close").autoSetADCloseButton(videoWidth)
};

$.fn.autoSetADCloseButton = function (pWidth) {
    $(this).css({
        'width': pWidth * 0.03,
        'height': pWidth * 0.03,
        'left': pWidth
    })
};

$.fn.autoSetButtonContainerView = function (height) {
    // container size
    var h = height * screenHScale;
    // background size
    var bh = 92 * screenHScale;
    var bw = 135 * screenHScale;

    $(this).css({
        'height': h,
        'background-size': bw, bh
    });

    // button Size
    var inditeH = 195 * screenHScale;
    var inditeW = 96 * screenHScale;
    var artH = 171 * screenHScale;
    var artW = 192 * screenHScale;
    var aftereffectH = 189 * screenHScale;
    var aftereffectW = 77 * screenHScale;
    var dubH = 193 * screenHScale;
    var dubW = 99 * screenHScale;
    // left position(indite-art-aftereffect-dub gap: 21-19-13)
    var leftPos = (screenWidth - inditeW - artW - aftereffectW - dubW - 53) / 2;
    leftPos = leftPos < 0 ? 0 : leftPos;

    $("#button-dub").css({
        'height': dubH,
        'width': dubW,
        'left': leftPos,
        'bottom': 18 * screenHScale
    });
    $("#button-indite").css({
        "height": inditeH,
        "width": inditeW,
        "left": leftPos + dubW + 21,
        "bottom": 0
    });
    $("#button-aftereffect").css({
        "height": aftereffectH,
        "width": aftereffectW,
        "left": leftPos + dubW + inditeW + 40,
        "bottom": 88 * screenHScale
    });
    $("#button-art").css({
        "height": artH,
        "width": artW,
        "left": leftPos + dubW + inditeW + aftereffectW + 53,
        "bottom": 0
    })
};

$.fn.autoSetGroupView = function(imgWidth, imgHeight, groupWidth) {
    var hwScale = imgWidth / imgHeight;
    var scale = 0.8;

    // group logo size
    var imgH = imgHeight * screenHScale * scale;
    var imgW = imgH * hwScale;
    // button size
    var closeButton = $(this).parent(".container").children(".group-button-close");
    var leftButton = $(this).parent(".container").children(".group-button-left");
    var rightButton = $(this).parent(".container").children(".group-button-right");
    var buttonHeight = 49 * screenHScale * scale;
    var buttonWidth = 141 * screenHScale * scale;
    // choose description
    var description = $(this).parent(".container").children(".group-description-container");
    var desHeight = imgH;
    var desWidth = desHeight * 1.2;
    desWidth = desWidth < 400 ? 400 : desWidth;

    var leftButtonPos = (screenWidth - imgW - desWidth - buttonWidth * 2 - 75) / 2;
    leftButtonPos = leftButtonPos < 0 ? 0 : leftButtonPos;

    leftButton.css({
        'height': buttonHeight,
        'width': buttonWidth,
        'left': leftButtonPos,
        'top': (screenHeight - buttonHeight) / 2
    });

    $(this).css({
        'height': imgH,
        'width': imgW,
        'left': leftButtonPos + buttonWidth,
        'top': (screenHeight - imgH) / 2
    });

    description.css({
        'height': desHeight,
        'width': desWidth,
        'left': leftButtonPos + buttonWidth + imgW + 50,
        'top': (screenHeight - desHeight) / 2
    });
    $(".group-description").css({'font-size': 17 * screenHScale * scale});

    rightButton.css({
        'height': buttonHeight,
        'width': buttonWidth,
        'left': leftButtonPos + buttonWidth + imgW + desWidth + 75,
        'top': (screenHeight - buttonHeight) / 2
    });

    var closeButtonTop = (screenHeight - desHeight) / 2 - 50;
    closebuttonTop = closeButtonTop < 0 ? 0 : closeButtonTop;
    closeButton.css({
        'height': buttonHeight,
        'width': buttonHeight,
        'left': leftButtonPos + buttonWidth - 25,
        'top': closebuttonTop
    });

    var bgWidth = imgW + desWidth + buttonWidth * 2 + 75;
    groupWidth = groupWidth < bgWidth ? bgWidth : groupWidth;

    return groupWidth
};

$.fn.setBGMinWidth = function () {
    $(this).css({
        'min-width': minBGWidth
    })
};

