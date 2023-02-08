# Examen Blanc - Réponses
[Retourner à l'examen](../qsts/README.md)


## QROL (10 points)
### Comprendre et retenir
### Appliquer
1. Écrivez un programme JavaScript pour calculer la somme des multiples de 3 et 5 inférieurs à 50 (utiliser une boucle for).

    Exemple :
    15 + 30 + 45 = 90

    Réponse :
       let sum=0;
    for(let i=0;i<50;i++)
      {
        if(i%3===0 && i%5===0)
        {
           sum+=i;
        }
      }
    console.log(sum);

2. Écrivez un programme JavaScript pour séparer les valeurs paires et impaires d'un tableau en deux tableaux (l'ordre n'est pas important).

    Exemple :
    [1, -2, 3, 0, -1] -> [1, 3, -1] et [-2, 0]


    Réponse :
   let tab=[1,-2,3,0,-1];
    function pairimpair(tab)
    {
        let paire=[];
        let impaire=[];
        for(let i=0;i<tab.length;i++)
        {
            if(tab[i]%2===0)
            {
                paire.push(tab[i]);
            }
            else{
                impaire.push(tab[i]);
            }
        }
        console.log(" tableau paire:")
            for(let i=0;i<paire.length;i++)
              {
                 console.log(paire[i]);
              }
          console.log(" tableau impaire:")
              for(let i=0;i<impaire.length;i++)
              {
                  console.log(impaire[i]);
              }
    }
    pairimpair(tab);
### Analyser
1. Écrivez un constructeur appelé Chapitre, qui a 3 propriétés :
    - nom : une chaîne de caractères.
    - nombre_pages : un nombre.
    - position : un nombre.

    Écrivez la méthode suivante :
    - chapitreLong : ne prend aucun paramètre, et renvoie *true* si le nombre de pages est supérieur à 100, sinon *false*.

    Écrivez un constructeur appelé Livre, qui a 4 propriétés :
    - id : un nombre.
    - titre : une chaîne de caractères.
    - prix : un nombre.
    - chapitres : un tableau d'objets créés à partir du constructeur Chapitre.

    Écrivez les méthodes suivantes :
    - sauterLongsChapitres : ne prend aucun paramètre, ne renvoie rien, et supprime les chapitres longs de plus de 100 pages.
    - trierChapitres : prend un argument (soit "position", soit "nombre_pages"), ne retourne rien, et trie les chapitres par position ou par nombre de pages.

    Réponse :
     function chapitre(nom,nombre_page,position)
 {
    this.nom=nom;
    this.nombre_page=nombre_page;
    this.position=position;
 }

 chapitre.prototype.chapitreLong=function()
 {
    if(this.nombre_page>100)
          {  return true;}
     else
         { return false; }
 }
 function livre(id,titre,prix,chapitres)
 {
    this.id=id;
    this.titre=titre;
    this.prix=prix;
    this.chapitres=chapitres;
 }
 livre.prototype.sauterLongsChapitres=function()
 {
    for(let i=0;i<this.chapitres.length;i++)
    {
        if(this.chapitres[i]>100)
        {
            this.chapitres.splice(i,1);
        }
    }
 }

 livre.prototype.trierChapitre=function(prop)
 {
    this.chapitres.sort(function(a,b)
    {
        if(a[prop]<b[prop])
        {
            return-1;
        }
    else if(a[prop]>b[prop])
     {
        return 1;
     }
     else
     {
        return 0;
     }
    })
 }
2. Écrivez un code PHP pour afficher les titres HTML de h1 à h6 (utiliser une boucle for).
    ```html
    <h1>titre 1</h1>
    <h2>titre 2</h2>
    <h3>titre 3</h3>
    <h4>titre 4</h4>
    <h5>titre 5</h5>
    <h6>titre 6</h6>
    ```

    Réponse :
    ```php
    <?php
        //code
    ?>
       <?php
for($i=1;$i<=6;$i++)
{ 
  echo"<h$i>titre $i</h$i>";
}
?>

## Remarques
- Pour chaque question dans la partie QCM :
    - 1 choix est vrai, les autres sont faux.
    - Vous obtiendrez 0,5 si la réponse est correcte, sinon 0.
- Si vous proposez une solution ici pour la partie QROL sous forme de pull request, vous recevrez un bonus +1 dans l'examen final.
