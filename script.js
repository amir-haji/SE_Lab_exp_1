// Function to display an alert
function showAlert() {
    alert("Button clicked!");
}

// Function to load the header component
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}

// Function to load the footer component
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

// Add event listeners after DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
    loadFooter();
    const button = document.getElementById("alertButton");
    if (button) {
        button.addEventListener("click", showAlert);
    }
});
