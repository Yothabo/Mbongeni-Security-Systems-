import React from 'react';
import styles from './Gallery.module.css';

const Gallery: React.FC = () => {
  const projects = [
    { id: 1, title: 'Commercial CCTV', category: 'CCTV' },
    { id: 2, title: 'Perimeter Security', category: 'Fencing' },
    { id: 3, title: 'Access Control', category: 'Security' },
    { id: 4, title: 'Smart Home', category: 'Automation' },
  ];

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Projects</h2>
        <div className={styles.galleryGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  {project.category}
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectCategory}>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
