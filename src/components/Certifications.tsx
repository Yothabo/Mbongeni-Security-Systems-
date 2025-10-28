import React from 'react';
import styles from './Certifications.module.css';

// CORRECTED PATHS: from components to assets is just one level up
import hikvisionLogo from '../assets/certifications/hikvision.png';
import centurionLogo from '../assets/certifications/centurion.png';
import geminiLogo from '../assets/certifications/gemini.png';

const certifications = [
  {
    id: 1,
    name: "Hikvision Certified",
    provider: "Hikvision",
    logo: hikvisionLogo
  },
  {
    id: 2,
    name: "Centurion Systems",
    provider: "Centurion", 
    logo: centurionLogo
  },
  {
    id: 3,
    name: "Gemini Certified",
    provider: "Gemini",
    logo: geminiLogo
  }
];

const Certifications: React.FC = () => {
  const getLogoClass = (provider: string) => {
    if (provider.toLowerCase() === 'gemini') {
      return `${styles.logoImage} ${styles.geminiLogo}`;
    }
    return styles.logoImage;
  };

  return (
    <section className={styles.certifications}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Certified Excellence</h2>
        <div className={styles.certificationsGrid}>
          {certifications.map((cert) => (
            <div key={cert.id} className={styles.certificationCard}>
              <div className={styles.certificationLogo}>
                <img
                  src={cert.logo}
                  alt={`${cert.provider} Logo`}
                  className={getLogoClass(cert.provider)}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
