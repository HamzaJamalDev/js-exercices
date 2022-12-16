// Exercice 1
let etudiant_1 = {
    nom: "aziz ahmed",
    module: "JavaScript",
    age: 18
};

etudiant_1.count = function () {
    return Object.keys(this).length;
}

console.log(etudiant_1.count());

// Exercice 4 (première partie)
function Personne(nom, age) {
    this.nom = nom;
    this.age = age;
}

Personne.prototype.exist = function (x) {
    for (let item in this) {
        if (item === x) {
            return true;
        }
    }
    return false;
};

Personne.prototype.exist2 = function (proto) {
    let c = 0;
    for (let p in this) {
        if (p === proto) {
            c++;
            break;
        }
    }
    if (c != 0) return true;
    else return false;
};

let othmane = new Personne('badaoui othmane', 20);
othmane.note = 20;
console.log(othmane.exist2("note"));

let aziz = new Personne('aziz ahmed', 21);
console.log(aziz.exist('nom'));
