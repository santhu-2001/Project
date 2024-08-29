document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect the form data
        const formData = {
            id: Date.now(), // Using timestamp as a placeholder ID; modify as needed
            firstName: document.getElementById('first').value,
            lastName: document.getElementById('last').value,
            age: document.getElementById('Age').value,
            email: document.getElementById('email').value,
            gender: document.getElementById('gender').value
        };

        // POST the form data to the API
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Ensure the body is JSON
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', JSON.stringify(data)); // Log the JSON response

            // Show success alert

            // Show form data alert
            alert('Form Data:\n' +
                  'First Name: ' + formData.firstName + '\n' +
                  'Last Name: ' + formData.lastName + '\n' +
                  'Age: ' + formData.age + '\n' +
                  'Email: ' + formData.email + '\n' +
                  'Gender: ' + formData.gender);

           
            
            alert('User successfully added!');

        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error adding the user.');
        });
    });
});
