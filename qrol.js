/////question 1:

let s=0;
for(let i=0;i<50;i++)
{
    if(i%3==0 and i%5==0)
    {
        s+= i;
    }
}


////question 2:
let tab1;
let tab2;
for(let i=0;i<tab.lenght;i++)
{
    if(tab[i]%2==0)
    {
        tab1.push(tab[i]);
    }
    else
    {   
        tab2.push(tab[i]);
    }
}


//////analyser question 1:
function Chapitre(nom,nbr_page,position)
{
    this.nom = nom;
    this.nbr_page = nbr_page;
    this.position = position;
}

Chapitre.prototype.chapitrelong = function()
{
    if (this.nbr_page>100)
        return true;
    return false;
};
 function Livre(id,titre,prix,chapitres)
 {
    this.id = id;
    this.titre = titre;
    this.prix = prix;
    this.chapitres = chapitres;
 }

 Livre.prototype.sauterlongschapitres = function()
 {
    for(let i=0;i<this.chapitres.length;i++)
    {
        if(this.chapitres[i].nbr_page>100)
        {
            this.chapitres.splice(i,1);
            i--;
        }
    }
 }
 Livre.prototype.trierchapitres = function(prop)
 {
    this.Livre.chapitres.sort(function (a,b){
    {
        if (a[prop]<b[prop])
        return -1;
        else if(a[prop]==b[prop])
        return 0;
        else
        return 1;
    }
 });
}


/////question 2:

for($i=1;$i<7;i++)
{
    echo "<h{$i}>Titre {$i}</h{$i}>\n";
}
