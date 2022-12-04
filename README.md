# js-exercices
Solutions des exercices JavaScript
function etudiant(nom,module,age)
{
    this.nom=nom;
    this.module=module;
    this.age=age;

    this.exist = function (att)
    {
        for(let i in etudiant)
        {
            if(att===i)
            {
                return true;
            }
            else
            {
                return false ;
            }
        }
    }
}
let e = new etudiant ("HACHIM","JS",19.50);
e.age=21;
console.log(e.exist("nom"));
