'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.accentLine}></div>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.col}>
            <div className={styles.logo}>Umer.</div>
            <p className={styles.tagline}>
              Crafting premium digital experiences with code and passion.
            </p>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Social</h4>
            <ul className={styles.links}>
              <li><a href="https://github.com/umer" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/umer" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com/umer" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Mian Muhammad Umer. Crafted with passion.
          </p>
          <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
            <span>Back to top</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
