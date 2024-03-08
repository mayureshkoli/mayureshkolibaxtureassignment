import React, { useState, useEffect } from 'react';
import styles from './userUpsert.module.css';
import { uid } from 'uid';
import { useLocation, useNavigate } from 'react-router-dom';

const UserUpsert = () => {
    const [formData, setFormData] = useState({
        _id: uid(),
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phone: ''
    });
    const navigate = useNavigate();
    const { state } = useLocation();
    
    useEffect(() => {
        if (state) {
            setFormData(state);
        }
    }, [state]);

    const handleCancel = () => {
      setFormData({
          _id: uid(),
          firstName: '',
          lastName: '',
          address: '',
          email: '',
          phone: ''
      });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        const { firstName, lastName, address, email, phone } = formData;

        // Validation
        if (!firstName.trim() || !lastName.trim() || !address.trim() || !email.trim() || !phone.trim()) {
            alert('All fields are required');
            return;
        }
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        if (!isValidPhone(phone)) {
            alert('Phone number should contain 10 digits only');
            return;
        }

        // Save or update user data
        const userList = JSON.parse(localStorage.getItem('userList')) || [];
        const existingUserIndex = userList.findIndex(user => user.email === formData.email);
        if (existingUserIndex !== -1) {
            alert('User already exists. Updating user information.');
            userList[existingUserIndex] = formData;
        } else {
            userList.push(formData);
        }
        localStorage.setItem('userList', JSON.stringify(userList));

        // Navigate back to user list
        navigate("/userList");
    };

    // Validation functions
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhone = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    return (
        <div className={styles.mainDiv}>
            <h1 className={styles.pageHeading}>USER UPSERT</h1>
            <form onSubmit={handleFormSubmit} className={styles.upsertForm}>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className={styles.inputField}
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className={styles.inputField}
                />
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className={styles.inputField}
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={styles.inputField}
                />
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className={`${styles.inputField} ${styles.numberInput}`}
                />
                <button type="submit" className={styles.submitButton}>SUBMIT</button>
            </form>
            {state? <button className={styles.cancelButton} onClick={handleCancel}>CANCEL</button> : null}
        </div>
    );
};

export default UserUpsert;
