import { useState } from "react";


function RegistrationForm() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const handleSubmit = async(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = {email, password};
        try {
            const response = await fetch('http://localhost:5000/POST/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                const data = await response.json();
                console.log('User registered successfully: ', data);
            } else {
                console.log('Registration failed: ', response.statusText);
            }
        } catch(error) {
            console.log('Error occurred during registration: ', error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required/>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required/><br/> */}
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/>
            {/* <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required/><br/> */}
            <button type="submit">Sign up</button>
        </form>
    );
};


export default RegistrationForm