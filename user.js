document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch user data from the DummyJSON API and populate the table
    function fetchUserData() {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                // Log the entire JSON data to the console as a formatted string
                console.log('Fetched User Data:', JSON.stringify(data, null, 2));

                const users = data.users; // Assuming 'users' is the correct key
                const userTableBody = document.getElementById('userTableBody');
                
                // Clear existing table rows
                userTableBody.innerHTML = '';

                // Populate table with user data
                users.forEach(user => {
                    const row = document.createElement('tr');
                    
                    row.innerHTML = `
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.age}</td>
                        <td>${user.email}</td>
                        <td>${user.gender}</td>
                        <td>
                            <button onclick="editUser(${user.id})">Edit</button>
                        </td>
                        <td>
                            <button onclick="deleteUser(${user.id})">Delete</button>
                        </td>
                    `;

                    userTableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching user data:', error));
    }

    // Call the function to fetch and display user data when the page loads
    fetchUserData();
});

// Function to redirect to the add user page
function addUser() {
    window.location.href = 'form.html'; // Replace 'form.html' with your target page
}

// Function to handle editing a user
function editUser(userId) {
    console.log(`Edit user with ID: ${userId}`);
    // Implement edit functionality here, e.g., redirect to an edit page or show a form
    // window.location.href = `edit.html?id=${userId}`; // Example redirect
}

// Function to handle deleting a user
function deleteUser(userId) {
    fetch(`https://dummyjson.com/users/${userId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Delete response:', JSON.stringify(data));
        alert('User successfully deleted!');

        // Remove the deleted user from the table
        const row = document.querySelector(`tr[data-id="${userId}"]`);
        if (row) {
            row.remove();
        }
    })
    .catch(error => {
        console.error('Error deleting user:', error);
        alert('There was an error deleting the user.');
    });

    document.querySelectorAll('.deleteBtn').forEach(function(button) {
        button.addEventListener('click', function() {
            // Find the row (parent of parent) and remove it
            this.closest('tr').remove();
        });
    });

}
