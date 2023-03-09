// without jquery
// document.getElementById("greeting").innerHTML = "Hello";

// with jquery

// ready -> executes function when DOM is ready
// $(document).ready(function() {
//     $("#greeting").text("Hello with jquery");
// });

// will be executed when DOM is ready -> short for $(document).ready
$(function() {

    function change_greeting() {
        $("#greeting").text("Hello with jquery");
    }

    change_greeting();

    // # ... element id, dblclick ... double click, $(element) ... selects the element
    $("#clicker").on("dblclick", function() {
        console.log(this);
        // removes the button on double click
        $(this).remove();
    })

    console.log("* selector");
    console.log($("*"));

    console.log("Tag selector -> all elements with script tag");
    console.log($("script"));

    console.log("body p selector -> all elements with tags body p");
    console.log($("body p"));

    // select inner ul element
    console.log($("ul ul"))

    // select "outer" ul elements, but no the inner ul. so select the "div" and then the "ul" element
    console.log($("div > ul"));

    console.log(". selector -> gets the element with the class 'item'");
    console.log($(".item"))


    console.log(". selector -> gets the element with 'ul' label and with the class 'item'");
    console.log($("ul .item"))

    console.log("gets link elements with the htpps string");
    console.log($("[href*='https']"));


    $(".item").each(function(index, elem) {

        // get the class for the element
        console.log($(elem).attr("class"));

        // set attribute data-id to index value
        $(elem).attr("data-id", index);

        console.log("index -> " + index + " element with new 'data-id' attribute -> ");
        console.log(elem);

        // console.log("now removing the 'data-id' attribute...")
        // $(elem).removeAttr("data-id");
        // console.log(elem);
    })

    // with the second param, only the descendentes of "ul" that have the "li" tag become the target of the function
    $("ul").on("click", "li", function() {
        $(this).text("I was clicked");
        // manipulate css
        $(this).css("font-size", "+=2");
        // fade out in 2 seconds and fades back in (only after fadeout is finished)
        $(this).fadeOut(2000, function() {
            $(this).fadeIn(1000);
            $(this).text("A new text after fadeIn");
        });

        // promise -> promise to execute this?? what does it mean?
        $(this).promise().done(function() {
            $(this).text("All animations are done");
        })
    })

    // add text input to the list
    $("#add").on("click", function() {
        // get input by id "text_input"
        let itemText = $("#text_input").val();
        // get list by label
        let list = $("ol");
        let newListItem = "<li>" + itemText + "</li>"
        list.append(newListItem);

        // look at prepend -> may be necessary for exercise
    })




}
)

