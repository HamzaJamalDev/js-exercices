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

// Exercice 4
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

// let othmane = new Personne('badaoui othmane', 20);
// othmane.note = 20;
// console.log(othmane.exist2("note"));

// let aziz = new Personne('aziz ahmed', 21);
// console.log(aziz.exist('nom'));

// let p = new Personne("lina", 21);
// console.log(p.exist("age"));   // dans ce cas il va retourner true

function Etudiant(nom, age, matriculation, notes, modules) {
    Personne.call(this, nom, age); // hériter les propriétés nom et age
    this.matriculation = matriculation;
    this.notes = notes;
    this.modules = modules;
}

Etudiant.prototype = Object.create(Personne.prototype); // hériter la méthode exist
Etudiant.prototype.constructor = Etudiant;

Etudiant.prototype.bonjour = function () {
    let msg = "bonjour " + this.nom + " tu as ";
    for (let i = 0; i < this.notes.length; i++) {
        msg += this.notes[i] + "/20 dans " + this.modules[i] + ", ";
    }

    // ou on peut faire
    // let msg = `bonjour ${this.nom} tu as `;
    // for (let i = 0; i < this.notes.length; i++) {
    //     msg += `${this.notes[i]}/20 dans ${this.modules[i]}, `;
    // }

    msg = msg.substring(0, msg.length - 2); // supprimer les caractères ", " à la fin
    console.log(msg);
}

let e = new Etudiant("lina", 21, "3452", [14, 16, 18], ["JavaScript", "SQL", "Linux"]);
e.bonjour();
