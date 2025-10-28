import React from 'react';
import Gallery from '../components/Gallery';
import styles from './GalleryPage.module.css';

const GalleryPage: React.FC = () => {
  return (
    <div className={styles.galleryPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Project Gallery</h1>
        <p className={styles.pageSubtitle}>
          See our recent security system installations and projects
        </p>
      </div>
      <Gallery />
    </div>
  );
};

export default GalleryPage;
