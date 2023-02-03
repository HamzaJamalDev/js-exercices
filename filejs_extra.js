// Exercice 1 : Changer la couleur du paragraphe (couleur aléatoire)
// let change_style = document.getElementById('changeStyle');
// let reset_style = document.getElementById('resetStyle');
// let parag = document.getElementById("parag1");

// change_style.addEventListener('click', () => {
//     let randomColor = (Math.floor(Math.random() * 0xFFFFFF)).toString(16);
//     parag.style.backgroundColor = "#" + randomColor;
// });

// reset_style.addEventListener('click', () => {
//     parag.style.color = '#000000';
//     parag.style.backgroundColor = '#FFFFFF';
// });

// Exercice 1 : Changer la couleur du paragraphe (couleur aléatoire version 2)
const para = document.getElementById('parag1');

const arrayColors = [
    'blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'
];

const onMouseOverEvent = () => {
    para.style.cursor = 'pointer';
    const colorIndex = Math.floor(Math.random() * (arrayColors.length + 1));
    para.style.backgroundColor = arrayColors[colorIndex];
    para.style.transition = 'all 2.5s';
};

para.addEventListener('mouseover', onMouseOverEvent);

// Exercice 3
const button_create_table = document.querySelector('#createTable');
// const button_destroy_table = document.querySelector('button:nth-child(4)'); /* Il va selectioner le quatrième elem button dans le ficher filehtml_extra.html*/
const button_destroy_table = document.querySelector('#destroyTable');

let counter = 0;
const renderTable = (rows, cols) => {
    let table = document.createElement('table');
    table.classList.add(`table-n-${counter}`);
    table.style.border = '2px solid red';
    table.style.columnSpan = 1;

    table.innerHTML = ``;

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        for (let g = 0; g < cols; g++) {
            let col = document.createElement('td');
            col.innerText = `Row-${i} Col-${g}`;
            col.style.border = '1px solid red';
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    document.querySelector('#tab').appendChild(table);
};

const destroyeTable = (index) => {
    if(index < 0) return;
    document.querySelector(`.table-n-${index}`).remove();
};

button_create_table.addEventListener('click', () => {
    let col = +prompt("Veuiller inserer nombre des colones : ");
    let row = +prompt("Veuiller inserer nombre des lignes : ");
    renderTable(row, col);
    counter++;
});

button_destroy_table.addEventListener('click', () => {
    const index = counter - 1;
    console.log(index, counter);
    destroyeTable(index);
    counter--;
});
