# js-exercices
Solutions des exercices JavaScript

 //exercice 6 sur les fonctions recursive

let n  = prompt("donner un nombre");
function factorielle(n) {
    // 0! =1, 1! =1   
    if(n===0||n===1){
  return 1;
   }
   else{ 
    return n * factorielle(n-1)
   }
       
}
 console.log(factorielle(n));





 //exercice 1 sur les tableaux
 function greaterThan(tab,n){
    let t =[] ;
    for(let i=0; i<tab.length ;i++){
        if(tab[i]>n){
            t.push(tab[i]);
        }
    }
    return t
 }
 let t[6,8,-2,4];
 let n=-1;
 console.log(greaterThan(t,n));



