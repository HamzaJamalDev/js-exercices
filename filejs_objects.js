//Exercice 2 (première partie)
function Personne(n, a, m) {
    this.nom = n;
    this.age = a;
    this.mail = m;
}

Personne.prototype.exist = function (x) {
    for (let item in this) {
        if (item == x) {
            return true;
        }
    }
    return false;
};

let aziz = new Personne(['aziz', 'ahmed'], 21, 'aziz.ahmed@emsi.ma');
console.log(aziz.exist('mail'));
