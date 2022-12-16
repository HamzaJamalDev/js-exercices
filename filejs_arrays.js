// Exercice 1
function plusGrand(tableau, nombre) {
    let output = [];
    for (let i of tableau) {
        if (i > nombre)
            output.push(i);
    }
    return output;
}

for (let element of plusGrand([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) {
    console.log(element); // Afficher en dehors de la fonction
}

// Exercice 2 et 3
// Exercice 2
function premiersNElements(tab = [], n = 1) {
    let output = [];
    if (n > tab.length) {
        output = tab.slice();
    } else {
        for (let i = 0; i < n; i++) {
            output.push(tab[i]);
        }
    }
    return output;
}

// Exercice 3
function derniersNElements(tab = [], n = 1) {
    let output = [];
    if (n > tab.length) {
        output = tab.slice();
    } else {
        for (let i = tab.length - n; i < tab.length; i++) {
            output.push(tab[i]);
        }
    }
    return output;
}

let tab = [15, 4, 22, 24, 17, 80];
let n = 3;

for (let element of premiersNElements(tab, n)) {
    console.log(element);
}
for (let element of derniersNElements(tab, n)) {
    console.log(element);
}

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

let arr = ["blue", "white", "black", "rain"];
let num = 2;
console.log(combine(arr, num));
