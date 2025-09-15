import * as React from 'react';
import * as styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Free Estimate Request');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:info@coastsidecontractingllc.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className={styles.successMessage}>
        <h3>Thank you!</h3>
        <p>Your email client should have opened with your message. If not, please call us at (502) 823-9199.</p>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Your full name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="your.email@example.com"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className={styles.textarea}
            placeholder="Please describe your project, including any specific requirements, timeline, and location..."
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Send Request for Free Estimate
        </button>

        <p className={styles.disclaimer}>
          * By submitting this form, you agree to be contacted about your project. 
          We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;