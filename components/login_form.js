import { useState } from "react";


function LoginForm() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(null);
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
                const data = await response.json();
                setLoginStatus({success: true, message: data.message});
                // const status = response.status;
                // const headers = response.headers;
                // const data = await response.json();
                // console.log(data, status, headers);
            } else {
                const errorData = await response.json();
                setLoginStatus({success: false, message: errorData.message});
                // console.log('Login failed: ', response.statusText);
            }
        } catch(error) {
            console.log('Error occurred during registration: ', error);
            setLoginStatus({
                success: false,
                message: 'An error occurred during login. Please try again later.'
            });
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

            {loginStatus && (
                <div>
                    {loginStatus.success ? (
                        <p>Login successfully: {loginStatus.message}</p>
                    ) : (
                        <p> Login failed: {loginStatus.message}</p>
                    )}
                </div>
            )}
        </form>
    );
};


export default LoginForm;