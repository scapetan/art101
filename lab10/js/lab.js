/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   Requirements: jQuery must be loaded for this script to work.

   Author: Stella Capetanakis
   Date: Nov 5 2024
*/

function generateRandomText() {
    const text = "blahblahblahblehblahblahhhh";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the blah text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random blah text
    return text.slice(randStart, randStart + randLen);
  }

  // click listener for button
$("#make-convo").click(function(){
});

// get new fake dialogue
const newText = generateRandomText();

// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');