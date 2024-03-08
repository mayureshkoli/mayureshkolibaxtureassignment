import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './userList.module.css';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  // Load user list from localStorage when component mounts
  useEffect(() => {
    const userlist = JSON.parse(localStorage.getItem('userList'));
    setUserList(userlist || []); // Set user list, defaulting to an empty array if null
  }, []);

  // Navigate to user edit page with user data
  const handleUserEdit = (user) => {
    navigate('/userUpsert', { state: user });
  };

  // Delete user from user list
  const handleUserDelete = (index) => {
    const updatedUserList = [...userList];
    updatedUserList.splice(index, 1); // Remove the user at the specified index
    setUserList(updatedUserList); // Update the state
    localStorage.setItem('userList', JSON.stringify(updatedUserList)); // Update localStorage
  };

  return (
    <div className={styles.userListMainDiv}>
      <button className={styles.backButton} onClick={() => navigate('/userUpsert')}>BACK TO USER-UPSERT</button>
      {userList.length !== 0 ? (
        <table className={styles.userListTable}>
          <thead>
            <tr>
              <th>_id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user._id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                {/* Edit and delete icons */}
                <td><FaEdit style={{ cursor: 'pointer' }} onClick={() => handleUserEdit(user)} /></td>
                <td><MdDelete style={{ cursor: 'pointer' }} onClick={() => handleUserDelete(index)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users available</p>
      )}
    </div>
  );
};

export default UserList;
