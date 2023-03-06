var text = 'Hello World';
var a_number = 45;
var floating_number = 8.97;
var is_correct = true;

document.writeln(text.charAt(0) + "<br>"); // writeln for a new line, or use "<br>"
document.writeln(floating_number + "<br>");
document.writeln("Another text"); // ' or ", and does not need ; in the end of a statement
document.writeln(text.toUpperCase() + "<br>");

var months = new Array("January", "February", "March");
console.log(months[2]);
document.write(months.join(" -- ") + "<br>"); // turn array into a string with a delimeter

function print_word(word, times) {
    for (let i = 0; i < times; i++) {
        document.writeln(word + "<br>");
        if (word === "hello") { // === compares data type AND value, 5 == '5' is TRUE but 5 === '5' is FALSE
            document.writeln("world! <br>");
        }
    }
}
print_word("rafaela", 3);
print_word("hello", 5);

var input = "hallo, hello, hi, ciao : ";

function exercise(stringin) {
    var text = stringin + " " + document.getElementById("name").innerHTML;
    return text;
}

function quadriere() {
    var number = document.getElementById("input").getAttribute("data-number");
    var output = document.getElementById("output");
    output.innerHTML = number*number;
    alert(number*number);
}

function check_form() {
    debugger;
    var bundesland = document.getElementById("bundesland").value;
    var plz = document.getElementById("plz").value;

    if (bundesland === 'Wien') {
        if (plz >= 1010 && plz <= 1239) {
            alert("correct address!");
            return true;
        }
        alert("false address!");
        return false;
    }
    else if (bundesland === 'Steiermark') {
        if (plz >= 8000 && plz <= 8999) {
            alert("correct address!");
            return true;
        }
        alert("false address!");
        return false;
    }
    alert("false address!");
    return false;
}


var interval_id;

function start_counter() {
    interval_id = setInterval(increase_counter, 2000);
}

function increase_counter() {
    var counter_element = document.getElementById("counter");
    var current = parseFloat(counter_element.innerHTML);
    var next = current + 2;
    counter_element.innerHTML = next;
}

function stop_counter() {
    clearInterval(interval_id);
}