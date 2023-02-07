function chapitre(nom,nombres_pages,position){
    this.nom=nom;
    this.nombres_pages=nombres_pages;
    this.position=position;
    }
    chapitre.prototype.chapitreLong=function(){
    if (this.nombres_pages>100)
      return true;
    else 
     return false;
    }
    
    
    function livre(id,titre,prix,chapitres){
     this.titre=titre;
    this.id=id;
    this.prix=prix;
    this.chapitres=chapitres;
    }
    livre.prototype.constructor=livre;
    livre.prototype=object.create(chapitre.prototype);
    livre.prototype.sauterLONG=function(){
    for(let i=0;i<chapitres.lenght;i++){
    if(chapitreLong()===true)
    splice(i,1)
    chapitres.sort((a,b)=>{
     return a-b});
    }
};
//////qst 1
    let s=0; 
    for(let i=0;i<50;i++){
    if( i%3 && i%5)
    {let s=0;
     s=s+i;
    }
    }
    /////qst2
    let tab_paire;
    let tab_impaire;
for(let i=0;i<tab.lenght;i++)
{
    if(tab[i]%2==0)
    {
        tab_paire.push(tab[i]);
    }
    else
    {   
        tab_impaire.push(tab[i]);
    }
}




    //php
    for($i=1;$i<7;i++)
{
    echo "<h{$i}>Titre {$i}</h{$i}>\n";
}