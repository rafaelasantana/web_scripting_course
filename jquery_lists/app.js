
// will be executed when DOM is ready -> short for $(document).ready
$(function() {

    $("#hide_items").hide();
    $("#show_items").hide();

    // add text input to the list
    $("#add").on("click", function() {
        // get input by id "text_input"
        let itemText = $("#text_input").val();
        // get list by label
        let list = $("ul");
        // get check icon
        let check_icon = '<i class="fa fa-solid fa-check"></i>';
        // get delete icon
        let trash_icon = '<i class="fa fa-solid fa-trash"></i>';
        // set complete list item
        let newListItem = "<li class='list-group-item border-0 d-flex align-items-center ps-0 fs-4'>" + itemText + check_icon + trash_icon + "</li>";
        // add item to list
        list.append(newListItem);
        // clear text input field
        $("#text_input").val("");
        // show 'hide items' option
        $("#hide_items").show();

        //console.log(newListItem);

    })

    // delete list item when trash icon is clicked
    $("ul").on("click", ".fa-trash", function() {
        // fade out animation, then remove item from list
        $(this).parent('li').fadeOut(1000, function() {
            // remove li element from the section
            $(this).remove();
        });
    })

    // strikethrough text when check icon is clicked
    $("ul").on("click", ".fa-check", function() {
        // get text from list item
        let item = $(this).parent('li');
        let text = item.text();
        // strikethrough text
        let strikedText = "<del>" + text + "</del>";
        // get delete icon
        let trash_icon = '<i class="fa fa-solid fa-trash"></i>';
        item.text("");
        item.append(strikedText);
        item.append(trash_icon);
        item.hide();
        item.fadeIn(1000);
        console.log(item)
    })

    // show list when "Show Items" button is clicked
    $("#show_items").on("click", function() {
        $("ul").show();
        $("#hide_items").show();
        $("#show_items").hide();
    })

    // hide list when "Hide Items" button is clicked
    $("#hide_items").on("click", function() {
        $("ul").hide();
        $("#hide_items").hide();
        $("#show_items").show();
    })

    // # ... element id, dblclick ... double click, $(element) ... selects the element
    $("#clicker").on("dblclick", function() {
        console.log(this);
        // removes the button on double click
        $(this).remove();
    })
}
)
