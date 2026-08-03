import React from 'react';
import styles from './About.module.css';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.sectionHeader}>
            <div className={styles.labelWrapper}>
              <span className={styles.line}></span>
              <span className={styles.label}>About Me</span>
            </div>
            <h2 className={styles.title}>Passionate about building digital solutions</h2>
          </div>
        </ScrollReveal>

        <div className={styles.content}>
          <ScrollReveal direction="left" delay={200}>
            <div className={styles.imageColumn}>
              <div className={styles.imageFrame}>
                <div className={styles.imagePlaceholder}>
                  {/* Image placeholder with gradient */}
                </div>
                <div className={styles.decorativeBorder}></div>
              </div>
            </div>
          </ScrollReveal>

          <div className={styles.textColumn}>
            <ScrollReveal direction="right" delay={300}>
              <div className={styles.bio}>
                <p>
                  Hi, I&apos;m <strong>Mian Muhammad Umer</strong>, a software engineer with ~2 years of experience. I am deeply passionate about creating elegant web applications, mobile apps, and automation solutions that solve real-world problems.
                </p>
                <p>
                  My focus is on writing clean, efficient, and scalable code while delivering exceptional user experiences. I thrive in building systems from the ground up and have a strong foundation in modern tech stacks.
                </p>
                <p>
                  I am a continuous learner, always exploring new technologies and pushing boundaries to craft premium digital experiences.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>2+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>20+</span>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Technologies</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
