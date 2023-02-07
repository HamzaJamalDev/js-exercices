


//QROL

//Appliquer

//-----1------

let somme=0
for(let i=0; i<50 ; i++){
    if(i%3==0 && i%5==0){
        somme+=i;
    }

}
console.log(somme);

//-----2------

let t1=[];
let t2=[];

for(let i=0;i<20;i++){
if(i%2==0){
    t1.push(i);
    console.log(t1[i]);
}
else 
    t2.push(i);
    console.log(t2[i]);
}

//Analyser

//----1----

function Chapitre(nom,nbr_pages,position)
{
    this.nom=nom;
    this.nombre_pages=nbr_pages;
    this.position=position;
}

Chapitre.prototype.chapitreLong=function(){
    if(this.nombre_pages>100)
    return true;
    else
        return false;
}

//----2----

function Livre(id,titre,prix,chapitres){
    this.id=id;
    this.titre=titre;
    this.prix=prix;
    this.chapitres=chapitres;
}

Livre.prototype.sauterLongsChapitres=function(){
    for(i=0;i<this.chapitres.length;i++)
    if(this.chapitres[i].nombre_pages>100){
    this.chapitres[i].splice(i,1);
    i--;
    }
}

Livre.prototype.trierChapitres=function(nombre_pages){

    this.chapitres.sort(function(a,b){
       
        if(a[nombre_pages]<b[nombre_pages])
        return -1;
        else if(a[nombre_pages]==b[nombre_pages])
        return 0;
        else
        return 1;
    }
    
    );
}


//exo php
//-------------1---------------
<?php
        for ($i = 1; $i <= 6; $i++) {
        echo "<h$i>Titre $i</h$i>\n";
        }
        ?>

        