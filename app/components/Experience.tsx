'use client';

import styles from './Experience.module.css';
import ScrollReveal from './ScrollReveal';

interface ExperienceEntry {
  id: number;
  role: string;
  company: string;
  date: string;
  description: string;
  type: 'work' | 'education';
}

const experiences: ExperienceEntry[] = [
  {
    id: 1,
    role: 'Freelance Software Engineer',
    company: 'Self-employed',
    date: 'Jan 2025 – Present',
    description: 'Built 15+ client projects including web apps, mobile apps, and automation tools.',
    type: 'work'
  },
  {
    id: 2,
    role: 'Junior Web Developer',
    company: 'Tech Solutions Inc.',
    date: 'Jun 2024 – Dec 2024',
    description: 'Developed and maintained React-based web applications.',
    type: 'work'
  },
  {
    id: 3,
    role: 'Web Development Intern',
    company: 'Digital Agency',
    date: 'Jan 2024 – May 2024',
    description: 'Contributed to 5+ client projects using modern web technologies.',
    type: 'work'
  },
  {
    id: 4,
    role: 'Bachelor in Computer Science',
    company: 'University',
    date: '2020 – 2024',
    description: 'Graduated with focus on software engineering and web technologies.',
    type: 'education'
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <ScrollReveal>
        <span className={styles.label}>Journey</span>
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <h2 className={styles.title}>Experience & Education</h2>
      </ScrollReveal>

      <div className={styles.timeline}>
        <div className={styles.lineProgress}></div>
        
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={exp.id} className={`${styles.entry} ${isLeft ? styles.left : styles.right}`}>
              <div className={styles.dot}></div>
              <ScrollReveal direction={isLeft ? 'left' : 'right'} delay={100}>
                <div className={styles.card}>
                  <div className={styles.dateBadge}>{exp.date}</div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <div className={styles.company}>
                    {exp.type === 'work' ? (
                      <svg className={styles.companyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    ) : (
                      <svg className={styles.companyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    )}
                    {exp.company}
                  </div>
                  <p className={styles.description}>{exp.description}</p>
                </div>
              </ScrollReveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
