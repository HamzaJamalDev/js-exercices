//1
function threefive(){
    let s=0;
    for(let i=0; i<50; i++){
        if(i%5==0 && i%3==0) s+=i;
    }
    return s;
}
//2
function intwo(odd){
    let even = [];
    for(let i=0; i<odd.length; i++){
      if(odd[i]%2 == 0){
        even.push(odd[i]);
        odd.splice(i,1);
        i--;
      }
    }
    return even;
  }
//fixed :p 
let odd=[1,20,2,65,12,98,11,77,45,32,145];
let even=intwo(odd);
console.log(`les impairs : ${odd}\nles pairs : ${even}`);
//3
function chapitre(nom="", nombres_pages, position){
    this.nom = nom;
    this.nombres_pages = nombres_pages;
    this.position = position;
}
chapitre.prototype.chapitreLong= function(){
    return this.nombres_pages>100;
}
function livre(id, titre="", prix, chapitres=[]){
    this.id = id;
    this.titre = titre;
    this.prix = prix;
    this.chapitres = chapitres;
}
livre.prototype.sauterLongsChapitres = function (){
    let x = this.chapitres;
    for(let i=0; i<x.length;i++){
        if(x[i].chapitreLong()===true){
            x.splice(i,1);
            i--;
        }
    }
}
livre.prototype.trierChapitres = function (x){
    this.chapitres.sort((a, b)=>{
        if(a[x]>b[x]) return 1;
        else if(a[x]<b[x]) return -1;
        else
            return 0;
    });
}
let arr=[new chapitre("stranger", 90 , 5), new chapitre("bankai", 1001 , 6), new chapitre("dark magician",200 , 4), new chapitre("blue-eyes", 40 , 1)];
let z = new livre(1, "bungo stray dogs", 80, arr);
console.table(z.chapitres);
console.table(z.trierChapitres("position"));
console.table(z.chapitres);
console.table(z.trierChapitres("nombres_pages"));
console.table(z.chapitres);
z.sauterLongsChapitres();
console.table(z.chapitres);
