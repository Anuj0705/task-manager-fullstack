import API from '../services/api';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const logout = async () => {
        await API.post('/auth/logout');
        navigate('/');
    };

    return (
        <div className="navbar">
            <h3>Task Manager</h3>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Navbar;