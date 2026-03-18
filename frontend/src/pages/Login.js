import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await API.post('/auth/login', form);
            navigate('/dashboard');
        } catch (err) {
            alert(err.response?.data?.error || "Server not responding");
        }
    };

    return (
        <div className="auth-bg">
            <div className="auth-card">
                <h2>Login</h2>

                <input
                    placeholder="Email"
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                />

                <button className="auth-btn" onClick={handleLogin}>
                    Login
                </button>

                <p
                    className="auth-link"
                    onClick={() => navigate('/register')}
                >
                    Don’t have an account? Register
                </p>
            </div>
        </div>
    );
}

export default Login;