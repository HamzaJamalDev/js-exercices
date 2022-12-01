function nbr_occurrences (chaine)
{
    for (let i = 0; i <chaine.length; i++)
    {
        var c = chaine.charAt(i);
        if (chaine.indexOf(c) == i && chaine.indexOf(c, i + 1) == -1)
        {
            return c;
        }
    }    
}

let chaine = prompt("Chaine :");

console.log(nbr_occurrences (chaine));