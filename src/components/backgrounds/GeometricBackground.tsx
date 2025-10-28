import React from 'react';
import styles from './GeometricBackground.module.css';

const GeometricBackground: React.FC = () => {
  return (
    <div className={styles.geometricBackground}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
      
      <div className={styles.triangle1}></div>
      <div className={styles.triangle2}></div>
      <div className={styles.triangle3}></div>
      
      <div className={styles.square1}></div>
      <div className={styles.square2}></div>
      <div className={styles.square3}></div>
      
      <div className={styles.hexagon1}></div>
      <div className={styles.hexagon2}></div>
    </div>
  );
};

export default GeometricBackground;
