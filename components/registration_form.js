const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/POST/users');
    if (response.ok) {
        console.log('Authorization successful');
    } else {
        console.log('Authorization failed');
    }
};


export default function RegistrationForm() {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required/>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required/><br/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/><br/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required/><br/>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required/><br/>
            <button type="submit">Sign up</button>
        </form>
    );
};