document.addEventListener('DOMContentLoaded', function() {
    // Initialize jQuery UI datepicker
    $("#datepicker").datepicker();

    // Handle form submission
    document.querySelector('.form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const username = document.getElementById('Username').value;
        const phoneno = document.getElementById('Phoneno').value;
        const email = document.getElementById('Emailid').value;
        const password = document.getElementById('Password').value;
        const confirm = document.getElementById('confirm').value;
        const date = document.getElementById('datepicker').value;
        const program = document.getElementById('browser').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const address = document.getElementById('Address').value;
        const session = document.getElementById('session').value;
        const terms = Array.from(document.querySelectorAll('input[name="terms"]:checked')).map(el => el.value).join(', ');

        // Validate form
        if (password !== confirm) {
            alert("Passwords do not match!");
            return;
        }

        // Prepare data for storage
        const userData = {
            username, phoneno, email, password, date, program, gender, address, session, terms
        };

        // Store user data in localStorage (or send to server)
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        // Redirect to user management page
        window.location.href = 'user.html';
    });
});