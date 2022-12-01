
//ex4 objet
function Etudiant(n,p,a,no)
{
    this.nom=n;
    this.age=a;
    this.prenom=p;
    this.note=no;

}
Etudiant.prototype.prop = function(){
    let proto= 'nom';
    let c=0;
 for(let i in this)
 {
    if(i===proto) {c++; break;}
     
 }
if(c!=0) {return "se trouve";}
else return "se trouve pas";
};

let othmane=new Etudiant('badaoui','othmane',20,20);
//console.log(othmane);
console.log(othmane);
console.log(othmane.prop());
