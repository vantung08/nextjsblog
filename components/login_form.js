import { useState } from "react";


function LoginForm() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const handleSubmit = async(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const userLogin = {email, password};
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userLogin)
            });
            if (response.ok) {
                const status = response.status;
                const headers = response.headers;
                const data = await response.json();
                console.log(data, status, headers);
            } else {
                console.log('Login failed: ', response.statusText);
            }
        } catch(error) {
            console.log('Error occurred during registration: ', error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br/>
            {/* <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required/><br/> */}
            <button type="submit">Login</button>
        </form>
    );
};


export default LoginForm