var result = document.querySelector('#result');
var prev_calculations = new Array();
var prev_calculations_html = document.querySelector('#previous_calculations_list');

var add = document.querySelector('#add');
var sub = document.querySelector('#sub');
var mult = document.querySelector('#mult');
var div = document.querySelector('#div');

function get_first_term() {
    return document.querySelector('#first_term').value;
}

function get_second_term() {
    return document.querySelector('#second_term').value;
}

function update_prev_calculations(first_term, second_term, operator, result) {
    prev_calculations.push(first_term + operator + second_term + " = " + result);
    var list_prev_calc = "";
    for (let i = prev_calculations.length - 1; i >= 0 ; i--) {
        list_prev_calc += "<li class='list-group-item'>" + prev_calculations[i] + "</li>";
    }
    prev_calculations_html.innerHTML = list_prev_calc;
}

add.addEventListener("click", function() {
    var first_term = get_first_term();
    var second_term = get_second_term();
    result.value = parseFloat(first_term) + parseFloat(second_term);
    update_prev_calculations(first_term, second_term, " + ", result.value)
});

sub.addEventListener("click", function() {
    var first_term = get_first_term();
    var second_term = get_second_term();
    result.value = parseFloat(first_term) - parseFloat(second_term);
    update_prev_calculations(first_term, second_term, " - ", result.value)
});

mult.addEventListener("click", function() {
    var first_term = get_first_term();
    var second_term = get_second_term();
    result.value = parseFloat(first_term)*parseFloat(second_term);
    update_prev_calculations(first_term, second_term, " * ", result.value)
});

div.addEventListener("click", function() {
    var first_term = get_first_term();
    var second_term = get_second_term();
    result.value = parseFloat(first_term)/parseFloat(second_term);
    update_prev_calculations(first_term, second_term, " / ", result.value)
});


