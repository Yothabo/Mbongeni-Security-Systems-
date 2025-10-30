import React from 'react';
import { certifications } from '../data/certifications';
import styles from './Certifications.module.css';

const Certifications: React.FC = () => {
  const getCardClass = (cert: any) => {
    const baseClass = styles.certificationCard;
    const heightClass = styles[`height-${cert.height}`];
    const widthClass = styles[`width-${cert.width}`];
    
    return `${baseClass} ${heightClass} ${widthClass}`;
  };

  return (
    <section className={styles.certifications}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Certified Excellence</h2>
        <p className={styles.sectionSubtitle}>
          We are certified partners and experts in leading security and networking technologies. 
          Our expertise spans across surveillance, access control, alarm systems, and network infrastructure.
        </p>
        
        <div className={styles.certificationsGallery}>
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={getCardClass(cert)}
            >
              <div className={styles.cardContent}>
                <h3>{cert.name}</h3>
                <p className={styles.description}>{cert.provider} - {cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
