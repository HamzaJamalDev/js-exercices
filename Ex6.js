//Exercice 6
for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0) {
        console.log(i + " is multiple of 3");
    }
    else if(i % 5 === 0) {
        console.log(i + " is multiple of 5");
    }
    else if(i % 3 === 0 && i % 5 === 0) {
        console.log(i + " is multiple of 3 and 5");
    }
    else {
        console.log(i);
    }
}