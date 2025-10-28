import React, { useState, useRef, useCallback } from 'react';
import {
  FaVideo,
  FaBolt,
  FaKey,
  FaShieldAlt,
  FaFingerprint,
  FaIdCard,
  FaEye,
  FaRulerVertical,
  FaBell,
  FaFire,
  FaCamera,
  FaCar,
  FaUserLock,
  FaSatelliteDish,
  FaVolumeMute,
  FaThermometer,
  FaArrowsAlt,
  FaPhone,
  FaCarCrash
} from 'react-icons/fa';
import { services } from '../data/services';
import styles from './Services.module.css';

const Services: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const getServiceIcon = (serviceName: string) => {
    const name = serviceName.toLowerCase();
    
    // Camera Systems - All unique camera-related icons
    if (name.includes('cctv') || name.includes('camera system')) return <FaVideo className={styles.icon} />;
    if (name.includes('number plate') || name.includes('license plate')) return <FaCar className={styles.icon} />;
    if (name.includes('pan-tilt') || name.includes('ptz')) return <FaArrowsAlt className={styles.icon} />;
    if (name.includes('thermal') || name.includes('heat detection')) return <FaThermometer className={styles.icon} />;
    
    // Fencing - Unique fencing icons
    if (name.includes('electric fencing') || name.includes('electric fence')) return <FaBolt className={styles.icon} />;
    if (name.includes('razor wire')) return <FaRulerVertical className={styles.icon} />;
    if (name.includes('palissade') || name.includes('palisade')) return <FaShieldAlt className={styles.icon} />;
    if (name.includes('bollard') || name.includes('barrier')) return <FaCarCrash className={styles.icon} />;
    
    // Access Control - Unique access icons
    if (name.includes('fingerprint')) return <FaFingerprint className={styles.icon} />;
    if (name.includes('facial') || name.includes('face recognition')) return <FaUserLock className={styles.icon} />;
    if (name.includes('card access') || name.includes('rfid')) return <FaIdCard className={styles.icon} />;
    if (name.includes('intercom') || name.includes('video entry')) return <FaPhone className={styles.icon} />;
    
    // Alarms & Sensors - Unique sensor icons
    if (name.includes('intruder alarm')) return <FaBell className={styles.icon} />;
    if (name.includes('motion sensor')) return <FaSatelliteDish className={styles.icon} />;
    if (name.includes('glass break')) return <FaVolumeMute className={styles.icon} />;
    if (name.includes('smoke') || name.includes('fire detection')) return <FaFire className={styles.icon} />;
    
    // Default fallback
    return <FaShieldAlt className={styles.icon} />;
  };

  const handleCardClick = (id: number) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  const handleCloseExpanded = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCard(null);
  };

  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  const categories = Object.keys(servicesByCategory);
  const categoryTitles = {
    'cameras': 'Cameras',
    'fencing': 'Fencing', 
    'access-control': 'Access Control',
    'alarms-sensors': 'Alarms & Sensors'
  };

  const nextCategory = useCallback(() => {
    setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
    setExpandedCard(null);
  }, [categories.length]);

  const prevCategory = useCallback(() => {
    setCurrentCategoryIndex((prev) => (prev - 1 + categories.length) % categories.length);
    setExpandedCard(null);
  }, [categories.length]);

  // Touch event handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    if (expandedCard) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (expandedCard) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (expandedCard) return;
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextCategory();
    } else if (isRightSwipe) {
      prevCategory();
    }
  };

  // Mouse event handlers for desktop swipe simulation
  const onMouseDown = (e: React.MouseEvent) => {
    if (expandedCard) return;
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (expandedCard || !touchStart) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (expandedCard) return;
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextCategory();
    } else if (isRightSwipe) {
      prevCategory();
    }
    
    // Reset
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.subtitle}>
          Comprehensive security solutions tailored to protect your home, business, and assets. 
          From advanced surveillance to access control, we provide cutting-edge technology 
          with professional installation and ongoing support.
        </p>
        
        {/* Category Header - No arrows, just title and indicators */}
        <div className={styles.categoryHeader}>
          <div className={styles.categoryTitle}>
            {categoryTitles[categories[currentCategoryIndex] as keyof typeof categoryTitles]}
          </div>

          {/* Category Indicators */}
          <div className={styles.categoryIndicators}>
            {categories.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentCategoryIndex ? styles.active : ''}`}
                onClick={() => {
                  setCurrentCategoryIndex(index);
                  setExpandedCard(null);
                }}
              />
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className={styles.carouselContainer}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <div 
            className={styles.carouselTrack}
            style={{ 
              transform: `translateX(-${currentCategoryIndex * 100}%)` 
            }}
          >
            {categories.map((category, index) => {
              const categoryServices = servicesByCategory[category];
              
              return (
                <div 
                  key={category} 
                  className={styles.categorySlide}
                >
                  <div className={styles.grid}>
                    {categoryServices.map((service) => {
                      const isExpanded = expandedCard === service.id;
                      // Only hide other cards if the expanded card is in the current category
                      const isHidden = expandedCard && 
                        !isExpanded && 
                        categoryServices.some(s => s.id === expandedCard);
                      
                      return (
                        <div 
                          key={service.id} 
                          className={`${styles.card} ${isExpanded ? styles.expanded : ''} ${isHidden ? styles.hidden : ''}`}
                          onClick={() => handleCardClick(service.id)}
                        >
                          {/* Close button for expanded view */}
                          {isExpanded && (
                            <button 
                              className={styles.closeButton}
                              onClick={handleCloseExpanded}
                            >
                              ×
                            </button>
                          )}
                          
                          <div className={styles.iconWrapper}>
                            {getServiceIcon(service.name)}
                          </div>
                          <h3 className={styles.name}>{service.name}</h3>
                          
                          {/* Description - hidden on mobile unless expanded */}
                          <div className={styles.descriptionWrapper}>
                            <p className={styles.description}>{service.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Swipe Instruction Hint (Mobile Only) */}
        <div className={styles.swipeHint}>
          <span>Swipe to navigate categories</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
