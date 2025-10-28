import React from 'react';
import { certifications } from '../data/certifications';
import styles from './Certifications.module.css';

const Certifications: React.FC = () => {
  const getLogoClass = (provider: string) => {
    if (provider.toLowerCase() === 'gemini') {
      return `${styles.logoImage} ${styles.geminiLogo}`;
    }
    return styles.logoImage;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    console.error(`Failed to load image: ${target.src}`);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    console.log(`Successfully loaded image: ${target.src}`);
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
                  onError={handleImageError}
                  onLoad={handleImageLoad}
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
