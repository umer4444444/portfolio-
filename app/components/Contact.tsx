'use client';

import { useState } from 'react';
import styles from './Contact.module.css';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = { name: '', email: '', subject: '', message: '' };
    let isValid = true;
    if (!formData.name.trim()) { newErrors.name = 'Name is required'; isValid = false; }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required'; isValid = false;
    }
    if (!formData.subject.trim()) { newErrors.subject = 'Subject is required'; isValid = false; }
    if (!formData.message.trim()) { newErrors.message = 'Message is required'; isValid = false; }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        alert("Failed to send message. Please try again.");
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      alert("Failed to send message. Please try again.");
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <ScrollReveal className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Get In Touch</span>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.subtitle}>Have a project in mind? I'd love to hear about it.</p>
        </div>

        <div className={styles.content}>
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.availability}>
                <span className={styles.pulseDot}></span>
                Available for freelance work
              </div>
              
              <div className={styles.contactDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Email</span>
                  <a href="mailto:umeramin577@gmail.com" className={styles.detailValue}>umeramin577@gmail.com</a>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Location</span>
                  <span className={styles.detailValue}>Pakistan</span>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a href="https://github.com/umer" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </a>
                <a href="https://linkedin.com/in/umer" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://twitter.com/umer" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.formCol}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.inputGroup}>
                <div className={`${styles.inputWrapper} ${formData.name ? styles.filled : ''}`}>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                  <label htmlFor="name">Your Name</label>
                  <div className={styles.line}></div>
                </div>
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>

              <div className={styles.inputGroup}>
                <div className={`${styles.inputWrapper} ${formData.email ? styles.filled : ''}`}>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                  <label htmlFor="email">Email Address</label>
                  <div className={styles.line}></div>
                </div>
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>

              <div className={styles.inputGroup}>
                <div className={`${styles.inputWrapper} ${formData.subject ? styles.filled : ''}`}>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                  <label htmlFor="subject">Subject</label>
                  <div className={styles.line}></div>
                </div>
                {errors.subject && <span className={styles.error}>{errors.subject}</span>}
              </div>

              <div className={styles.inputGroup}>
                <div className={`${styles.inputWrapper} ${styles.textareaWrapper} ${formData.message ? styles.filled : ''}`}>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} />
                  <label htmlFor="message">Message</label>
                  <div className={styles.line}></div>
                </div>
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <button type="submit" className={styles.submitBtn} disabled={status === 'loading' || status === 'success'}>
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
                {status === 'loading' && <span className={styles.spinner}></span>}
                {status === 'success' && (
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
