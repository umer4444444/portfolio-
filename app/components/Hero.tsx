'use client';

import MagneticElement from './MagneticElement';
import styles from './Hero.module.css';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
        <div className={`${styles.shape} ${styles.shape4}`}></div>
        
        {/* Particles */}
        <div className={`${styles.particle} ${styles.particle1}`}></div>
        <div className={`${styles.particle} ${styles.particle2}`}></div>
        <div className={`${styles.particle} ${styles.particle3}`}></div>
        <div className={`${styles.particle} ${styles.particle4}`}></div>
      </div>

      <div className={styles.container}>
        {/* Status Badge */}
        <div className={styles.statusBadgeWrapper}>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot}></span>
            Available for work
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <div className={styles.animatedGlow}></div>
            <h1 className={styles.title}>
              <div className={styles.lineReveal}>
                <span className={styles.wordReveal} style={{ animationDelay: '0.2s' }}>Mian</span>
                <span className={styles.wordReveal} style={{ animationDelay: '0.4s' }}>Muhammad</span>
              </div>
              <div className={styles.lineReveal}>
                <span className={styles.wordReveal} style={{ animationDelay: '0.6s', color: 'var(--accent, #C2703E)' }}>Umer.</span>
              </div>
            </h1>
          </div>

          <div className={styles.subtitleWrapper}>
            <h2 className={styles.subtitle}>
              Software Engineer
            </h2>
          </div>

          <p className={styles.tagline}>
            Crafting elegant web applications, mobile experiences & intelligent automation solutions.
          </p>

          <div className={styles.ctaGroup}>
            <MagneticElement>
              <button 
                className={styles.primaryBtn}
                onClick={() => scrollTo('projects')}
              >
                View My Work
              </button>
            </MagneticElement>
            <MagneticElement>
              <button 
                className={styles.secondaryBtn}
                onClick={() => scrollTo('contact')}
              >
                Get In Touch
              </button>
            </MagneticElement>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator} onClick={() => scrollTo('about')}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <div className={styles.chevrons}>
          <span className={styles.chevron}></span>
          <span className={styles.chevron}></span>
        </div>
      </div>
    </section>
  );
}
