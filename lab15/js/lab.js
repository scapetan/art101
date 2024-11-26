// js/lab.js
/**
 * Author:    Stella Capetanakis
 * Created:   11.25.2024
 * 
 */

// Add a click event handler to your button
$("#activate").click(function(){
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (Yes/No API)
        url: "https://yesno.wtf/api",
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // What do we do when the api call is successful
        success: function(data) {
            // Console log to help with debugging
            console.log("API Response:", data);
            
            // Create result string with both answer and image
            let str = `<p>Answer: ${data.answer}</p>`;
            str += `<img src="${data.image}" alt="yes/no gif" style="max-width: 300px;">`;
            
            // Put data in output div
            $("#output").html(str);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
            $("#output").html("Error: " + textStatus);
        }
    })
});