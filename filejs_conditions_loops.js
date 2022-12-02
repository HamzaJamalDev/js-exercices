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
/* Exercice 3
let num1 = parseInt(prompt("Entrez un nombre (num1)", 0));
let num2 = parseInt(prompt("Entrez un nombre (num2)", 0));
let num3 = parseInt(prompt("Entrez un nombre (num3)", 0));
let message = "";

if (num1 < num2 && num1 < num3) {
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

alert(message);*/
/* Exercice 4
let num1 = parseInt(prompt("Entrez un nombre (num1)", 0));
let num2 = parseInt(prompt("Entrez un nombre (num2)", 0));
let num3 = parseInt(prompt("Entrez un nombre (num3)", 0));
let num4 = parseInt(prompt("Entrez un nombre (num4)", 0));
let num5 = parseInt(prompt("Entrez un nombre (num5)", 0));
let max;

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    max = num1;
} else if (num2 > num3 && num2 > num4 && num2 > num5) {
    max = num2;
} else if (num3 > num4 && num3 > num5) {
    max = num3;
} else if (num4 > num5) {
    max = num4;
} else {
    max = num5;
}

alert(max);*/
/* Exercice 5
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0)
        console.log(i + " est pair")
    else
        console.log(i + " est impair")
}*/
/* Exercice 6
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("multiple de trois et cinq");
    }
    else if (i % 5 === 0) {
        console.log("multiple de cinq");
    }
    else if (i % 3 === 0) {
        console.log("multiple de trois");
    }
    else {
        console.log(i);
    }
}*/
// Exercice 7
//for (let i = 1; i < 6; i++) {
//  let s = "";
//   for (let j = 0; j < i; j++) {
//      s += "*";
//   }
//console.log(s);
//}



// Write a JavaScript program that accept two integers and display the larger.
let x = prompt("Saisir une valeur : ",0);
let y = prompt("Saisir une valeur : ",0);

function check(x,y){    
     console.log(Math.max(x,y));
}
check(x,y);


// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign
let a = prompt("Saisir une valeur : ",0);
let b = prompt("Saisir une valeur : ",0);
let c = prompt("Saisir une valeur : ",0);
function Signe_de_produit(a,b,c){
if(a*b*c<0)
console.log("le signe est : -");
else
console.log("le signe est : +");
}
Signe_de_produit(a,b,c);

// écrire un programme qui affiche le plus grand nombre dans un tableau : 

let n =prompt("Saisir nombre de cases  : ",0)
var tab=[]
function check (tab){
for(let i=0;i<n;i++){
    tab[i]=prompt("Saisir une valeur : ",0);
}
console.log(Math.max(...tab));
}
check(tab);

// écrire un programme javascript qu'il fait la création d'une structure qui contient le nom et le prenom et la note ,
// et faire la moyenne de tous les éleves : 

let  etudiant ={
    
    firstName:"",
    lastName:"",
    Note:[],
    Matricule:0
}
let nbr_etud=prompt("Saisir le nombre d'étudiant")
let tab=Array(etudiant);
function Saisir (tab){
for(let i = 0;i<nbr_etud;i++){
    tab[i].firstName=prompt("Saisir le prenom d'etudiant :",i);
    tab[i].lastName=prompt("Saisir le nom d'étudiant :",i);
    let nbr_note=prompt("Saisir le nombre des notes de ce étudiant :")
    for(let j = 0 ; j<nbr_note;j++){
        tab[i].Note[j]=prompt("Saisir une note :");
    }
    tab[i].Matricule++;
}
}
Saisir(tab) 
console.log(tab)
function moy(tab ) {
let i, s =0
let x=prompt("Veuillez entrer le Matricule d'étudiant")
 for( i =0;i<(tab).length;i++){
if(tab[i].Matricule===x){
for(let j = 0 ; j<(tab.Note).length;j++)
{
    s=s+tab[i].Note[j];
}
}
 }
return s/(tab.Note).length;
}
console.log(moy(tab))

