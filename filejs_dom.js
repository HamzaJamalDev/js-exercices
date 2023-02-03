// Exercice 1
let a = document.getElementById('changeStyle');
let b = document.getElementById('resetStyle');
let p = document.getElementById('parag1');

a.addEventListener('click', changer);
b.addEventListener('click', ren);

function changer() {
    p.style.color = 'white';
    p.style.backgroundColor = 'black';
}

function ren() {
    p.style.color = 'black';
    p.style.backgroundColor = 'white';
}
