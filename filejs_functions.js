// Exercice 1
function prime(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let n = parseInt(prompt("Entrez un nombre", 1));
console.log(prime(n));

// Exercice 2
function maxMin(n1, n2, n3, n4, n5) {
    console.log("Max = " + Math.max(n1, n2, n3, n4, n5));
    console.log("Min = " + Math.min(n1, n2, n3, n4, n5));
}

maxMin(prompt("Entrez nombre 1 :"), prompt("Entrez nombre 2 :"), prompt("Entrez nombre 3 :"), prompt("Entrez nombre 4 :"),
    prompt("Entrez nombre 5 :"));

// Exercice 2 (version 2)
function maxMinV2(n1, n2, n3, n4, n5) {
    let min, max;
    if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
        max = n1
    }
    else if (n2 > n3 && n2 > n4 && n2 > n5) {
        max = n2;
    } else if (n3 > n4 && n3 > n5) {
        max = n3;
    } else if (n4 > n5) {
        max = n4;
    } else {
        max = n5;
    }

    if (n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5) {
        min = n1
    }
    else if (n2 < n3 && n2 < n4 && n2 < n5) {
        min = n2;
    } else if (n3 < n4 && n3 < n5) {
        min = n3;
    } else if (n4 < n5) {
        min = n4;
    } else {
        min = n5;
    }

    console.log("max = " + max);
    console.log("min = " + min);
}

let n1 = parseInt(prompt("Entrez un nombre"));
let n2 = parseInt(prompt("Entrez un nombre"));
let n3 = parseInt(prompt("Entrez un nombre"));
let n4 = parseInt(prompt("Entrez un nombre"));
let n5 = parseInt(prompt("Entrez un nombre"));

maxMinV2(n1, n2, n3, n4, n5);

// Exercice 3
function compteur(chaine = "", lettre = "") {
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

// Exercice 4 (version 2)
function uniqueV2(chaine = "") {
    for (let i = 0; i < chaine.length; i++) {
        let unique = true;
        for (let j = 0; j < chaine.length; j++) {
            if (chaine.charAt(i) === chaine.charAt(j) && i !== j) {
                unique = false;
                break;
            }
        }

        if (unique) {
            return chaine.charAt(i);
        }
    }
    return "";
}

let str = prompt("Entrez une chaine", "");
console.log(uniqueV2(str));

// Exercice 5
let identity_matrix = function (n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        for (let i1 = 0; i1 < n; i1++) {
            s += (i1 === i ? "1" : "0");
        }
        s += "\n";
    }
    return s;
}

console.log(identity_matrix(5))

// Exercice 5 (version 2)
console.log((function (n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                s += "1";
            } else {
                s += "0";
            }
        }
        s += "\n"
    }
    return s
})(parseInt(prompt("Entrez la dimension", 2))));

// Exercice 6
function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}

let num = parseInt(prompt("Entrez un nombre", 1));
console.log(fact(num));

// Exercice 7 (boucles)
function rangeLoop(a, b) {
    let s = "";
    for (let i = a + 1; i < b; i++) {
        s += i + "-"
    }
    return s;
}

let a = parseInt(prompt("Entrez a"));
let b = parseInt(prompt("Entrez b"));
console.log(rangeLoop(a, b));

// Exercice 7 (fonction récursive)
function rangeRec(x, y) {
    if (x > y - 2) {
        return "";
    }
    return (x + 1) + "-" + rangeRec(x + 1, y);
}

let x = parseInt(prompt("Entrez x"));
let y = parseInt(prompt("Entrez y"));
console.log(rangeRec(x, y));

// Exercice 8 (boucles)
function powLoop(b, n) {
    let p = 1;
    for (let i = 0; i < n; i++) {
        p *= b;
    }

    return p;
}

let b_pow_loop = parseInt(prompt("Entrez la base b"));
let n_pow_loop = parseInt(prompt("Entrez l'exposant n"));
console.log(powLoop(b_pow_loop, n_pow_loop));

// Exercice 8 (fonction récursive)
function powRec(b, n) {
    if (n === 0) {
        return 1;
    }
    return b * powRec(b, n - 1);
}

let b_pow_rec = parseInt(prompt("Entrez la base b"));
let n_pow_rec = parseInt(prompt("Entrez l'exposant n"));
console.log(powRec(b_pow_rec, n_pow_rec));
