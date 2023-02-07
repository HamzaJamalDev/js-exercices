

// QROL 

//Comprendre et retenir : 
// 1:

let sum = 0;

for (let i = 0; i < 50; i++) {
  if (i % 15 === 0 || i % 30 === 0) {
    sum += i;
  }
}

console.log(sum);

// 2:

let input = [1, -2, 3, 0, -1];
let impaires = [];
let paires = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 === 0) {
    paires.push(input[i]);
  } else {
    impaires.push(input[i]);
  }
}

console.log( impaires);
console.log( paires);

// Analyser : 

function Chapitre(nom, nombre_pages, position) {
    this.nom = nom;
    this.nombre_pages = nombre_pages;
    this.position = position;
  }
  
  
  Chapitre.prototype.chapitreLong = function() 
  {
    if (this.nombre_pages > 100)
    {
    return true;
    }
    else 
    {
      return false;
    }
     }
  
  
  
  function Livre(id,titre,prix,chapitres){
      this.id=id;
      this.titre=titre;
      this.prix=prix;
      this.chapitres=chapitres;
  }
  Livre.prototype.sauterLongsChapitres = function(){
      let tab = [];
      for(i=0;i<this.chapitres.length;i++){
  
          if(this.chapitres[i].nombre_page<100){
  
              tab.push(this.chapitres[i]);
          }
      }
      console.log(tab);
  }
  Livre.prototype.trierChapitres = function(arg){
      if(arg=="position"){
          this.chapitres.sort(function comparParPos(p,n){
              if(p.position>n.position){
                  return -1;
              }else if(p.position<n.position){
                  return 1;
              }else{
                  return 0;
              }
          });
      }else{
          this.chapitres.sort(function comparParNmp(p,n){
              if(p.nombre_page>n.nombre_page){
                  return -1;
              }else if(p.nombre_page<n.nombre_page){
                  return 1;
              }else{
                  return 0;
              }
          });
      }
      console.log(this.chapitres);
  }
  
  let livre1 = new Livre(10,'livre' ,1,3000,[new chapitre('s1',100,2),new chapitre('s2',150,6),new chapitre('s3',200,4)]);
  livre1.trierChapitres("nombre_page");
  
  
