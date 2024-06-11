// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the registration form
    const form = document.querySelector('form');

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form input values
        const firstName = document.querySelector('#firstName').value.trim();
        const lastName = document.querySelector('#lastName').value.trim();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        const confirmPassword = document.querySelector('#confirmPassword').value.trim();
        const age = document.querySelector('#age').value.trim();
        const dob = document.querySelector('#dob').value.trim();
        const contact = document.querySelector('#contact').value.trim();
        // Validate form inputs (add your validation logic here)

        // Create an object with user data
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            age: age,
            dob: dob,
            contact: contact
        };

        console.log('Post',JSON.stringify(userData));

        // Send AJAX request to register.php for form submission
        fetch('/php/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(data => {
            console.log(data); // Log response from server (for debugging)
            // You can handle success or error responses here and update the UI accordingly
            // For example, show a success message or display error messages to the user
        })
        .catch(error => console.error('Error:', error));
    });
});
