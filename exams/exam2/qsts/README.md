# Examen
[Montrer les réponses](../reps/README.md)
## QCM (5 points)
### Comprendre et retenir
1. Qu'est-ce qu'un dépôt dans Git?
    - [ ] Un endroit pour stocker et organiser les fichiers du projet, les dossiers et leurs versions.
    - [ ] Une modification spécifique dans un fichier.
    - [ ] Une ligne de développement distincte au sein d'un projet.
    - [ ] Aucune de ces réponses.

2. JavaScript est un langage :
    - [ ] Interprété
    - [ ] Compilé
    - [ ] Autre

3. Quelle est la méthode utilisée pour ajouter un élément à la fin d'un tableau en JavaScript?
    - [ ] ```add();```
    - [ ] ```insert();```
    - [ ] ```append();```
    - [ ] ```push();```

4. À quel endroit s’exécute un script PHP?
    - [ ]  Dans le serveur web.
    - [ ]  Dans le navigateur du client.
    - [ ]  Aucune des réponses ci-dessus n'est vraie.

### Appliquer
1. Quelle est la commande utilisée pour initialiser un dépôt Git dans un dossier local?
    - [ ] ```git init```
    - [ ] ```git create```
    - [ ] ```git start```
    - [ ] ```git new```

2. Quel est le résultat du code suivant en JavaScript?
    ```javascript
    function bonjour() {
        return;
        console.log("Bonjour");
    }
    console.log(bonjour());
    ````

    - [ ] Bonjour
    - [ ] ```undefined```
    - [ ] Erreur
    - [ ] ```null```

3. Quel est le résultat du code JavaScript suivant?
    ```javascript
    let tab = [1, 2, 3];
    for (let t of tab) {
        if (t <= 2) {
            console.log(t);
        }
    }
    ```
    - [ ] 1 2 3
    - [ ] 1 2
    - [ ] 1
    - [ ] Rien

4. Considérons le code JavaScript suivant qui manipule le DOM :
    ```html
    <p>Hello, world!</p>
    <script>
      let p = document.getElementById("p");
      p.textContent = "Bonjour tout le monde";
    </script>
    ```

    Quel sera le résultat de ce code ?

    - [ ] Une erreur car ```textContent``` n'est pas une propriété de l'objet sélectionné.
    - [ ] *"Hello, world !"*, l'élément ```p``` n'a pas été sélectionné.
    - [ ] *"Bonjour tout le monde"*, l'élément ```p``` a été sélectionné.
    - [ ] Une erreur parce que ```getElementById``` n'est pas une méthode de l'objet ```document```.

### Analyser
1. Quel est le résultat du code JavaScript suivant?
    ```javascript
    let x = 1;
    let y = "2";

    for (let i = 0; true; i++) {
        if (i === 3) {
            break;
        } else {
            i = 2;
            continue;
        }
        x++;
        y += 2;
    }

    console.log(x, y);
    ```

    - [ ] Rien, car c'est une boucle infinie.
    - [ ] Erreur de syntaxe, nous ne pouvons pas utiliser une condition ```true``` dans la boucle.
    - [ ] 1 2
    - [ ] 2 4
    - [ ] 2 22

2. Quel est le résultat du code JavaScript suivant?
    ```javascript
    let obj = { "0": 1, "1": 2, "2": 3 };
    let tab = [1, 2, 3, 4];
    let x = 0;

    for (let prop in obj) {
        for (let i = 1; i < obj[prop]; i++) {
            x += tab[i];
        }
    }

    console.log(x);
    ```

    - [ ] 2
    - [ ] Erreur de syntaxe
    - [ ] 7
    - [ ] 6

## QROC (5 points)
### Comprendre et retenir
1. Une fonction qui appelle elle-même est connue sous le nom de (1) __________.

### Appliquer
1. Remplissez le vide pour créer une liste ordonnée avec trois éléments.
    ```html
    <(1) ________>
        <(2) ________>élément 1</________>
        <________>élément 2</________>
        <________>élément 3</________>
    </________>
    ```

2. Affichez la valeur la plus grande.
    ```javascript
    let x = prompt();
    let y = prompt();

    if((1) ________){
        console.log(x);
    } else {
        console.log(y);
    }
    ```

3. Affichez le message *"bonjour"*.
    ```javascript
    (1) ________ function (message) {
        console.log(message);
    };
    afficher("bonjour");
    ```

4. Remplissez le vide pour changer la couleur du texte du paragraphe en bleu.
    ```html
    <p (1) ________>Bonjour</p>
    <script>
      let p1 = document.getElementsByClassName("paragraphes")(2) ________;
      p1.(3) ________ = "blue";
    </script>
    ```

### Analyser
1. Affichez ce modèle.
    ```
    * * *
     * *
    * * *
     * *
    * * *
    ```

    ```javascript
    let lignes = (1) ________;
    let modele = "";
    for(let i=0; (2) ________; i++){
        if((3) ________) {
            modele += (4) ________;
        } else {
            modele += (5) ________;
        }
    }
    console.log(modele);
    ```

2. Calculez 1/n!.
    ```javascript
    function unSurNFactorial(n) {
      if ((1) ________) {
        return (2) ________;
      }
      return (3) ________ * (4) ________;
    }
    let n = 4;
    console.log(unSurNFactorial(n)); // 1/4! = 1/24
    ```

3. Affichez les 2 valeurs les plus grandes du tableau.
    ```javascript
    let tab = [1, -2, 0, 4];

    tab.(1) ________;

    console.log(tab[(2) ________], tab[(3) ________]);
    ```

4. Afficher la valeur la plus grande parmi les valeurs des propriétés d'un objet.
    ```javascript
    let obj = {"a": 1, "b": -2, "c": 0, "d": 4};
    let (1) ________;

    for(let prop in obj){
        (2) ________;
        (3) ________;
    }

    console.log((4) ________);
    ```

5. Modifiez le contenu de l'élément ```div``` lorsque l'on place le curseur dessus.
    ```html
    <div>placez le curseur ici</div>
    <script>
        let div = document.(1) ________('div');
        div.(2) ________('(3) ________', (4) ________ {
            div.(5) ________ = 'le curseur est sur cet élément';
        });
    </script>
    ```

## QROL (10 points)
### Comprendre et retenir
### Appliquer
1. Écrivez un code JavaScript pour calculer la somme des carrés de n nombres (utiliser une boucle for).

    Exemple : n = 4 -> 1² + 2² + 3² + 4² = 30

2. Écrivez un code JavaScript pour inverser un tableau.

    Exemple : [1, 4, 3, 0] -> [0, 3, 4, 1]

### Analyser
1. Écrivez un constructeur appelé Personne, qui a 2 propriétés :
    - nom : une chaîne de caractères.
    - age : un nombre.

    Écrivez la méthode suivante :
    - ageInvalide : ne prend aucun paramètre, et renvoie *true* si l'âge est supérieur à 150 ans ou inférieur à 1 an, sinon *false*.

    Écrivez un constructeur appelé Ville, qui a 2 propriétés :
    - nom : une chaîne de caractères.
    - population : un tableau d'objets créés à partir du constructeur Personne.

    Écrivez les méthodes suivantes :
    - ajouterNAns : prend le paramètre n, ne retourne rien, et ajoute n ans à chaque personne de la population, retire la personne de la population si l'âge n'est plus valide (supérieur à 150 ans).
    - soustraireNAns : prend le paramètre n, ne retourne rien, et soustrait n ans pour chaque personne de la population, retire la personne de la population si l'âge n'est plus valide (inférieur à 1 an).
    - trierPopulation : ne prend aucun paramètre, ne retourne rien, et trie la population selon l'age.

2. Écrivez un code PHP pour afficher les nombres de 1 à 5 modulo 3 (utiliser une boucle for).
    ```html
    <ul>
        <li>1 mod 3 = un</li>
        <li>2 mod 3 = deux</li>
        <li>3 mod 3 = zero</li>
        <li>4 mod 3 = un</li>
        <li>5 mod 3 = deux</li>
    </ul>
    ```

## Remarques:
- Pour chaque question dans la partie QCM :
    - 1 choix est vrai, les autres sont faux.
    - Vous obtiendrez 0,5 si la réponse est correcte, sinon 0.
