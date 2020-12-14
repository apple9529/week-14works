$(document).ready(function () {
    //Apend

    for (var i = 0; i < 25; i++) {
        var windowWidth = $(window).width() * Math.random()
        var windowHeight = $(window).height() * Math.random()
        $(".background").append("<div class='circle' style='left:" + windowWidth + "px; top:" + windowHeight + "px;'></div>")
    }
    for (var i = 0; i < 25; i++) {
        var windowWidth = $(window).width() * Math.random()
        var windowHeight = $(window).height() * Math.random()
        $(".background").append("<div class='circle2' style='left:" + windowWidth + "px; top:" + windowHeight + "px;'></div>")
    }

})