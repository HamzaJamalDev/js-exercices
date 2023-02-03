// Exercice 1 : Changer la couleur du paragraphe (couleur aléatoire)
let change_style = document.getElementById('changeStyle');
let reset_style = document.getElementById('resetStyle');
let parag = document.getElementById("parag1");

change_style.addEventListener('click', () => {
    let randomColor = (Math.floor(Math.random() * 0xFFFFFF)).toString(16);
    parag.style.backgroundColor = "#" + randomColor;
});

reset_style.addEventListener('click', () => {
    parag.style.color = '#000000';
    parag.style.backgroundColor = '#FFFFFF';
});
