//Exercice 2
let val_1 = parseInt(prompt("Enter first value: ", 0));
let val_2 = parseInt(prompt("Enter second value: ", 0));
let val_3 = parseInt(prompt("Enter third value: ", 0));
let product = val_1 * val_2 * val_3;

let message = "The signe of the product is: ";

if(product > 0) {
    message += "+";
}
else {
    message += "-";
}

alert(message);