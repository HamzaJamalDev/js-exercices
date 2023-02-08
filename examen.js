
//QROL 
//Appliquer 1:
let somme = 0;
for(let i=1; i<=50; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(i);
        somme = somme+i;
    }
}
console.log("somme: "+somme);

//2)
let tab = [1, 2, 17, 4, 12, 15];
let pair = [];
let impair = [];
for(let i=0; i< tab.length ; i++){
    if(tab[i]%2 == 0 && tab[i]/tab[i] == 1){
        pair.push(tab[i]);
    }
    else{
        impair.push(tab[i]);
    }
}
console.log("pair:");
console.log(pair);
console.log("impair:");
console.log(impair);

//////////////////////////////////////////////////////////////////
//les constructeurs:
function Chapitre(nom,nbr_pages,position){
    this.nom = nom;
    this.nombre_pages = nbr_pages;
    this.position = position;
}
Chapitre.prototype.chapitreLong = function(){
    if(this.nombre_pages > 100){
        return true;
    }
    else{
        return false;
    }
}
let chap1 = new Chapitre("hafsa",300,"pos1");
let chap2 = new Chapitre("uuu",900,"pos2");
let chap3 = new Chapitre("ddd",760,"pos3");


function Livre(id,titre,prix,chaps=[]){
    this.id = id;
    this.titre = titre;
    this.prix = prix;
    this.chapitres = chaps; 
}
Livre.prototype.sauterLongsChapitres = function(){
    for(let i=0; i<this.chapitres.length;i++){
        if(this.chapitres[i].nombre_pages>100){
            this.chapitres.splice(i,2);
        }
    }
}
let livre1 = new Livre(21,"surounded by idiots",400,[chap1,chap2,chap3]);
livre1.sauterLongsChapitres();
console.log(livre1);

Livre.prototype.trierChapitres = function(prop){
    this.chapitres.sort(function(a,b){
        if(a[prop] > b[prop]){
            return 1;
        }
        else if(a[prop] < b[prop]){
            return -1;
        }
        else{
            return 0;
        }
    });
}

livre1.trierChapitres("nombre_pages");
console.log(livre1);
