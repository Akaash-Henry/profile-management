// Function to fetch all users from the backend
function fetchAllUsers() {
    fetch('profile.php', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log('All users:', data);
        // Process the data and update the UI as needed
    })
    .catch(error => console.error('Error fetching users:', error));
}

// Example usage: Call the fetchAllUsers function when the page loads
window.addEventListener('load', fetchAllUsers);

// Function to create a new user
function createUser(user) {
    fetch('profile.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => console.log('User created:', data))
    .catch(error => console.error('Error creating user:', error));
}

// Example usage: Create a new user
// createUser({
//     "_id": { "$oid": "65fa75767bba808c67d14a0e" },
//     "fullname": "Akaash",
//     "username": "lucino",
//     "email": "vakaash25@gmail.com",
//     "phone": { "$numberLong": "6383538922" },
//     "dob": "25-03-2003",
//     "address": "coimbatore"
// });

// Function to update an existing user
function updateUser(user) {
    fetch('profile.php', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => console.log('User updated:', data))
    .catch(error => console.error('Error updating user:', error));
}

// Example usage: Update an existing user
// updateUser({
//     "_id": { "$oid": "65fa75767bba808c67d14a0e" },
//     "fullname": "Updated Name",
//     "username": "updatedusername",
//     "email": "updatedemail@example.com",
//     "phone": { "$numberLong": "9876543210" },
//     "dob": "1990-01-01",
//     "address": "Updated Address"
// });

// Function to delete a user
function deleteUser(id) {
    fetch('profile.php', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `id=${id}`,
    })
    .then(response => response.json())
    .then(data => console.log('User deleted:', data))
    .catch(error => console.error('Error deleting user:', error));
}

// Example usage: Delete a user
// deleteUser('65fa75767bba808c67d14a0e');
