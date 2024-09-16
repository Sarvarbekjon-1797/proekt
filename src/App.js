import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';


function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_USERS', payload: data });
      });
  }, [dispatch]);

  const handleFilterChange = (field, value) => {
    dispatch({ type: 'SET_FILTER', payload: { field, value } });
  };

  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filters.phone.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1>User Management</h1>
      <div  className="filter-container">
        <input
          type="text"
          placeholder="Filter by name"
          value={filters.name}
          onChange={(e) => handleFilterChange('name', e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by username"
          value={filters.username}
          onChange={(e) => handleFilterChange('username', e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by email"
          value={filters.email}
          onChange={(e) => handleFilterChange('email', e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by phone"
          value={filters.phone}
          onChange={(e) => handleFilterChange('phone', e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
