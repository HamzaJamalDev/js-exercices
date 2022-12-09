//Exercice 4
let val_1 = parseInt(prompt("Enter first value: ", 0));
let val_2 = parseInt(prompt("Enter second value: ", 0));
let val_3 = parseInt(prompt("Enter third value: ", 0));
let val_4 = parseInt(prompt("Enter fourth value: ", 0));
let val_5 = parseInt(prompt("Enter fifth value: ", 0));

if(val_1 > val_2 && val_1 > val_3 && val_1 > val_4 && val_1 > val_5) {
    alert(val_1);
}
else if(val_1 < val_2 && val_2 > val_3 && val_2 > val_4 && val_2 > val_5) {
    alert(val_2);
}
else if(val_3 > val_2 && val_1 < val_3 && val_3 > val_4 && val_3 > val_5) {
    alert(val_3);
}
else if(val_4 > val_2 && val_4 > val_3 && val_1 < val_4 && val_4 > val_5) {
    alert(val_4);
}
else {
    alert(val_5);
}