import { useState } from 'react';

import "./Login.css";

const loginUser = async (formData) => {

    const data = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    const result = await data.json();
    console.log("POST login result:", result);
    return result;

}

const Login = ({ setToken }) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = await loginUser({ username, password });

        if (token.token)
            setToken(token.token);
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default Login;