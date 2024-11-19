/*
 * lab.js - FizzBuzz implementation for Lab 13
 * @author Stella Capetanakis
 * @date November 18, 2024
 * got help from claude ai.
 */

// Define constants for better maintainability
const FACTORS = {
    3: "Fizz",
    5: "Buzz",
    7: "Boom"
};

function fizzBuzzBoom(maxNumber) {
    // Clear previous output
    $("#output").empty();
    
    // Loop through numbers 1 to maxNumber
    for (let i = 1; i <= maxNumber; i++) {
        let output = "";
        let classes = [];
        
        // Check for multiples of 3, 5, and 7
        for (let factor in FACTORS) {
            if (i % factor === 0) {
                output += FACTORS[factor];
                classes.push(FACTORS[factor].toLowerCase());
            }
        }
        
        // If no special cases, just use the number
        if (output === "") {
            output = i;
        } else {
            output = i + ": " + output + "!";
            if (classes.length > 1) {
                classes = ["multiple"];
            }
        }
        
        // Create the output element with appropriate classes
        const element = $("<p>")
            .text(output)
            .addClass(classes.join(" "));
        
        // Append to output div
        $("#output").append(element);
    }
}

// Add click handler for the run button
$(document).ready(function() {
    $("#runButton").click(function() {
        const maxNumber = parseInt($("#maxNumber").val()) || 200;
        fizzBuzzBoom(Math.min(maxNumber, 1000)); // Limit to 1000 for performance
    });
    
    // Run once on page load
    fizzBuzzBoom(200);
});