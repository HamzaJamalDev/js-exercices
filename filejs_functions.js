//Execice 4
function nbr_occurrences (chaine)
{
    for (let i = 0; i <chaine.length; i++)
    {
        let C = chaine[i];
        let cmp = 0;

        for (let j = 0; j < chaine.length; j++)
        {            
            if (chaine[j] === C)
            {
                cmp++;
            }
        }

        if (cmp === 1)
        {
            console.log(C);
            break;
        }
    }
}
let chaine = prompt("Chaine :");
nbr_occurrences (chaine);
//Youness Chafki
