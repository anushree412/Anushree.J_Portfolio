document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Simulate sending email (replace this with your actual email sending code)
    setTimeout(function() {
        document.getElementById("statusMessage").innerText = "Email sent to " + email;
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
    const educationContainer = document.getElementById('education-container');

    fetch('education.html')
        .then(response => response.text())
        .then(data => {
            educationContainer.innerHTML = data;
        })
        .catch(error => console.error('Error loading education section:', error));
});
