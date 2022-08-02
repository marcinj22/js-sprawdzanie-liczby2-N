let nmr1 = 12;
let nmr2 = 7;

function trueFalse(number1,number2) {
    if (number1 == 20) {
        return "true";
    } else if (number1 + number2 <= 20) {
        return "true";
    } else {
        return "false";
    }
}

console.log(trueFalse(nmr1,nmr2));