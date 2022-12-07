// let button = document.getElementById('zz');
// button.addEventListener('click', bonjour);

// function bonjour() {

//     let msg = "bonjour";
//     alert(msg);
// }
// let x = prompt("donnez x ")
// if (x>1){
//     console.log("bien ");
// }else console.log("nononononno") 
// for(let i=0; i<=20; i+=2) {
//     console.log(i);
//   } 
// let sum=0; 
// for(let i=5; i<8; i++) {
//   if (i == 6) {
//     continue; 
//   }
//   sum += i;
// }
// console.log(sum);

// function test(a, b) {
//     if(a > b) {
//       return a*b; 
//   } else {
//        return b / a; 
//       }
//   }
//   alert(test(5, 15));
// let x = 8;
// let y = 2;
// x -= y;
// y += 1;
// console.log(x/y);
// for ( let i=0 ; i<10 ; i++){
//     if ( i%2===0){
//         continue; 
//     }
//     let a = i++;
//     console.log(a); 


// };
// let i =0 ; 
// do {
//     let a = i++;
//     if(i%2===0){
//         continue;
//     }

//     console.log(a);
// }while(i>10)

// for ( let i = 0 ;i<3;i++){
// let x  = prompt("donner x"); 
// console.log(x) ;

// if(x%2 == 0 ){
//     console.log("paire");
    
// }else console.log("impaire");

// }


// let x = prompt("donner x"); 
// // console.log(x) ;
// let y =prompt("donnez y ");
// // console.log(y) ;
// // let max = x*y*z;
// // console.log(max);


// let max = (parseInt(x) > parseInt(y))? x :  y ; //let max = (x>y)? x :  y ; 
// console.log(max);


// let p=prompt(" donnez p");
// function pr(v){
//     for( let i=0 , l)
    
// }


// function qui compte la chaine 
// function nbr (chain, lettr)
// {
//     let cmpt = 0;

//     for (let i = 0; i < chain.length; i++)
//     {
//         if (chain[i] === lettr)
//         {
//             cmpt++;
//         }
//     }

//     console.log(cmpt);
// }

// let chain = prompt("donnez une Chain :");

// let lettr = prompt("donnez une lettr :");

// nbr (chain,lettr);



/* minmax 
function maxmin(n1,n2,n3,n4)
{
console.log(Math.max(n1,n2,n3,n4));
console.log(Math.min(n1,n2,n3,n4));
}
maxmin(prompt("donnez le nombre 1 "),prompt("donnez le nombre 2 "),prompt("donnez le nombre 3 "),prompt("donnez le nombre 3 "));
*/
function aff(n1)
{
    // console.log("       0")
    for( let i=0 ; i < 5 ; i++){
        let ligne = ""
        for( let o=0 ; o <=5-i ; o++){
            ligne += " ";
        }
        for( let j=0 ; j < i+1 ; j++){
            ligne += n1;
        }
        // ligne += "0";
        for( let j=0 ; j < i+1 ; j++){
            ligne += n1;
        }
        console.log(ligne);
    }
}
aff(prompt("donnez un nnn"))