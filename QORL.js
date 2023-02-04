
let somme =0;
    for(let i = 0; i < 50;i++)
    {
        if(i%3==0 && i%5==0)
        {
            somme +=  i;
        }
    }
    console.log(somme);






let s = [1, -2, 3, 0, -1];
let a = [];
let b = [];
    for(let i = 0; i < s.length; i++)
    {
        if(s[i]%2 == 0)
        {
            a.push(s[i]);
        }else {
            b.push(s[i]);
        }
    }
    console.log(s);
    console.log(a);
    console.log(b);









function Chapitre(nom, nombre_pages, position)
{
	this.nom = nom;
	this.nombre_pages = nombre_pages;
	this.position = position;
}

Chapitre.prototype.chapitreLong = function(){
	if(nombre_pages > 100)
		return true;
}

function Livre(id, titre, prix, Chapitres=[]){
	this.id = id;
	this.titre = titre;
	this.prix = prix;
	this.Chapitres = Chapitres;
}

Livre.prototype.sauterLongsChap = function(){
 let x =  0;
	for(let chap of this.Chapitres)
{
	if(chap.chapitreLong)
{
	Chapitres.splice(x,1);
}
	else 
		x++;
}
}

Livre.prototype.trierEl =  function(position){
	this.Chapitres.sort(function(a,b)
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
