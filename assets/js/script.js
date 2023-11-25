$(document).ready(function() {
    var slider = $(".slider");
    var slideWidth = $(".slide").width();
    var slideCount = $(".slide").length;
    var currentIndex = 0;

    $(".next-btn").click(function() {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    $(".prev-btn").click(function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slideCount - 1;
        }
        updateSlider();
    });

    function updateSlider() {
        var translateValue = -currentIndex * slideWidth;
        slider.css("transform", "translateX(" + translateValue + "px)");
    }
});