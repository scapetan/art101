// index.js - purpose and description here
// Author: Stella Capetanakis
// Date: October 22 2024

// Variables
myTransport = ["car", "bus", "walking"]

myMainRide = {
  make: "Subaru",
  model: "Impreza",
  color: "Silver",
  year: 2018,
    //calculate age
  age: function () {
        return 2024-this.year;
    }
}
//output
document.writeln("My Transports: " + myTransport + "<br>");  



//object to doc
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

// // Functions

// // this is an example function and this comment tells what it doees and what parameters are passed to it.
// function myFunction(param1, param2) {
//   // some code here
//   // return results;
// }

// function main() {
//   console.log("Main function started.");
//   // the code that makes everything happen
// }

// // let's get this party started
// main();
