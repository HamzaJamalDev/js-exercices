//qst 1
let som = 0;
for (let i = 3; i < 50; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    som += i;
  }
}
console.log(som);

//qst2
let ini = [1, -2, 3, 0, -1];
let pair = [];
let impair = [];
    for(let i = 0; i < ini.length; i++)
    {
        if(ini[i]%2 == 0)
        {
            pair.push(ini[i]);
        }else {
            impair.push(ini[i]);
        }
    }
    console.log(ini);
    console.log(pair);
    console.log(impair);

//qst3
function Chapitre(nom, nb_pages, position)
{
	this.nom = nom;
	this.nb_pages = nb_pages;
	this.position = position;
}

Chapitre.prototype.chapitreLong = function(){
	if(nb_pages > 100)
		return true;
}
//qst4
chap=[new Chapitre("Ile",90,70),new Chapitre("Info",85,70)]
function Livre(id,titre,prix,chap)
{
	this.id = id;
	this.titre = titre;
	this.prix = prix;
    this.chap=chap;
}

Livre.prototype.sauterLongsChapitres = function(){
	if(chap[this.nb_pages] > 100)
		this.chap.splice(chap[this],1);
        
}
