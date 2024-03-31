document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Simulate sending email (replace this with your actual email sending code)
    setTimeout(function() {
        document.getElementById("statusMessage").innerText = "Email sent to " + email;
    }, 1000);
});