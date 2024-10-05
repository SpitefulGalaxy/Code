async function login(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        const messageDiv = document.getElementById('message');

        if (data.success) {
            console.log('Login successful:', data);
            // Handle successful login (e.g., redirect or show a message)
            messageDiv.textContent = "Login successful!";
            messageDiv.style.color = "green";
        } else {
            console.error('Login failed:', data.message);
            // Show an error message
            messageDiv.textContent = "Login failed: " + data.message;
            messageDiv.style.color = "red";
        }
    } catch (error) {
        console.error('Error during login:', error);
        document.getElementById('message').textContent = "An error occurred. Please try again.";
    }
}

// Attach the login function to the form submission event
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', login);
});
