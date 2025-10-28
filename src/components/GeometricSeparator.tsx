import React from 'react';
import styles from './GeometricSeparator.module.css';

const GeometricSeparator: React.FC = () => {
  const getVariedSize = (baseSize: number, variation: number = 12) => {
    const randomVariation = (Math.random() - 0.5) * variation;
    return Math.max(12, baseSize + randomVariation);
  };

  const getVariedOpacity = (baseOpacity: number, variation: number = 0.1) => {
    const randomVariation = (Math.random() - 0.5) * variation;
    
    if (Math.random() < 0.2) {
      return 0;
    }
    
    return Math.max(0.03, Math.min(0.2, baseOpacity + randomVariation));
  };

  const getShapeType = (colIndex: number) => {
    const random = Math.random();
    if (random < 0.5) return 'square';
    if (random < 0.7) return 'rectangle';
    if (random < 0.85) return 'triangle';
    return 'circle';
  };

  const getShapeColor = () => {
    return Math.random() < 0.6 ? 'lime' : 'gray';
  };

  return (
    <div className={styles.geometricSeparator}>
      <div className={styles.cubeGrid}>
        {Array.from({ length: 8 }, (_, rowIndex) => (
          <div key={rowIndex} className={styles.cubeRow}>
            {Array.from({ length: 12 }, (_, colIndex) => {
              const baseSize = 36 - (colIndex / 11) * 20;
              const middlePosition = Math.abs(colIndex - 5.5) / 5.5;
              const baseOpacity = 0.15 - (middlePosition * 0.12);
              
              const size = getVariedSize(baseSize, 12);
              const opacity = getVariedOpacity(baseOpacity, 0.1);
              const shapeType = getShapeType(colIndex);
              const colorType = getShapeColor();

              return (
                <div 
                  key={colIndex} 
                  className={`${styles.shape} ${styles[shapeType]} ${styles[colorType]}`}
                  style={{
                    opacity: opacity,
                    animationDelay: `${(rowIndex * 12 + colIndex) * 0.1}s`,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeometricSeparator;
