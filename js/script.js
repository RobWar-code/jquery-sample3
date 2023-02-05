$(document).ready(function () {
    $(".box").on("click", function () {
        // Get Class Names
        classNames = $(this).attr("class").split(" ");
        boxClass = classNames[0];
        className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            $("." + className).css("background-color", "#000");
        }
        else {
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});