const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));
const num3 = Number(prompt("Enter third number: "));

let largest;

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
