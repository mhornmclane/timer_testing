// Select the button and output elements
const greetButton = document.getElementById("greetButton");
const output = document.getElementById("output");

// Add a click event listener to the button
greetButton.addEventListener("click", function () {
    // Display a message in the output paragraph
    output.textContent = "You clicked the button! Hello from JavaScript!";
});
