// Écrivez un programme JavaScript pour calculer
// la somme des multiples de 3 et 5 inférieurs
// à 50 (utiliser une boucle for).

let somme = 0;
let affiche = "";
for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    affiche += i === 15 ? `${i} ` : `+ ${i} `;
    somme += i;
  }
}
affiche += ` = `;
console.log(affiche + somme);

// Écrivez un programme JavaScript pour séparer
// les valeurs paires et impaires d'un tableau en deux
// tableaux (l'ordre n'est pas important).

// Exemple : [1, -2, 3, 0, -1] -> [1, 3, 0] et [-2, -1]

function separationImpPair(tab) {
  let pai = [];
  let impaire = [];
  for (let i = 0; i < tab.length; i++)
    tab[i] % 2 === 0 ? pai.push(tab[i]) : impaire.push(tab[i]);
  return [pai, impaire];
}

separationImpPair([1, -2, 3, 0, -1]).forEach((el) => console.log(el));

// <===========================> //

// Écrivez un constructeur appelé Chapitre, qui a 3 propriétés :

//     nom : une chaîne de caractères.
//     nombre_pages : un nombre.
//     position : un nombre.

function Chapitre(nom, nombre_pages, pages) {
  this.nom = nom;
  this.nombre_pages = nombre_pages;
  this.pages = pages;
}

// Écrivez la méthode suivante :

//  chapitreLong : ne prend aucun paramètre,
// et renvoie true si le nombre de pages
// est supérieur à 100, sinon false.

Chapitre.prototype.chapitreLong = () => this.nombre_pages > 100;

// Écrivez un constructeur appelé Livre, qui a 4 propriétés :

//     id : un nombre.
//     titre : une chaîne de caractères.
//     prix : un nombre.
//     chapitres : un tableau d'objets créés à partir du constructeur Chapitre.

function Livre(id, titre, prix, chapitres) {
  this.id = id;
  this.titre = titre;
  this.prix = prix;
  this.chapitres = chapitres;
}

// Écrivez les méthodes suivantes :

//     sauterLongsChapitres : ne prend aucun paramètre, ne renvoie rien,
//  et supprime les chapitres longs de plus de 100 pages.

Livre.prototype.sauterLongsChapitres = function () {
  this.chapitres.forEach((chap, index) => {
    if (chap.nombre_pages > 100) {
      this.chapitres.splice(index, 1);
    }
  });
};

//     trierChapitres : prend un argument (soit "position", soit "nombre_pages"),
//  ne retourne rien, et trie les chapitres par position ou par nombre de pages.
Livre.prototype.trierChapitres = function (prop) {
  let chapitreTrier = this.chapitres.sort((currChap, nextChap) => {
    if (currChap[prop] > nextChap[prop]) {
      return 1;
    } else {
      return -1;
    }
  });
  console.table(chapitreTrier);
};
