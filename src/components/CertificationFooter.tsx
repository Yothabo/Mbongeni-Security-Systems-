import React from 'react';
import styles from './CertificationFooter.module.css';

const CertificationFooter: React.FC = () => {
  const certifications = [
    {
      name: 'Gemini',
      logo: '/certifications/gemini.png',
      alt: 'Gemini Certified'
    },
    {
      name: 'Hikvision',
      logo: '/certifications/hikvision.png',
      alt: 'Hikvision Certified'
    },
    {
      name: 'Centurion',
      logo: '/certifications/centurion.png',
      alt: 'Centurion Certified'
    }
  ];

  return (
    <div className={styles.certificationFooter}>
      <div className={styles.container}>
        <div className={styles.certificationsRow}>
          {certifications.map((cert, index) => (
            <div key={index} className={styles.certificationItem}>
              <img 
                src={cert.logo} 
                alt={cert.alt}
                className={styles.certificationLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationFooter;
