import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Filter() {
    const [users, setUsers] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    async function fetchUsers() {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(res.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
    }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const cities = [...new Set(users.map(user => user.address.city))];

    const filteredUsers = selectedCity
        ? users.filter(user => user.address.city === selectedCity)
        : users;

    const skeletonRows = Array(5).fill(0).map((_, i) => (
    <tr key={i} className="skeleton-row">
        <td><div className="skeleton-box"></div></td>
        <td><div className="skeleton-box"></div></td>
        <td><div className="skeleton-box"></div></td>
        <td><div className="skeleton-box"></div></td>
    </tr>
    ));

    return (
        <div className="user-table-container">
            <h2 className="title">Filter Users by City</h2>

            <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="filter-dropdown"
            >
                <option value="">All Cities</option>
                {cities.map(city => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>

            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? skeletonRows :filteredUsers.length > 0 ? (
                        filteredUsers.map(user => (
                            <tr
                                key={user.id}
                                onClick={() => navigate(`/users/${user.id}`, { state: { user } })}
                                style={{ cursor: 'pointer' }}
                            >
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>No users in this city</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}