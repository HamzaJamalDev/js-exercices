//Exercice 1
function PlusGrand(tableau, nombre) {
    let output = [];
    for (let i of tableau) {
        if (i > nombre)
            output.push(i);
    }
    return output;
}

for (let i of PlusGrand([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(i); // Afficher en dehors de la fonction

//Question 2 et 3 :Tableaux
let tab = [15, 4, 22, 24, 17, 80];
let n = prompt("Entrer un nombre", 1);

//Question 2
function Premier_Elements(tab, n) {
    for (let i = 0; i < n; i++) { console.log(tab[i]); }
}

Premier_Elements(tab, n);

//Question 3
function Dernier_Elements(tab, n) {
    for (let i = tab.length - n; i < tab.length; i++) {
        console.log(tab[i]);
    }
}

Dernier_Elements(tab, n);

// Exercice 5
function combine(arr, n) {
    let i, j, combo, head, tail;
    if (n > arr.length || n <= 0) {
        return [];
    }
    if (n == arr.length) {
        return [arr];
    }
    if (n == 1) {
        combo = [];
        for (i = 0; i < arr.length; i++) {
            combo.push([arr[i]]);
        }
        return combo;
    }
    combo = [];
    for (i = 0; i < arr.length - n + 1; i++) {
        head = arr.slice(i, i + 1);
        tail = combine(arr.slice(i + 1), n - 1);
        for (j = 0; j < tail.length; j++) {
            combo.push(head.concat(tail[j]));
        }
    }
    return combo;
}

/*exemple any given arr*/
let arr = ["blue", "white", "black", "rain"];
let num = 2;
console.log(combine(arr, n));
