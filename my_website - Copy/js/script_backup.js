/*Example of a simple JavaScript functionality: Changing text on button click

// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the button element
  const button = document.createElement("button");
  button.innerHTML = "Click me!";
  document.body.appendChild(button);

  // Add a click event to the button
  button.addEventListener("click", function() {
    alert("Hello, welcome to my website!");
  });
});

*/

// scripts.js

/* Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh on form submission

    // Get the form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    // Log the form data to the console (or handle it as needed)
    console.log('Form submitted:', name, email);

    // Display a success message (optional)
    alert('Thank you for contacting me, ' + name + '! I will get back to you shortly.');
    
    // Optionally, clear the form after submission
    document.getElementById('contactForm').reset();
}); */

document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');

    if (nameElement && emailElement) {
        // Add event listener for form submission
        document.getElementById('contactForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            let name = nameElement.value;
            let email = emailElement.value;

            console.log('Name:', name);
            console.log('Email:', email);
        });
    } else {
        console.log('Form elements not found!');
    }
});




