import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorTitle}>Page Not Found</h2>
        <p className={styles.errorMessage}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className={styles.homeButton}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
