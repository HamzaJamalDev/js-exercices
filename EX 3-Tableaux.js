function tab(n) {
    let tableaux = ["amine", "salma", "hamza", "anas"];
    let result = [];
    for (let i = tableaux.length - 1; i >= tableaux.length - n; i--) {
        result.push(tableaux[i]);
    }
    return result;
}

console.log(tab(1));