//Appliquer qst1
function multi(n) {
    let s = 0;
    for (let i = 0; i <= 50; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            s += i;
        }
    }
    return s;
}

//Appliquer Qst2
let t = [0, 2, 6, 3, 5, 17];
function check(t) {
    let paire = [];
    let impaire = [];
    for (i = 0; i < t.length; i++) {
        if (t[i] % 2 == 0) {
            paire.push(t[i]);
        } else {
            impaire.push(t[i]);
        }
    }
    console.log(paire, '-', impaire);
}
check(t);

//Analyser qst1

function chapitre(nom, nombre_pages, position) {
    this.nom = nom;
    this.nombre_pages = nombre_pages;
    this.position = position;
}
chapitre.prototype.chapitreLong = function () {
    if (this.nombre_pages > 100) {
        return true;
    } else {
        return false;
    }
}
function Livre(id, titre, prix, chapitres) {
    this.id = id;
    this.titre = titre;
    this.prix = prix;
    this.chapitres = chapitres;
}
Livre.prototype.sauterLongsChapitres = function () {
    let t = [];
    for (i = 0; i < this.chapitres.length; i++) {

        if (this.chapitres[i].nombre_pages < 100) {

            t.push(this.chapitres[i]);
        }
    }
    console.log(t);
}
Livre.prototype.trierChapitres = function (par) {
    if (par == "position") {
        this.chapitres.sort(function triParPos(p, n) {
            if (p.position > n.position) {
                return -1;
            } else if (p.position < n.position) {
                return 1;
            } else {
                return 0;
            }
        });
    } else {
        this.chapitres.sort(function triParNmb(p, n) {
            if (p.nombre_pages > n.nombre_pages) {
                return -1;
            } else if (p.nombre_pages < n.nombre_pages) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    console.log(this.chapitres);
}

let l1 = new Livre(1, 'livre', 150, [new chapitre('6', 16, 3), new chapitre('8', 20, 4), new chapitre('5', 55, 5)]);

