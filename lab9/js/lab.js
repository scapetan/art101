/*
 * lab.js - jQuery implementation for Lab 9
 * Adds interactive buttons to toggle special styling on page sections
 * 
 * @author Extension of Stellas 's work (got help from claude ai)
 * @date Nov 4th 2024
 * Requirements: jQuery must be loaded for this script to work
 */

// Check if jQuery is loaded


if (typeof jQuery === 'undefined') {
    console.error('jQuery is not loaded! Make sure your internet connection is working and the jQuery script tag comes before this script.');
    // Add a visible error message to the page
    document.addEventListener('DOMContentLoaded', function() {
        const error = document.createElement('div');
        error.className = 'jquery-error';
        error.textContent = 'Error: jQuery is required but not loaded. Check console for details.';
        document.body.prepend(error);
    });
} else {
    // jQuery is loaded, proceed with the script
    $(document).ready(function() {
        // Log successful jQuery load
        console.log('jQuery version ' + jQuery.fn.jquery + ' is loaded');
        
        // Add buttons to all sections and attach click handlers
        $('.minor-section').each(function() {
            const sectionId = $(this).attr('id');
            const buttonText = 'Toggle Special Style';
            
            // Create and append button with custom text
            $(this).append(
                $('<button>', {
                    text: buttonText,
                    click: function() {
                        $(this).parent().toggleClass('special');
                        // Log the action to the output div
                        $('#output').html(
                            `Last action: Toggled special style for ${sectionId} section at ${new Date().toLocaleTimeString()}`
                        );
                    }
                })
            );
        });

        // Add initial instruction to output
        $('#output').html('Click any button to toggle special styling!');
    });
}