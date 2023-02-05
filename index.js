//1
function threefive(){
    let s=0;
    for(let i=0; i<50; i++){
        if(i%5==0 && i%3==0) s+=i;
    }
    return s;
}
//2
function intwo(odd=[]){
    let even=[];
    for(let i of odd){
        if(i%2==0){
            even.push(odd.splice(odd.indexOf(i),1));
        }
    }
    return even;
}
//aaaaaaaaaaa ca marche pas s'il ya 2 pairs successifs (＞﹏＜)
let odd=[1,2,3,4,5,6];
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
    for(let i of x){
        if(i.nombres_pages>100) x.splice(x.indexOf(i),1);
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

let a = new chapitre("stranger", 90 , 5);
let b = new chapitre("bankai", 1001 , 6);
let x = new chapitre("dark magician",200 , 4);
let y = new chapitre("blue-eyes", 40 , 1);
let z = new livre(1, "bungo stray dogs", 80, [x,y,a,b]);
console.table(z.chapitres);
console.table(z.trierChapitres("position"));
z.sauterLongsChapitres();
console.table(z.chapitres);
