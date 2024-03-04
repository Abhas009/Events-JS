// Define a variable to store the key pressed by the user
var r = '';
// Get the button element from the DOM
var button = document.querySelector("button");
// Store the initial text content of the button
var initialValue = button.innerHTML;

// Listen for keydown events on the document
document.addEventListener("keydown", function(event) {
  // Update the value of r with the key pressed by the user
  r = event.key;
});

// Listen for mouseover events on the button
button.addEventListener("mouseover", function() {
    // Set the button's text content to the value of r (the key pressed by the user)
    button.textContent = r;
    // Call the time function to reset the button text after a delay
    time();
});

// Listen for click events on the button
button.addEventListener("click", function() {
  // Display an alert message when the button is clicked
  alert("You are so dumb!");
});

// Listen for load event on the window
window.addEventListener("load", function() {
  console.log("Window loaded");
});

// Listen for scroll event on the window
window.addEventListener("scroll", function() {
  console.log("Window scrolled");
});

// Listen for resize event on the window
window.addEventListener("resize", function() {
  console.log("Window resized");
});

// Listen for blur event on the button
button.addEventListener("blur", function() {
  console.log("Button blurred");
});

// Listen for input event on the button
button.addEventListener("input", function() {
  console.log("Button input changed");
});

// Define a function to reset the button text after a delay
function time(){
    setTimeout(() => {
        button.textContent = initialValue;
    }, 100);
}

// Get the form element with the class "s"
var sub = document.querySelector(".s");

// Listen for submit events on the form
sub.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Display an alert message when the form is submitted
    alert("Your form is submitted!");
});



/*
The load event on the window is used to log a message when the window has finished loading.
The scroll event on the window is used to log a message when the window is scrolled.
The resize event on the window is used to log a message when the window is resized.
The blur event on the button is used to log a message when the button loses focus.
The input event on the button is used to log a message when the button's input value changes.
*/