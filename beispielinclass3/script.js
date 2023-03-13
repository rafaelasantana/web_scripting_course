//document.getElementById("greeting").innerHTML = "Hello";
$(function() {

    function changeGreeting() {
        $("#greeting").text("Hello");
    }
    changeGreeting();

    $("#clicker").on("dblclick", function() {
        $(this).remove();
    });

    console.log("* Selector");
    console.log($("*")); // Alle elemente

    console.log("Tag selector");
    console.log($("script")); // 2 script elemente

    console.log("body p selector");
    console.log($("body p"));

    console.log($("div ul ul"));
    console.log($("div > ul"));

    console.log($("ul.item"));

    console.log($("a[href*='https']"));

    $(".item").each(function(index, elem) {
        console.log("Element at " +index);
        console.log(elem);

        console.log($(elem).attr("class"));
        $(elem).attr("data-id", index);
        $(elem).removeAttr("data-id");
    });

    $("ul").on("click", "li", function() {
        $(this).text("I was clicked");
        $(this).css("font-size","+=2");
        $(this).fadeOut(2000);
        //$(this).fadeIn(2000, function() {
        //    $(this).text("A new text after fadeIn");
        //});
        $(this).fadeIn(2000);
        $(this).promise().done(function() {
            $(this).text("A new text after fadeIn");
        });
    });

    $("#add").on("click", function () {
        let itemText = $("#item").val();
        $("ol").prepend("<li>" + itemText + "</li>");

    });

});


