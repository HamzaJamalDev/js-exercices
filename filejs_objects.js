// Exercice 1
let etudiant_1 = {
    nom: "aziz ahmed",
    module: "JavaScript",
    age: 18
};

etudiant_1.count = function () {
    return Object.keys(this).length;
}

etudiant_1.countV2 = function () {
    let cmp = 0;
    for (let _ in this) {
        cmp++;
    }
    return cmp;
}

console.log(etudiant_1.count()); // première méthode (ça donne 5)
console.log(etudiant_1.countV2()); // deuxième méthode (ça donne 5)

// Exercice 2
let etudiant_2 = {
    nom: "fatima karim",
    module: "JavaScript",
    note: 18,
    message: function () {
        console.log("bonjour " + this.nom + " tu as " + this.note + "/20 à " + this.module);
        /* ou bien
        console.log(`bonjour ${this.nom} tu as ${this.note}/20 à ${this.module}`);
        */
    }
};

etudiant_2.bonus = 2;
etudiant_2.getProps = function () {
    let props = [];
    for (let p in this) {
        props.push(p);
    }
    return props;
};

console.log(etudiant_2.getProps());

// Exercice 3
let etudiant_3 = {
    nom: "fatima aziz",
    module: "JavaScript",
    note: 19,
    message: function () {
        console.log(`bonjour ${this.nom} tu as ${this.note}/20 à ${this.module}`);
    },
    inverser: function () {
        let obj = {};
        for (const prop in this) {
            let value = this[prop];

            if (typeof (value) !== "function" && typeof (value) !== "object") {
                obj[this[prop]] = prop;
            }
        }
        return obj;
    }
};

console.log(etudiant_3.inverser());

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

// Exercice 5
function Livre(titre, auteur, id) {
    this.titre = titre;
    this.auteur = auteur;
    this.id = id;
}

function Bibliotheque(nom, emplacement, livres) {
    this.nom = nom;
    this.emplacement = emplacement;
    this.livres = livres;
}

Bibliotheque.prototype.trier = function (prop) {
    this.livres.sort(function (a, b) {
        if (a[prop] < b[prop]) {
            return -1;
        } else if (a[prop] > b[prop]) {
            return 1;
        } else {
            return 0;
        }
    });
}

let l1 = new Livre('Algorithms (4th Edition)', 'Kevin Wayne', 3245);
let l2 = new Livre('Cracking the Coding Interview', 'Gayle Laakmann McDowell', 1254);
let l3 = new Livre('Python Crash Course', 'Eric Matthes', 4264);

let bib = new Bibliotheque("Biblio de l'EMSI", "Casa", [l1, l2, l3]);

// tableau avant le tri
console.table(bib.livres);

bib.trier("id");

// tableau après le tri
console.table(bib.livres);
