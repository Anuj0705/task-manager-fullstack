import { useEffect, useState } from 'react';
import API from '../services/api';
import Navbar from '../components/Navbar';
import './Dashboard.css';
function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [form, setForm] = useState({
        title: '',
        category: 'Other',
        dueDate: ''
    });

    const fetchTasks = async () => {
        const res = await API.get('/tasks');
        setTasks(res.data);
    };

    const createTask = async () => {
        await API.post('/tasks', form);
        setForm({ title: '', category: 'Other', dueDate: '' });
        fetchTasks();
    };

    const deleteTask = async (id) => {
        await API.delete(`/tasks/${id}`);
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    }, []);



    return (
        <>
            <Navbar />

            <div className="dashboard-page">

                {/* Header */}
                <div className="dashboard-header">
                    <h2>My Tasks</h2>
                </div>

                {/* Task Form */}
                <div className="task-form">
                    <input
                        placeholder="Task title"
                        value={form.title}
                        onChange={(e) =>
                            setForm({ ...form, title: e.target.value })
                        }
                    />

                    <select
                        value={form.category}
                        onChange={(e) =>
                            setForm({ ...form, category: e.target.value })
                        }
                    >
                        <option>Work</option>
                        <option>Personal</option>
                        <option>Other</option>
                    </select>

                    <input
                        type="date"
                        value={form.dueDate}
                        onChange={(e) =>
                            setForm({ ...form, dueDate: e.target.value })
                        }
                    />

                    <button className="add-btn" onClick={createTask}>
                        Add Task
                    </button>
                </div>

                {/* Task List */}
                <div className="task-list">
                    {tasks.map((task) => (
                        <div
                            key={task._id}
                        >
                            <div className="task-title">
                                {task.title}
                            </div>

                            <div className="task-info">
                                {task.category} | {task.dueDate?.split('T')[0]}
                            </div>

                            <div className="task-actions">
                                <button
                                    className="delete-btn"
                                    onClick={() => deleteTask(task._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Dashboard;