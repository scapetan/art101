// lab.js
/**
 * Author:    Stella
 * Created:   12/2/24
 * 
 * JavaScript file for Lab 16: JSON and APIs 
 */

/**
 * This program fetches and displays XKCD comics using their JSON API.
 * It retrieves the comic data and displays it with appropriate HTML tags.
 */
// Store the current comic object globally for navigation
let comicObj;
let latestComicNum;

// Function to fetch and display comic data
function getAndPutData(number) {
    // Show loading message
    $("#output").html("Loading comic...");
    
    // Using a different CORS proxy
    const PROXY = "https://proxy.cors.sh/";
    
    // Construct the endpoint
    let targetURL = number ? 
        `${PROXY}https://xkcd.com/${number}/info.0.json` : 
        `${PROXY}https://xkcd.com/info.0.json`;

    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (using proxy)
        url: targetURL,
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // Add headers required by this proxy
        headers: {
            'x-cors-api-key': 'temp_' + Math.random(),
            'origin': window.location.origin
        },
        // What do we do when the api call is successful
        success: function(data) {
            // Store the comic object for navigation
            comicObj = data;
            
            // If this is the first load, store the latest comic number
            if (!latestComicNum) {
                latestComicNum = comicObj.num;
            }
            
            // Log data for debugging
            console.log("Current comic:", comicObj);
            console.log("Latest comic number:", latestComicNum);
            
            // Create HTML for the comic display
            let str = `<h3>${comicObj.title}</h3>`;
            str += `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">`;
            
            // Add it to the webpage
            $("#output").html(str);

            // Update button states
            $("#prev").prop("disabled", comicObj.num <= 1);
            $("#next").prop("disabled", comicObj.num >= latestComicNum);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // Log error for debugging
            console.log("Error Details:", {
                status: jqXHR.status,
                textStatus: textStatus,
                errorThrown: errorThrown,
                responseText: jqXHR.responseText
            });
            
            // Try alternate proxy if first one fails
            if (!this.retried) {
                console.log("Trying alternate proxy...");
                this.retried = true;
                // Use alternate proxy
                const altProxy = "https://api.allorigins.win/raw?url=";
                let altURL = number ? 
                    `${altProxy}${encodeURIComponent(`https://xkcd.com/${number}/info.0.json`)}` : 
                    `${altProxy}${encodeURIComponent('https://xkcd.com/info.0.json')}`;
                
                $.ajax({
                    url: altURL,
                    type: "GET",
                    dataType: "json",
                    success: this.success,
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log("Alternate proxy also failed:", textStatus);
                        $("#output").html("Error loading comic. Please try again later.");
                    }
                });
            } else {
                $("#output").html("Error loading comic. Please try again later.");
            }
        }
    });
}

// When the document is ready
$(document).ready(function() {
    // Load the latest comic initially
    getAndPutData();
    
    // Add click handlers for navigation buttons
    $("#prev").click(function(){
        if (comicObj && comicObj.num > 1) {
            getAndPutData(comicObj.num - 1);
        }
    });
    
    $("#next").click(function(){
        if (comicObj && comicObj.num < latestComicNum) {
            getAndPutData(comicObj.num + 1);
        }
    });
});