import React from 'react';
import styles from './CertificationFooter.module.css';

// CORRECTED PATHS
import hikvisionLogo from '../assets/certifications/hikvision.png';
import centurionLogo from '../assets/certifications/centurion.png';
import geminiLogo from '../assets/certifications/gemini.png';

const CertificationFooter: React.FC = () => {
  return (
    <div className={styles.certificationFooter}>
      <div className={styles.container}>
        <div className={styles.logos}>
          <img 
            src={hikvisionLogo} 
            alt="Hikvision Certified" 
            className={styles.logo}
          />
          <img 
            src={centurionLogo} 
            alt="Centurion Systems Certified" 
            className={styles.logo}
          />
          <img 
            src={geminiLogo} 
            alt="Gemini Wireless Certified" 
            className={`${styles.logo} ${styles.geminiLogo}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CertificationFooter;
