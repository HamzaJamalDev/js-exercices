# Examen Blanc - Réponses
[Retourner à l'examen](../qsts/README.md)
## QCM (5 points)
### Comprendre et retenir
1. Qu'est-ce qu'un commit Git?
    - [x] Le processus d'enregistrement des modifications dans un dépôt Git.
    - [ ] Le processus de transfert des modifications d'une branche vers une autre branche.
    - [ ] Le processus de création d'une nouvelle branche.
    - [ ] Aucune de ces réponses.

2. JavaScript est un langage principalement
    - [x] Côté client.
    - [ ] Côté serveur.
    - [ ] Aucune de ces réponses.

3. Quelle est la syntaxe correcte pour écrire un tableau JavaScript?
    - [ ] ```let couleurs = "red", "blue", "green";```
    - [x] ```let couleurs = ["red", "blue", "green"];```
    - [ ] ```let couleurs = "red, blue, green";```
    - [ ] ```let couleurs = (red, blue, green);```

4. Un script PHP commence par
    - [ ]   ```<php```
    - [ ]   ```<link```
    - [x]   ```<?php```
    - [ ]   ```<script```

### Appliquer
1. Quelle est la commande permettant de vérifier l'état du dépôt Git?
    - [ ]   ```git check```
    - [x]   ```git status```
    - [ ]   ```git update```
    - [ ]   ```git report```


2. Quel est le résultat du code JavaScript suivant?
    ```javascript
    function test(x = 10, y = 20) {
        console.log(x + y);
    }
    test(20);
    ```

    - [ ] 30
    - [ ] Erreur
    - [x] 40
    - [ ] NaN

3. Quel est le résultat du code JavaScript suivant?
    ```javascript
    let livre = {
        id: 1,
        titre: "Python Crash Course"
    };

    for (let prop in livre) {
        if (prop === "id") {
            console.log(livre[prop]);
        }
    }
    ```

    - [ ] id
    - [x] 1
    - [ ] Python Crash Course
    - [ ] Erreur

4. Considérons le code JavaScript ci-dessous, quel sera le résultat de ce code si nous cliquons sur le bouton avec l'id *b1*?
    ```html
    <p id="p1">bonjour</p>
    <button id="b1">changer message</button>
    <script>
        let p1 = document.getElementById("p1");
        p1.onclick = function () {
            p1.textContent = "bonsoir";
        };
    </script>
    ```

    - [ ] Une erreur car nous avons utilisé la propriété ```onclick``` au lieu de la propriété ```click```.
    - [ ] "bonsoir", le contenu du ```<p>``` sera modifié.
    - [x] "bonjour", le contenu ```<p>``` ne sera pas modifié.
    - [ ] Une erreur parce que nous avons utilisé ```document``` au lieu de ```window.document```.

### Analyser
1. Quel est le résultat du code JavaScript suivant?
    ```javascript
    let x = 1;
    let y = 2;

    for (let i = -10; i <= 7; i++) {
        if (i < 5) {
            continue;
        }
        x++;
        y += i;
    }

    console.log(x, y);
    ```

    - [ ] 3 15
    - [ ] Erreur de syntaxe, nous ne pouvons pas commencer la boucle de -10.
    - [ ] 1 2
    - [x] 4 20

2. Quel est le résultat du code JavaScript suivant?
    ```javascript
    let obj = { "0": 1, "1": 2, "2": 1 };
    let tab = ["1", "2", "0"];
    let x = 1;

    for (let t of tab) {
        for (let i = 0; i < obj[t]; i++) {
            x += tab[i];  1 1 2 1 1
        }
    }

    console.log(x);
    ```

    - [ ] 1
    - [ ] Erreur de syntaxe
    - [ ] 6
    - [x] 11211

## QROC (5 points)
### Comprendre et retenir
1. Une fonction JavaScript peut être déclarée à l'aide du mot-clé (1) ________ suivi du nom de la fonction et d'un ensemble de paramètres entre parenthèses.

    Réponses :
    - (1) function

### Appliquer
1. Remplissez le vide pour créer un commit git avec le message "commit 1".

    ```git (1) ________ "commit 1```

    Réponses :
    - (1) commit -m

2. Affichez le message "bonjour".
    ```javascript
    let x = 1;

    switch (x) {
        case (1) ________:
            console.log("bonjour");
            (2) ________
        default:
            console.log("bonsoir");
    }
    ```

    Réponses :
    - (1) 1
    - (2) break

3. Affichez le message "bonjour".
    ```javascript
    (1) ________ function (message) {
        console.log(message);} (2) ________;
    ```

    Réponses :
    - (1) (
    - (2) )("bonjour")

4. Remplissez le vide pour changer la couleur de fond du paragraphe en rouge.
    ```html
    <p id="p1">bonjour</p>
    <script>
        let p1 = document.(1) ________("#p1");
        p1.(2) ________ = "red";
    </script>
    ```

    Réponses :
    - (1) querySelector
    - (2) style.backgroundColor

### Analyser
1. Affichez ce modèle.
    ```
        *
       ***
      *****
     *******
    *********
    ```

    ```javascript
    let lignes = (1) ________;
    let modele = "";
    for (let i = 1; i <= lignes; i++) {
        for (let j = 1; j < (2) ________; j++) {
          modele += (3) ________;
        }
        for (let k = 1; k < (4) ________; k++) {
          modele += (5) ________;
        }
        modele += "\n";
      }
    console.log(modele);
    ```

    Réponses :
    - (1) 5
    - (2) ligne - i + 1
    - (3) " "
    - (4) 2\*i
    - (5) "\*"

2. Répétez le message "bonjour" 3 fois.
    ```javascript
    function strNFois(str, n) {
        if ((1) ________) {
            return (2) ________;
        }

      return (3) ________ + " " + (4) ________;
    }

    let message = strNFois("bonjour", 3); //affichez "bonjour bonjour bonjour"
    console.log(message);
    ```

    Réponses :
    - (1) n === 1
    - (2) str
    - (3) str
    - (4) strNFois(str, n - 1)

3. Supprimez les valeurs inférieures à 10 du tableau.
    ```javascript
    let tab = [0, 12, 1, 3, 20];

    for (let i = 0; i < tab.length; i++) {
        if((1) ________){
            tab.(2) ________;
            (3) ________;
        }
    }

    console.log(tab);
    ```

    Réponses :
    - (1) tab[i] < 10
    - (2) splice(i, 1);
    - (3) i--

4. Supprimez du tableau les objets ayant une note inférieure à 10.
    ```javascript
    let notes = [{"nom":"loqman", "note":0},
                 {"nom":"ahmed", "note":12},
                 {"nom":"aziz", "note":1},
                 {"nom":"fatima", "note":3},
                 {"nom":"khadija", "note":20}];

    let i = 0;
    while((1) ________){
        if((2) ________){
            notes.(3) ________;
        } else {
            (4) ________;
        }
    }

    console.log(notes);
    ```

    Réponses :
    - (1) i < notes.length
    - (2) notes[i]["note"] < 10
    - (3) splice(i, 1)
    - (4) i++

5. Changez le contenu du paragraphe en cliquant sur le bouton.
    ```html
    <p class="parag">bouton pas encore cliqué</p>
    <button>cliquez</button>
    <script>
        let p = document.(1) ________('parag');
        let b = document.(2) ________;
        let toDo = function() {
            p[(3) ________].textContent = 'bouton cliqué';
        };
        b.(4) ________('click', (5) ________);
    </script>
    ```

    Réponses :
    - (1) getElementsByClassName
    - (2) querySelector("button")
    - (3) 0
    - (4) addEventListener
    - (5) toDo

## QROL (10 points)
### Comprendre et retenir
### Appliquer
1. Écrivez un programme JavaScript pour calculer la somme des multiples de 3 et 5 inférieurs à 50 (utiliser une boucle for).

    Exemple :
    15 + 30 + 45 = 90

    Réponse :
    ```javascript
        let somme = 0;

        for (let i = 0; i < 50; i++) 
            if (i % 3 == 0 && i % 5 == 0) 
                somme += i;
    
        console.log(somme);
    ```

2. Écrivez un programme JavaScript pour séparer les valeurs paires et impaires d'un tableau en deux tableaux (l'ordre n'est pas important).

    Exemple :
    [1, -2, 3, 0, -1] -> [1, 3, -1] et [-2, 0]


    Réponse :
    ```javascript
        Pairs = []
        Impairs = []

        for(let i of x)
        {
            if (i % 2 === 0)
                Pairs.push(i);
            else
                Impairs.push(i);
        }
        
        console.log(Pairs)
        console.log(Impairs)
    ```

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
    ```javascript
        function Chapitre(n, nb, p)
        {
            this.nom = n
            this.nombre_pages = nb
            this.position = p
        }

        Chapitre.prototype.chapitreLong = function()
        {
            return this.nombre_pages > 100;
        }

        function Livre(i, t, p, c)
        {
            this.id = i
            this.titre = t
            this.prix = p
            this.chapitres = c
        }
        Livre.prototype.sauterLongsChapitres = function()
        {
            for (let i = 0; i < this.chapitres.length; i++)
            {
                if (this.chapitres[i].chapitreLong())
                {
                    this.chapitres.splice(i,1)
                    i--
                }
            }
        }

        Livre.prototype.trierChapitres = function()
        {
            this.chapitres.sort((x,y) => x.nb - y.nb)
        }
    ```

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
    <?php for ($i = 1; $i < 7; $i++) { ?>
        <h1>titre <?= $i ?></h1>
    <?php } ?>
    ```

## Remarques
- Pour chaque question dans la partie QCM :
    - 1 choix est vrai, les autres sont faux.
    - Vous obtiendrez 0,5 si la réponse est correcte, sinon 0.
- Si vous proposez une solution ici pour la partie QROL sous forme de pull request, vous recevrez un bonus +1 dans l'examen final.
