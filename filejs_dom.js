// Exercice 1
// let a = document.getElementById('changeStyle');
// let b = document.getElementById('resetStyle');
// let p = document.getElementById('parag1');

// a.addEventListener('click', changer);
// b.addEventListener('click', ren);

// function changer() {
//     p.style.color = 'white';
//     p.style.backgroundColor = 'black';
// }

// function ren() {
//     p.style.color = 'black';
//     p.style.backgroundColor = 'white';
// }

// Exercice 1 (version 2)
let parag = document.getElementById("parag1");
let ResetStyle = parag.style;

document.getElementById("changeStyle").onclick = function () {
    //parag.style.color = "rgb("+(Math.floor(Math.random()*255))%255+","+(Math.floor(Math.random()*255))%255+","+(Math.floor(Math.random()*255))%255+")";
    parag.style.color = "white";
    parag.style.backgroundColor = "black";
}

document.getElementById("resetStyle").onclick = function () {
    parag.style = ResetStyle;
}
