# Examen - Réponses
[Retourner à l'examen](../qsts/README.md)
## QCM (5 points)
### Comprendre et retenir
1. Qu'est-ce qu'un dépôt dans Git?
    - [x] Un endroit pour stocker et organiser les fichiers du projet, les dossiers et leurs versions.
    - [ ] Une modification spécifique dans un fichier.
    - [ ] Une ligne de développement distincte au sein d'un projet.
    - [ ] Aucune de ces réponses.

2. JavaScript est un langage :
    - [x] Interprété
    - [ ] Compilé
    - [ ] Autre

3. Quelle est la méthode utilisée pour ajouter un élément à la fin d'un tableau en JavaScript?
    - [ ] ```add();```
    - [ ] ```insert();```
    - [ ] ```append();```
    - [x] ```push();```

4. À quel endroit s’exécute un script PHP?
    - [x]  Dans le serveur web.
    - [ ]  Dans le navigateur du client.
    - [ ]  Aucune des réponses ci-dessus n'est vraie.

### Appliquer
1. Quelle est la commande utilisée pour initialiser un dépôt Git dans un dossier local?
    - [x] ```git init```
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
    - [x] ```undefined```
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
    - [x] 1 2
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
    - [x] *"Hello, world !"*, l'élément ```p``` n'a pas été sélectionné.
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
    - [x] 1 2
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
    - [x] 7
    - [ ] 6

## QROC (5 points)
### Comprendre et retenir
1. Une fonction qui appelle elle-même est connue sous le nom de (1) __________.

    Réponses :
    - (1) fonction récursive

### Appliquer
1. Remplissez le vide pour créer une liste ordonnée avec trois éléments.
    ```html
    <(1) ________>
        <(2) ________>élément 1</________>
        <________>élément 2</________>
        <________>élément 3</________>
    </________>
    ```

    Réponses :
    - (1) ol
    - (2) li

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

    Réponses :
    - (1) parseInt(x) > parseInt(y) ou bien +x > +y

3. Affichez le message *"bonjour"*.
    ```javascript
    (1) ________ function (message) {
        console.log(message);
    };
    afficher("bonjour");
    ```

    Réponses :
    - (1) afficher =

4. Remplissez le vide pour changer la couleur du texte du paragraphe en bleu.
    ```html
    <p (1) ________>Bonjour</p>
    <script>
      let p1 = document.getElementsByClassName("paragraphes")(2) ________;
      p1.(3) ________ = "blue";
    </script>
    ```

    Réponses :
    - (1) class="paragraphes"
    - (2) [0]
    - (3) style.color

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

    Réponses :
    - (1) 5
    - (2) i < lignes
    - (3) i % 2 === 0
    - (4) "\* \* \*\n"
    - (5) " \* \* \n"

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

    Réponses :
    - (1) n === 0 ou n === 1 ou n < 1
    - (2) 1
    - (3) 1/n
    - (4) unSurNFactorial(n-1)

3. Affichez les 2 valeurs les plus grandes du tableau.
    ```javascript
    let tab = [1, -2, 0, 4];

    tab.(1) ________;

    console.log(tab[(2) ________], tab[(3) ________]);
    ```

    Réponses :
    - (1) sort()
    - (2) tab.length - 1
    - (3) tab.length - 2

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

    Réponses :
    - (1) tab = []
    - (2) tab.push(obj[prop])
    - (3) tab.sort()
    - (4) tab[tab.length - 1]

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

    Réponses :
    - (1) querySelector
    - (2) addEventListener
    - (3) mouseover
    - (4) function ()
    - (5) textContent

## QROL (10 points)
### Comprendre et retenir
### Appliquer
1. Écrivez un code JavaScript pour calculer la somme des carrés de n nombres (utiliser une boucle for).

    Exemple : n = 4 -> 1² + 2² + 3² + 4² = 30

    Réponse :
    ```javascript
    n = 4;
    s = 0;

    for(let i = 0; i <= n; i ++){
        s += i ** 2; // s += i * i;
    }

    console.log(s);
    ```

2. Écrivez un code JavaScript pour inverser un tableau.

    Exemple : [1, 4, 3, 0] -> [0, 3, 4, 1]

    Réponse 1 :
    ```javascript
    let tab = [1, 4, 3, 0];
    let tab_inv = [];

    for(let i = tab.length - 1; i >= 0; i--){
        tab_inv.push(tab[i]);
    }

    console.log(tab_inv);
    ```

    Réponse 2 :
    ```javascript
    let tab = [1, 4, 3, 0];
    let temp;

    for(let i = 0; i < tab.length / 2; i++){
        temp = tab[i];
        tab[i] = tab[tab.length - 1 - i];
        tab[tab.length - 1 - i] = temp;
    }

    console.log(tab);
    ```

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

    Réponse :
    ```javascript
    function Personne(nom = "", age = 0) {
        this.nom = nom;
        this.age = age;
    }

    Personne.prototype.ageInvalide = function () {
        if (this.age > 150 || this.age < 1) {
            return true;
        } else {
            return false;
        }
    };

    /*
    Personne.prototype.ageInvalide = function () {
        return this.age > 150 || this.age < 1;
    };
    */

    function Ville(nom = "", population = []) {
        this.nom = nom;
        this.population = population;
    }

    Ville.prototype.ajouterNAns = function (n = 0) {
        for (let i = 0; i < this.population.length; i++) {
            this.population[i].age += n;

            if (this.population[i].ageInvalide()) {
            this.population.splice(i, 1);
            i--;
            }
        }
    };

    Ville.prototype.soustraireNAns = function (n = 0) {
        for (let i = 0; i < this.population.length; i++) {
            this.population[i].age -= n;

            if (this.population[i].ageInvalide()) {
            this.population.splice(i, 1);
            i--;
            }
        }
    };

    Ville.prototype.trierPopulation = function () {
        this.population.sort(function (pers1, pers2) {
            if (pers1["age"] < pers2["age"]) {
            return -1;
            } else if (pers1["age"] > pers2["age"]) {
            return 1;
            } else {
            return 0;
            }
        });
    };

    // test
    let personne1 = new Personne("Ahmed", 20);
    let personne2 = new Personne("Aziz", 119);
    let personne3 = new Personne("Meriam", 85);
    let personne4 = new Personne("Zineb", 42);

    let ville1 = new Ville("Casa", [personne1, personne2, personne3, personne4]);

    ville1.ajouterNAns(35);
    console.log(ville1.population);

    ville1.soustraireNAns(60);
    console.log(ville1.population);

    ville1.trierPopulation();
    console.log(ville1.population);
    ```

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

    Réponse 1 :
    ```php
    <ul>
        <?php
        $resultats = ["zero", "un", "deux"];
        for ($i = 1; $i <= 5; $i++) :
        ?>
            <li><?= $i; ?> mod 3 = <?= $resultats[$i % 3]; ?></li>
        <?php
        endfor;
        ?>
    </ul>
    ```

    Réponse 2 :
    ```php
    <ul>
        <?php
        for ($i = 1; $i <= 5; $i++) {
            $resultat = "";
            if ($i % 3 == 0) {
                $resultat = "zero";
            } else if ($i % 3 == 1) {
                $resultat = "un";
            } else {
                $resultat = "deux";
            }
        ?>
            <li><?php echo $i; ?> mod 3 = <?php echo $resultat; ?></li>
        <?php
        }
        ?>
    </ul>
    ```

## Remarques:
- Pour chaque question dans la partie QCM :
    - 1 choix est vrai, les autres sont faux.
    - Vous obtiendrez 0,5 si la réponse est correcte, sinon 0.
