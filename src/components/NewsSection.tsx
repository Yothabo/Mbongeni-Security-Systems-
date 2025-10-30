import React from 'react';
import styles from './NewsSection.module.css';

const NewsSection: React.FC = () => {
  return (
    <section className={styles.news} id="news">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Security Industry Updates</h2>
        <p className={styles.sectionSubtitle}>
          Latest trends, technologies, and developments in security systems and services.
        </p>

        <div className={styles.newsGrid}>
          <article className={styles.newsCard}>
            <div className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80"
                alt="Smart Security Systems"
                className={styles.newsImage}
              />
            </div>
            <div className={styles.newsContent}>
              <h3 className={styles.newsTitle}>Smart Security Systems Transforming Home Protection</h3>
              <p className={styles.newsDescription}>
                Advanced AI-powered surveillance and integrated security solutions are becoming essential 
                for modern home and business security across major cities.
              </p>
              <div className={styles.newsMeta}>
                <span className={styles.newsSource}>Security Tech Review</span>
                <span className={styles.newsDate}>Just now</span>
              </div>
            </div>
          </article>

          <article className={styles.newsCard}>
            <div className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80"
                alt="Security Regulations"
                className={styles.newsImage}
              />
            </div>
            <div className={styles.newsContent}>
              <h3 className={styles.newsTitle}>New Regulations for Professional Security Installation</h3>
              <p className={styles.newsDescription}>
                Updated national standards emphasize proper CCTV placement, alarm system integration, 
                and professional certification requirements for security installations.
              </p>
              <div className={styles.newsMeta}>
                <span className={styles.newsSource}>Security Standards Authority</span>
                <span className={styles.newsDate}>1 day ago</span>
              </div>
            </div>
          </article>
        </div>

        <div className={styles.newsFooter}>
          <p>Stay informed about the latest security technologies and best practices</p>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
