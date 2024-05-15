//Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less
// than the dynamic number value

import inquirer from "inquirer";
const dynamicNumber = Math.floor(Math.random() * 100 + 1);
const answer = await inquirer.prompt([
    {
        name : "userGuessNumber",
        type: "number",
        message : "Enter the number: ",
    },
]); 
if(answer.userGuessNumber > dynamicNumber){
console.log("Enter number is greater than the dynamic number value.");

}
else if (answer.userGuessNumber == dynamicNumber){
    console.log("Enter number is equal to the dynamic number value.");
    
}
else{
    console.log("Enter number is less than the dynamic number value.");
    
}
