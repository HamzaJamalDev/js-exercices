# js-exercices
Solutions des exercices JavaScript
EX4
function Personne(n, a, m) {
    this.nom = n;
    this.age = a;
    this.mail = m;
}

    Personne.prototype.Search = function(x){
        for(let item in this)
            if( item == x)
            {
                return 1;
                break;
            } 
    };

let aziz = new Personne(['aziz', 'ahmed'], 21, 'aziz.ahmed@emsi.ma');


console.log(aziz.Search('mail'));
//AYOUB
