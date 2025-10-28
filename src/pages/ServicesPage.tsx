import React from 'react';
import Services from '../components/Services';
import styles from './ServicesPage.module.css';

const ServicesPage: React.FC = () => {
  return (
    <div className={styles.servicesPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Our Services</h1>
        <p className={styles.pageSubtitle}>
          Comprehensive security and electrical solutions for your home or business
        </p>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage;
