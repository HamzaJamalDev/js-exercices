## QROL (10 points)
### Comprendre et retenir
### Appliquer

    Réponses :
    ```javascript
        function sommeDesMultiplesDe3(){
            let M=0;
            for(let i =0;i<=50;i++){
                if (i % 3 == 0 && i % 5 == 0){
                M += i;
                }
            }
            return M;
        }
        console.log(sommeDesMultiplesDe3());
    ```

    Réponses :
    ```javascript
        function séparerLesValeursPairesEtImpaires(){
            let tab = [1, -2, 3, 0, -1];
            let pair = [];
            let impair = [];
            for (let v of tab) {
                if (v % 2 == 0) {
                    pair.push(v);
                } 
                else {
                    impair.push(v);
                }
            }
            console.log(pair);
            console.log(impair);
        }
        séparerLesValeursPairesEtImpaires();
    ```

### Analyser

    Réponses :
    ```javascript 

        function Chapitre(nom, nombre_pages, position) {
            this.nom = nom;
            this.nombre_pages = nombre_pages;
            this.position = position;
        }

        Chapitre.prototype.chapitreLong = function() {
            return (this.nombre_pages > 100);
        };

        function Livre(id, titre, prix, chapitres) {
            this.id = id;
            this.titre = titre;
            this.prix = prix;
            this.chapitres = chapitres;
        }

        Livre.prototype.sauterLongsChapitres = function() {
            let chapitresCourts = [];
            for (let chapitre of this.chapitres) {
                if (!chapitre.chapitreLong()) {
                    chapitresCourts.push(chapitre);
                }
            }
            this.chapitres = chapitresCourts;
        };

        Livre.prototype.trierChapitres = function(arg) {
            if (arg == 'position') {
                this.chapitres.sort((a, b) => a.position - b.position);
            } 
            else if (arg == 'nombre_pages') {
                this.chapitres.sort((a, b) => a.nombre_pages - b.nombre_pages);
            }
        }

    ```


    Réponses :
    ```php
    
        <?php
        for ($i = 1; $i <= 6; $i++) {
        echo "<h$i>Titre $i</h$i>\n";
        }
        ?>

    ```
