import React, { useEffect, useState } from "react";
import './table.css';
const TableData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false); 
      })
  
  }, []);

  return (
    <div className="table-container">
      <h2>User List</h2>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <table className ='users-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableData;
