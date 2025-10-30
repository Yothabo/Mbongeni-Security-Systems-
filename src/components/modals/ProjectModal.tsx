import React, { useState, useEffect } from 'react';
import styles from './ProjectModal.module.css';

interface Project {
  id: number;
  title: string;
  location: string;
  stats: string;
  images: string[];
  problem: string;
  solution: string;
  services: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  duration: string;
  scope: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* Back Button - Only way to close modal */}
        <button className={styles.backButton} onClick={onClose}>
          ← Back
        </button>

        <div className={styles.modalBody}>
          {/* Image Carousel */}
          <div className={styles.carouselSection}>
            <div className={styles.carousel}>
              <div className={styles.carouselImage}>
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className={styles.mainImage}
                />
                <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevImage}>
                  ‹
                </button>
                <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextImage}>
                  ›
                </button>
              </div>
              
              {/* Image Thumbnails */}
              {project.images.length > 1 && (
                <div className={styles.thumbnails}>
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      className={`${styles.thumbnail} ${index === currentImageIndex ? styles.active : ''}`}
                      onClick={() => goToImage(index)}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Content Area */}
          <div className={styles.contentArea}>
            {/* Problem & Solution */}
            <div className={styles.problemSolutionGrid}>
              <div className={styles.problemSection}>
                <h3 className={styles.sectionTitle}>The Challenge</h3>
                <p className={styles.problemText}>{project.problem}</p>
              </div>

              <div className={styles.solutionSection}>
                <h3 className={styles.sectionTitle}>Our Solution</h3>
                <p className={styles.solutionText}>{project.solution}</p>
              </div>
            </div>

            {/* Services & Testimonial */}
            <div className={styles.bottomSections}>
              <div className={styles.servicesSection}>
                <h3 className={styles.sectionTitle}>Services Provided</h3>
                <div className={styles.servicesList}>
                  {project.services.map((service, index) => (
                    <span key={index} className={styles.serviceTag}>{service}</span>
                  ))}
                </div>
                
                <div className={styles.projectMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Duration:</span>
                    <span className={styles.metaValue}>{project.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Scope:</span>
                    <span className={styles.metaValue}>{project.scope}</span>
                  </div>
                </div>
              </div>

              {/* Testimonial - Removed quote marks */}
              {project.testimonial && (
                <div className={styles.testimonial}>
                  <h3 className={styles.sectionTitle}>Client Testimonial</h3>
                  <p className={styles.testimonialText}>{project.testimonial.text}</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{project.testimonial.author}</strong>
                    <span>{project.testimonial.position}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
