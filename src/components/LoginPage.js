
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Basic form validation
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        // Mock authentication logic (replace with actual API call)
        if (email === 'user@example.com' && password === 'password') {
            navigate('/candidate/home');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
