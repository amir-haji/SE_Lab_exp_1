// JavaScript for Static Frontend App
console.log("Hello, World!");

// Function to display an alert
function showAlert() {
    alert("Button clicked!");
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("alertButton");
    if (button) {
        button.addEventListener("click", showAlert);
    }
});
