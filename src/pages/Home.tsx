import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Certifications from '../components/Certifications';
import Gallery from '../components/Gallery';
import ContactSection from '../components/ContactSection';
import NewsSection from '../components/NewsSection';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Services />
      <Certifications />
      <Gallery />
      <ContactSection />
      <NewsSection />
    </div>
  );
};

export default Home;
