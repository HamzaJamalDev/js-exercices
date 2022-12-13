// Exercice 2
function Max_Min(N1, N2, N3, N4, N5) {
    console.log("Max = " + Math.max(N1, N2, N3, N4, N5));
    console.log("Min = " + Math.min(N1, N2, N3, N4, N5));
}

Max_Min(prompt("Entrez Nombre 1 :"), prompt("Entrez Nombre 2 :"), prompt("Entrez Nombre 3 :"), prompt("Entrez Nombre 4 :"),
    prompt("Entrez Nombre 5 :"));

// Exercice 3
function compteur(chaine="", lettre="") {
    let j = 0;
    for (let i = 0; i < chaine.length; i++) {
        if (chaine.charAt(i) === lettre) {
            j++;
        }
    }
    return j;
}
let s = "Sofia";
let l = "f";
let c = compteur(s, l);

console.log("la lettre " + l + " est répétée " + c + " fois dans la chaîne " + s);


// Exercice 4
function unique(chaine) {
    for (let i = 0; i < chaine.length; i++) {
        let c = chaine.charAt(i);
        if (chaine.indexOf(c) == i && chaine.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return "";
}

let chaine = prompt("Chaine :");
console.log(unique(chaine));

// Exercice 5
let MatrixUnitaire = function (n) {
    let s = ""
    for (let i = 0; i < n; i++) {
        for (let i1 = 0; i1 < n; i1++) {
            s += (i1 === i ? "1" : "0")
        }
        s += "\n"
    }
    return s
}

console.log(MatrixUnitaire(5))
