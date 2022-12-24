function Vetement(id,nom,couleur,description,prix)
{
    this.id =id;
    this.nom = nom;
    this.couleur = couleur;
    this.description = description;
    this.prix= prix;
}
Vetement.prototype.calculerPrixEnEuro = function()
{
    return this.prix * 0.09;
}
Vetement.prototype.calculerPrixEnDollar = function()
{
    return this.prix * 0.095;
}
Vetement.prototype.constructor = Vetement;

function Chemise(id,nom,couleur,description,prix,taille)
{
    Vetement.call(id,nom,couleur,description,prix,this);
    this.taille = taille;
}
Chemise.prototype.taille = function(){
    console.log("la taille est : "+ this.taille);
}
Chemise.prototype = Object.create(Vetement.prototype);
Chemise.prototype.constructor = Chemise;

function Pantalon(id,nom,couleur,description,prix,largeur,longueur)
{
    Vetement.call(id,nom,couleur,description,prix,this)
    this.largeur = largeur;
    this.longueur = longueur;
}
Pantalon.prototype.taille = function()
{
    console.log("longueur : "+this.longueur+" largeur: "+this.largeur);
}
Pantalon.prototype = Object.create(Vetement.prototype);
Pantalon.prototype.constructor = Pantalon;