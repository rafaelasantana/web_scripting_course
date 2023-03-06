
function calculate(id){
    var digit1 = parseFloat(document.getElementById("zahl1").value);   // um Text zu einer Zahl zu ändern
    var digit2 = parseFloat(document.getElementById("zahl2").value);
    var ergebnis = document.getElementById("pErgebnis");
    var verlauf = document.getElementById("verlauf");
    var sum = 0;

    switch (id.innerHTML){
        case "+":
            sum = digit1 + digit2;
            break;
        case "-":
            sum = digit1 - digit2;
            break;
        case "*":
            sum = digit1 * digit2;
            break;
        case "/":
            sum = digit1 / digit2;
            break;
        default:
            break;
    }
    
    ergebnis.innerHTML = sum;
    console.log(sum);
    
    var para = document.createElement("p");
    var node = document.createTextNode(digit1 + " " + id.innerHTML + " " + digit2 + " = " + sum);
    para.appendChild(node);
    verlauf.appendChild(para);
}