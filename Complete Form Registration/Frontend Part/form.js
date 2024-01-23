function registerUser() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!firstName || !lastName || !email || !mobile || !age || !gender || !dob || !password || !confirmPassword) {
        alert('Please fill in all values.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Password and Confirm Password must match.');
        return;
    }

    const user = {
        firstName,
        lastName,
        email,
        mobile,
        age,
        gender,
        dob,
        password,
    };

    fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return response.json();
        } else {
            return response.text(); // Handle non-JSON responses
        }
    })
    .then(data => {
        if (typeof data === 'object') {
            console.log('User registered successfully:', data);
            alert('User Registered Successfully');
            resetForm();
        } else {
            console.log('Received non-JSON response:', data);
            alert('User Registered Successfully (non-JSON response)');
            resetForm();
        }
    })
    .catch(error => {
        console.error('Error registering user:', error);
        // Handle errors or display an alert
    });
}

function resetForm() {
    document.getElementById('register-form').reset();
}
