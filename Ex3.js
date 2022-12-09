//Exercice 3
let val_1 = parseInt(prompt("Enter first value: ", 0));
let val_2 = parseInt(prompt("Enter second value: ", 0));
let val_3 = parseInt(prompt("Enter third value: ", 0));

let message = "";

if(val_1 > val_2 && val_1 > val_3) {
    message = val_1 + ", ";
    if(val_2 > val_3) {
        message += val_2 + ", " + val_3;
    }
    else {
        message += val_3 + ", " + val_2;
    }
}
else if(val_1 < val_2 && val_2 > val_3) {
    message = val_2 + ", ";
    if(val_1 > val_3) {
        message += val_1 + ", " + val_3;
    }
    else {
        message += val_3 + ", " + val_2;
    }
}
else {
    message = val_3 + ", ";
    if(val_2 > val_1) {
        message += val_2 + ", " + val_1;
    }
    else {
        message += val_3 + ", " + val_2;
    }
}

alert(message);