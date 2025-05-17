
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Dashboard() {
  const [users, setUsers] = useState([]);
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

  const showData = users.map(user => (
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
  ));

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
      <h2 className="title">User List</h2>
      <input
        type="text"
        placeholder="Click to search users"
        onFocus={() => navigate('/search')}
        readOnly
        className="search-bar"
      />
      <br/>
      <input
      type="text"
      placeholder="Click to filter users by city"
      onFocus={() => navigate('/filter')}
      readOnly
      className="search-bar"
      />
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
          {loading ? skeletonRows : showData}
        </tbody>
      </table>
    </div>
  );
}

