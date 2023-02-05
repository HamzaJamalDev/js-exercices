let somme =0;
    for(let i = 6; i < 50;i++)
    {
        if(i%3==0 && i%5==0)
        {
            somme +=  i;
        }
    }
    console.log(somme);






let tab = [1, -2, 3, 0, -1];
let a = [];
let b = [];
    for(let i = 0; i < tab.length; i++)
    {
        if(tab[i]%2 == 0)
        {
            a.push(tab[i]);
        }else {
            b.push(tab[i]);
        }
    }
    console.log(tab);
    console.log(a);
    console.log(b);

function chapitre(n,nombre,pos)
{
    this.nom=n;
    this.nombre_pages=nombre;
    this.position=pos;
}

chapitre.prototype.chapitrelong = function(){
    if(this.nombre_pages>100)
    {return true;}
    else false;
};
let gg= new chapitre("gg",500,100);
let go= new chapitre("go",200,200);
console.log(gg.chapitrelong());



function livre(n,pr,pos,ti)
{
    this.id=n;
    this.titre=ti;
    this.prix=pr;
    this.chapitres=pos;
}




livre.prototype.sauter = function(){
    for(let i =0 ;i<this.chapitres.length;i++)
    {
        if(this.chapitres[i].nombre_pages >100)
        this.chapitres.splice(i,1);
    }
};

let li = new livre(111,"av",[gg,go],111);
console.log(li.chapitres);


livre.prototype.trier = function(position){
    this.chapitres.sort(function(a,b)
    {
        if(a[position] < b[position]){
            return -1;
        }
        else if(a[position] > b[position]){
            return 1;
        }
        else 
            return 0;
    }
    );

};


/*<?php
        for ($i = 1; $i <= 6; $i++) {
            echo "<h".$i.">Titre de niveau" .$i."</h" .$i. ">";
        }
        
?>*/


















