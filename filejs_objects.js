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

// Exercice 6
function Vetement(id, nom, couleur, description, prix) {
    this.id = id;
    this.nom = nom;
    this.couleur = couleur;
    this.description = description;
    this.prix = prix;
}

Vetement.prototype.calculerPrixEnEuro = function () {
    return this.prix * 0.09;
};

Vetement.prototype.calculerPrixEnDollar = function () {
    return this.prix * 0.095;
};

function Chemise(id, nom, taille, couleur, description, prix) {
    Vetement.call(this, id, nom, couleur, description, prix);
    this.taille = taille;
}

Chemise.prototype = Object.create(Vetement.prototype);
Chemise.prototype.constructor = Chemise;

Chemise.prototype.obtenirTaille = function () {
    return this.taille;
};

function Pantalon(id, nom, largeur, longueur, couleur, description, prix) {
    Vetement.call(this, id, nom, couleur, description, prix);
    this.largeur = largeur;
    this.longueur = longueur;
}

Pantalon.prototype = Object.create(Vetement.prototype);
Pantalon.prototype.constructor = Pantalon;

Pantalon.prototype.obtenirTaille = function () {
    return `W: ${this.largeur} / L: ${this.longueur}`;
};

function Magasin(nom, emplacement, vetements = []) {
    this.nom = nom;
    this.emplacement = emplacement;
    this.vetements = vetements;
}

Magasin.prototype.existeAuMagasin = function (id) {
    for (let vetement of this.vetements) {
        if (vetement.id === id) {
            return true;
        }
    }
    return false;
};

Magasin.prototype.trierVetements = function (prop) {
    this.vetements.sort(function (a, b) {
        if (a[prop] < b[prop]) {
            return -1;
        } else if (a[prop] > b[prop]) {
            return 1;
        } else {
            return 0;
        }
    });
};

Magasin.prototype.ajouterAuMagasin = function (vetment) {
    this.vetements.push(vetment);
};

Magasin.prototype.supprimerDuMagasin = function (id) {
    for (let i = 0; i < this.vetements.length; i++) {
        if (this.vetements[i].id === id) {
            let elements_supprimes = this.vetements.splice(i, 1,);
            return elements_supprimes[0];
        }
    }
    return {};
};

function Panier(id, magasin, vetements) {
    this.id = id;
    this.magasin = magasin;
    this.vetements = vetements;
}

Panier.prototype.trierVetements = function (prop) {
    this.vetements.sort(function (a, b) {
        if (a[prop] < b[prop]) {
            return -1;
        } else if (a[prop] > b[prop]) {
            return 1;
        } else {
            return 0;
        }
    });
};

Panier.prototype.ajouterAuPanier = function (vetment) {
    this.vetements.push(vetment);
};

Panier.prototype.supprimerDuPanier = function (id) {
    for (let i = 0; i < this.vetements.length; i++) {
        if (this.vetements[i].id === id) {
            let elements_supprimes = this.vetements.splice(i, 1,);
            return elements_supprimes[0];
        }
    }
    return {};
};

Panier.prototype.viderPanier = function () {
    this.vetements = [];
};

Panier.prototype.calculerPrixTotal = function () {
    let prix_total = 0;
    for (let vetement of this.vetements) {
        prix_total += vetement.prix;
    }
    return `${prix_total} Dh`;
};

let chemise_1 = new Chemise(1, "chemise_1", "S", "rouge", "description 1", 150);
let chemise_2 = new Chemise(2, "chemise_2", "L", "bleu", "description 2", 100);
let chemise_3 = new Chemise(3, "chemise_3", "M", "noir", "description 3", 200);
let pantalon_1 = new Pantalon(4, "pantalon_1", 30, 34, "bleu", "description 1", 150);
let pantalon_2 = new Pantalon(5, "pantalon_2", 31, 32, "noir", "description 2", 250);

let magasin_1 = new Magasin("magasin_1", "casa", [chemise_1, chemise_2, chemise_3, pantalon_1, pantalon_2]);
let panier_1 = new Panier(1, magasin_1, [chemise_1, chemise_2, pantalon_2]);

console.log(magasin_1.existeAuMagasin(3)); // afficher true
console.log(magasin_1.existeAuMagasin(6)); // afficher false

magasin_1.ajouterAuMagasin(new Pantalon(6, "pantalon_3", 31, 33, "rouge", "description 3", 200));
console.table(magasin_1.vetements); // afficher les 6 vêtements du magasin

let vetement_sup = magasin_1.supprimerDuMagasin(5);
console.log(vetement_sup); // afficher le vêtement supprimé du magasin
console.table(magasin_1.vetements); // afficher les 5 vêtements du magasin

magasin_1.trierVetements("prix"); // trier le tableau des vêtements du magasin selon le prix
console.table(magasin_1.vetements); // afficher le tableau trié des vêtements du magasin

let vetement_panier_sup = panier_1.supprimerDuPanier(2);
console.log(vetement_panier_sup); // afficher le vêtement supprimé du panier
console.table(panier_1.vetements); // afficher les 5 vêtements dans le panier

panier_1.ajouterAuPanier(chemise_3);
console.table(panier_1.vetements); // afficher les 3 vêtements dans le panier

panier_1.trierVetements("nom"); // trier le tableau des vêtements du magasin selon le prix
console.table(panier_1.vetements); // afficher le tableau trié des vêtements dans le panier

console.log(panier_1.calculerPrixTotal()); // afficher le prix total des vêtements dans le panier

panier_1.viderPanier();
console.table(panier_1.vetements); // afficher un tableau vide des vêtements dans le panier
