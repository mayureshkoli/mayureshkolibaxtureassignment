import React from 'react';
import styles from './userHome.module.css';
import { useNavigate } from 'react-router';

const UserHome = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.mainDiv}>
            <h1 className={styles.pageHeading}>USER HOME</h1>
            <div className={styles.userHomeSubDiv}>
                <button onClick={() =>navigate('/userUpsert')} className={styles.button}>USER-UPSERT</button>
                <button onClick={() => navigate('/userList')} className={styles.button}>USER-LIST</button>
            </div>
        </div>
    )
}

export default UserHome
