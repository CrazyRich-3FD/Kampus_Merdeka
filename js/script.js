
// TUGAS 1

$("document").ready(function () {
    $("div.kucing").click(function () {
        $(this).css({
            "background" : "url('img/Kucing.jpg')",
            "background-size" : "cover",
        });
    });

    $(".kucing").click(function () {
    $("<audio></audio>").attr({
        src: "audio/kucing.mpeg",
        volume: 0.4,
        autoplay: "autoplay",
        }).appendTo("body");
    });

    $("div.sapi").click(function () {
        $(this).css({
            "background" : "url(img/Sapi.jpg)",
            "background-size" : "cover",
        });
    });

    $(".sapi").click(function () {
    $("<audio></audio>").attr({
        src: "audio/suara sapi.mp3",
        volume: 0.4,
        autoplay: "autoplay",
        }).appendTo("body");
    });

    $("div.kambing").click(function () {
        $(this).css({
            "background" : "url(img/Kambing.jpg)",
            "background-size" : "cover",
        });
    });

    $(".kambing").click(function () {
    $("<audio></audio>").attr({
        src: "audio/suara kambing.mp3",
        volume: 0.4,
        autoplay: "autoplay",
        }).appendTo("body");
    });

    $("div.anjing").click(function () {
        $(this).css({
            "background" : "url(img/Anjing.jpg)",
            "background-size" : "cover",
        });
    });

    $(".anjing").click(function () {
    $("<audio></audio>").attr({
        src: "audio/suara anjing.mp3",
        volume: 0.4,
        autoplay: "autoplay",
        }).appendTo("body");
    });

    $("div.ayam").click(function () {
        $(this).css({
            "background" : "url(img/Ayam.jpg)",
            "background-size" : "cover",
        });
    });

    $(".ayam").click(function () {
    $("<audio></audio>").attr({
        src: "audio/suara ayam.mp3",
        volume: 0.4,
        autoplay: "autoplay",
        }).appendTo("body");
    });

    $("div.box-img").mouseout(function () {
        $(this).css({
            "background" : "",
            "background-size" : "cover",
        });
    });

});

// TUGAS 2

$("document").ready(function () {
        $('.jdl-cp').click(function () {
            $('.cp').slideToggle("slow");
        });

        $('.jdl-vm').click(function () {
            $('.vm').slideToggle("slow");
        });

        $('.jdl-db').click(function () {
            $('.db').slideToggle("slow");
        });

    });