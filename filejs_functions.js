//Exercice 5
let MatrixUnitaire= function(n){
    let s = ""
    for(let i = 0; i < n; i++)
    {
        for (let i1 = 0; i1 < n; i1++)
        {
            s += (i1 === i ? "1" : "0")
        }
        s += "\n"
    }
    return s
}

console.log(MatrixUnitaire(5))