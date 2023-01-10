//exercice changer couleur parag (aleatoire)
document.getElementById("par1").style.color='blue';

const generateColor = () => {
  
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    document.getElementById("par1").style.color = "#" + randomColor;    
  
}