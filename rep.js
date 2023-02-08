
////////
//1/Écrivez un programme JavaScript pour calculer la somme des multiples de 3 et 5 inférieurs à 50 (utiliser une boucle for).


let sum = 0;

for (let i = 0; i < 50; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
//test
console.log("La somme est "+sum);

//2/ Écrivez un programme JavaScript pour séparer les valeurs paires et impaires d'un tableau en deux tableaux (l'ordre n'est pas important).


function parite(tab) {
    var tabPair = [];
    var tabImpair = [];
    for (var i = 0; i < tab.length; i++) {
      if (tab[i] % 2 === 0) {
        tabImpair.push(tab[i]);
      } 
      else 
      {
        tabPair.push(tab[i]);
      }
    }

    console.log("Les nombres pairs: "+tabPair);
    console.log("Les nombres impairs: "+tabImpair);
}
//test  
let tableau1=[1,75,9,4,0,2,67];
parite(tableau1);


//ANALYSE
//1

function Chapitre (nom,nombre_pages,position)
{
    this.nom=nom;
    this.nombre_pages=nombre_pages;
    this.position=position;
}

Chapitre.prototype.chapitreLong=function()
{
    if(this.nombre_pages > 100)
    {
        return true;
    }
    return false;
};
//Test
let chap= new Chapitre("Premier chapitre",17,"milieu");
let chap2= new Chapitre("Deuxieme chapitre",90,"fin");
let chap3= new Chapitre("Troisieme chapitre",150,"debut");

console.log(chap.chapitreLong());

function Livre(id,titre,prix,Chapitres)
{
    this.id=id;
    this.titre=titre;
    this.prix=prix;
    this.Chapitres=Chapitres;
}

Livre.prototype.sauterLongsChapitres=function()
{
    for(let i=0; i<this.Chapitres.length ; i++)
    {
        if(this.Chapitres[i].chapitreLong()=== true)
        {
            this.Chapitres.splice(i,1);
        }
    }
};
let liv= new Livre(12325, "Le roi", 560,[chap,chap2,chap3]);

//test
/*
console.table(liv.Chapitres);
liv.sauterLongsChapitres();
console.table(liv.Chapitres);
*/

Livre.prototype.trierChapitres =function(prop)
{

    while(prop === "position" || prop === "nombre_pages")
    {
         this.Chapitres.sort(function(a,b)
     {
         if(a[prop]<b[prop])
         {
             return -1;
         }
         else if(a[prop]>b[prop])
         {
             return 1;
         }
         else{return 0;}
     }
     );
    }
};

console.table(liv.Chapitres);
liv.trierChapitres("position");
console.table(liv.Chapitres);

