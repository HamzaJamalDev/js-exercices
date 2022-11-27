
// function  Question 1 :

// function Ret(x,tab){

    
//     for (let i = 0; i < tab.length; i++) {
        
//         if (tab[i] > x) {
//             console.log(tab[i]);
//         }else {
//             continue;
//         }
        
//     }


// };
// let tab = [8,6,5,4,1,2];
// Ret(5,tab)


// function GetNumber(x) Question 2 :

// function GetNumber(x){
//     let tab = [10,25,36,85,15,36];
//     for (let i = 0; i < x; i++) {
//         const element = tab[i];
//         console.log(element);
//     }
// };
// GetNumber(3)


// function dernier element Question 3:

function Dernier(x){

    let tab = [10,25,3,85,15,36];
    if(x > tab.length){
        console.log("Erreur");
    }else{
        let n = tab.length - x;
        for (let i = n; i < tab.length; i++){
            const element = tab[i];  
            console.log(element);
        }
    }
};

Dernier(2);
