// index.js - javascript function creation
// Author: Stella Capetanakis
// Date: October 24 2024
//got help from claude ai on this assignment!

//function to sort the letters of a name
function sortUserName(){
    //get user input using window.prompt()
   let userName = window.prompt("please enter your name :)");

   //check if user entered a name
if (userName){
    //convert string to array, sort it, and join back to string
    let nameArray = userName.split("");
    let sortedArray = nameArray.sort();
    let sortedName = sortedArray.join("");

    return sortedName;
} else {
        return "you didn't enter a name!"
    }
}

//output the sorted name to the webpage
document.writeln("<div class='sorted-name'>",
        "your sorted name is: ",
        sortUserName(),
        "</div>");

