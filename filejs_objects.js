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
//Exe 5 


function Livre(id, titre, auteur) {
  this.id = id;
  this.titre = titre;
  this.auteur = auteur;
}
function Bibliotheque(nom, emplacement, livres) {
  this.nom = nom;
  this.emplacement = emplacement;
  this.livres = livres;
}

let Livres = [
  new Livre(4264, "Python Crash Course", "Eric Matthes"),
  new Livre(1520, "Algorithms (4th Edition)", "Kevin Wayne"),
  new Livre(1254, "Cracking the Coding Interview", "Gayle Laakmann McDowell")
];

let biblio = new Bibliotheque("biblioUne", "C:/User/oussama/Documents", Livres);

let trier = (prop) => {
  console.table(
    biblio.livres.sort((a, b) => {
      if (a[prop] < b[prop]) {
        //
        return -1;
      } else {
        return 1;
      }
    })
  );
};

Bibliotheque.prototype.trierBiblio = trier;

biblio.trierBiblio("id");
biblio.trierBiblio("titre");
biblio.trierBiblio("auteur");
