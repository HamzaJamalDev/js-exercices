// Conditions et Boucles
/* Exercice 1
let num1 = parseInt(prompt("Entrez un nombre (num1)", 0));
let num2 = parseInt(prompt("Entrez un nombre (num2)", 0));

if (num1 > num2) {
    console.log("num1 = " + num1 + " est le plus grand");
} else {
    console.log("num2 = " + num2 + " est le plus grand");
} */
/* Exercice 2
let num1 = parseInt(prompt("Entrez un nombre (num1)", 0));
let num2 = parseInt(prompt("Entrez un nombre (num2)", 0));
let num3 = parseInt(prompt("Entrez un nombre (num3)", 0));
let p = num1 * num2 * num3;
let message = "Le signe du produit est : ";

if (p < 0) {
    message += "-";
} else {
    message += "+";
}

alert(message); */
// Exercice 3
let num1 = parseInt(prompt("Entrez un nombre (num1)", 0));
let num2 = parseInt(prompt("Entrez un nombre (num2)", 0));
let num3 = parseInt(prompt("Entrez un nombre (num3)", 0));
let message = "";

if (num1 < num2 && num1 < num3){
    message += num1 + ", ";
    if (num2 < num3) {
        message += num2 + ", " + num3;
    } else {
        message += num3 + ", " + num2;
    }
} else if (num2 < num1 && num2 < num3) {
    message += num2 + ", ";
    if (num1 < num3) {
        message += num1 + ", " + num3;
    } else {
        message += num3 + ", " + num1;
    }
} else {
    message += num3 + ", ";
    if (num1 < num2) {
        message += num1 + ", " + num2;
    } else {
        message += num2 + ", " + num1;
    }
}

alert(message);
