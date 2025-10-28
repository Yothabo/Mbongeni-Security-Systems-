import React from 'react';
import { 
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';
import { CONFIG } from '../config';
import { socialLinks } from '../data/socialLinks';
import { services } from '../data/services';
import styles from './ContactSection.module.css';

const ContactSection: React.FC = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'whatsapp':
        return <FaWhatsapp className={styles.socialIcon} />;
      case 'facebook':
        return <FaFacebook className={styles.socialIcon} />;
      case 'instagram':
        return <FaInstagram className={styles.socialIcon} />;
      case 'email':
        return <FaEnvelope className={styles.socialIcon} />;
      default:
        return null;
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactSubtitle}>Get in Touch</h3>
            
            <div className={styles.contactItem}>
              <FaPhone className={styles.contactIcon} />
              <div>
                <h4>Phone</h4>
                <p>{CONFIG.company.phone}</p>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.contactIcon} />
              <div>
                <h4>Email</h4>
                <p>{CONFIG.company.email}</p>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <h4>Follow Us</h4>
              <div className={styles.socialIcons}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {getSocialIcon(social.name)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h3 className={styles.contactSubtitle}>Send Message</h3>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <select className={styles.formInput} required>
                  <option value="">Select Service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className={styles.formTextarea}
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
