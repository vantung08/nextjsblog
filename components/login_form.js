const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('/api/authorization.py', {method: 'POST'});
    if (response.ok) {
        console.log('Authorization successful');
    } else {
        console.log('Authorization failed');
    }
};


export default function LoginForm() {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required/><br/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required/><br/>
            <button type="submit">Login</button>
        </form>
    );
};