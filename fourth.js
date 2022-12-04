let num1 = Number(prompt("Enter the first number!"));
let num2 = Number(prompt("Enter the second number!"));

if(num1 > num2){
    console.log(num1 + num2);
}
else if(num1 < num2){
    console.log(num1 * num2);
}
else{
    console.log("The numbers are the same!");
}