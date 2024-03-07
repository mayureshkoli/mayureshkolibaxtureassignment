import React, { useState } from 'react';
import styles from './userUpsert.module.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const UserUpsert = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phone: ''
    })
    const [value, setValue] = useState()
    // Function to handle input changes and update form data state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
       try{
           e.preventDefault();
           console.log(formData)
       }catch(err){
        console.log(err);
        alert('Something Went Wrong. Try again!')
       }
    }
    
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

        return phoneNumberPattern.test(phoneNumber);
    };

    return (
      <div className={styles.mainDiv}>
        <h1 className={styles.pageHeading}>USER-UPSERT</h1>
        <form onSubmit={handleFormSubmit} className={styles.upsertForm}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName} // Bind value to state
            onChange={handleInputChange} // Handle input change
            placeholder="First Name"
            className={styles.inputField}
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName} // Bind value to state
            onChange={handleInputChange} // Handle input change
            placeholder="Last Name"
            className={styles.inputField}
          />
          <input
            type="text"
            name="address"
            value={formData.address} // Bind value to state
            onChange={handleInputChange} // Handle input change
            placeholder="Address"
            className={styles.inputField}
          />
          <input
            type="email"
            name="email"
            value={formData.email} // Bind value to state
            onChange={handleInputChange} // Handle input change
            placeholder="Email"
            className={styles.inputField}
          />
          <input
            type="number"
            name="phone"
            value={formData.phone} // Bind value to state
            onChange={handleInputChange} // Handle input change
            placeholder="Phone"
            className={`${styles.inputField} ${styles.numberInput}`}
            maxLength={10}
          />
          <PhoneInput
            country={'in'}
            value={phoneNumber}
            onChange={handleChange}
            inputProps={{
                required: true,
            }}
            
           />
            {!valid && (
                <p>Please enter a valid phone number.</p>
            )}
          <button type='submit' className={styles.submitButton}>SUBMIT</button>
        </form>
      </div>
    );
}

export default UserUpsert;
