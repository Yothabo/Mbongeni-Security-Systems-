import React from 'react';
import styles from './CertificationFooter.module.css';

const CertificationFooter: React.FC = () => {
  return (
    <div className={styles.certificationFooter}>
      <div className={styles.container}>
        <div className={styles.logos}>
          <img 
            src="/certifications/hikvision.png" 
            alt="Hikvision Certified" 
            className={styles.logo}
          />
          <img 
            src="/certifications/centurion.png" 
            alt="Centurion Systems Certified" 
            className={styles.logo}
          />
          <img 
            src="/certifications/gemini.png" 
            alt="Gemini Wireless Certified" 
            className={`${styles.logo} ${styles.geminiLogo}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CertificationFooter;
