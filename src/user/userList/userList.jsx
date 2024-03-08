import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './userList.module.css';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const userlist = JSON.parse(localStorage.getItem('userList'));
    setUserList(userlist);
  }, []);

  const handleUserEdit = (user) => {
    navigate('/', { state: user });
  };

  const handleUserDelete = (index) => {
    const updatedUserList = [...userList];
    updatedUserList.splice(index, 1); // Remove the user at the specified index
    setUserList(updatedUserList); // Update the state
    localStorage.setItem('userList', JSON.stringify(updatedUserList)); // Update localStorage
  };

  return (
    <div className={styles.userListMainDiv}>
      <button className={styles.backButton} onClick={() => navigate('/')}>BACK TO USER-UPSERT</button>
      {userList.length !== 0 ? (
        <table className={styles.userListTable}>
          <thead>
            <tr>
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
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
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
