$(document).ready(function () {

    $(".accordion-header").click(function (e) {
        if ($(e.target).next().hasClass("active")) {

            $(e.target).next().removeClass("active");
            $(e.target).removeClass("active");

        }
        else {

            $(".acc-body").each(function (event) {
                if ($(event.target).next() != $(this) && $(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(".accordion-header").removeClass("active");
                }
            })
            $(this).next().addClass("active");
            $(this).addClass("active");
        }
    });
});