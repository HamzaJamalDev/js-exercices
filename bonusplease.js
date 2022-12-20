let etudiant_1={nom:"Ibrahim Achtouk",
module:"js",
note:20

};
function count() {
let cpt=0;

for (let i in etudiant_1  )
{
cpt++;

}
return cpt ;}

let x=count();
console.log(x);