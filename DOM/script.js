//Exercice 1
let parag = document.getElementById("parag1");
let ResetStyle = parag.style;

document.getElementById("changeStyle").onclick = function()
{
    //parag.style.color = "rgb("+(Math.floor(Math.random()*255))%255+","+(Math.floor(Math.random()*255))%255+","+(Math.floor(Math.random()*255))%255+")";
    parag.style.color = "white";
    parag.style.backgroundColor = "black";
}

document.getElementById("resetStyle").onclick = function()
{
    parag.style = ResetStyle;
}