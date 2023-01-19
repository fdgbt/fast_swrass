import { useState } from 'react';

import Button from '../UI/Button/Button';

import styles from "./Login.module.css";

const loginUser = async (formData) => {
    try {
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

    } catch (err) {
        console.log("error searchDatabase:", err);
        throw new Error(err);
    }
}

const Login = ({ setToken }) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = await loginUser({ username, password });

        if (token.token) {
            localStorage.setItem('token', token.token);
            setToken(token.token);
        }
    }

    return (
        <form className={styles.login} onSubmit={handleSubmit}>
            <label className={styles.label}>
                <p className={styles.p}>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)} required />
            </label>
            <label>
                <p className={styles.p}>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)} required />
            </label>
            <div>
                <Button type="submit">Login</Button>
            </div>
        </form>
    )
}

export default Login;