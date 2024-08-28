
function addUser() {
    window.location.href = 'form.html'; // Path to your registration form HTML file
} 
document.addEventListener('DOMContentLoaded', function() {
    // Load users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Get the table body
    const tableBody = document.getElementById('userTableBody');

    // Populate the table with user data
    users.forEach((user, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
           
            <td>${user.username}</td>
            <td>${user.phoneno}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.confirm}</td>
            <td>${user.date}</td>
            <td>${user.program}</td>
            <td>${user.gender}</td>
            <td>${user.address}</td>
            <td>${user.session}</td>
            <td>${user.terms}</td>
            
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
});

// Function to delete a user
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1); // Remove user at index
    localStorage.setItem('users', JSON.stringify(users)); // Update localStorage
    window.location.reload(); // Reload the page to update the table
}
