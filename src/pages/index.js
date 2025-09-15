import * as React from 'react';
import { Helmet } from 'react-helmet';

import SimpleLayout from '../components/SimpleLayout';
import ContactForm from '../components/ContactForm';

import * as styles from './index.module.css';

const IndexPage = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+15028239199';
  };

  return (
    <SimpleLayout>
      <Helmet>
        <title>Coastside Contracting LLC - Quality Construction, Honest Service</title>
        <meta name="description" content="Professional remodeling, repairs, and free estimates. Call (502) 823-9199 for quality construction services." />
      </Helmet>
      
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img 
              src="/logo-placeholder.svg" 
              alt="Coastside Contracting LLC Logo" 
              className={styles.logo}
            />
          </div>
          <h1 className={styles.businessName}>Coastside Contracting LLC</h1>
          <p className={styles.tagline}>Quality Construction, Honest Service</p>
          
          <div className={styles.contactInfo}>
            <button 
              className={styles.phoneButton}
              onClick={handleCallClick}
              aria-label="Call Coastside Contracting LLC"
            >
              📞 (502) 823-9199
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Remodeling</h3>
              <p>Complete home and commercial renovations with attention to detail and quality craftsmanship.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Repairs</h3>
              <p>Professional repair services for all your construction and maintenance needs.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Free Estimates</h3>
              <p>Get a detailed, no-obligation estimate for your project. Contact us today!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Get Your Free Estimate</h2>
          <p className={styles.contactDescription}>
            Ready to start your project? Fill out the form below and we'll get back to you with a detailed estimate.
          </p>
          <ContactForm />
        </div>
      </div>
    </SimpleLayout>
  );
};

export default IndexPage;