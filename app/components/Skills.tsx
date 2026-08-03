'use client';

import React, { useState } from 'react';
import styles from './Skills.module.css';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟩' },
      { name: 'Python', icon: '🐍' },
      { name: 'Express', icon: '🚂' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'REST APIs', icon: '🔌' },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'React Native', icon: '📱' },
      { name: 'Flutter', icon: '🦅' },
    ],
  },
  {
    title: 'Tools & Automation',
    skills: [
      { name: 'Git', icon: '🐙' },
      { name: 'Docker', icon: '🐳' },
      { name: 'CI/CD', icon: '⚙️' },
      { name: 'Selenium', icon: '🤖' },
      { name: 'Web Scraping', icon: '🕸️' },
      { name: 'Automation', icon: '⚡' },
    ],
  },
];

const SkillCard = ({ skill }: { skill: { name: string, icon: string } }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <div 
      className={styles.skillCard}
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px` } as React.CSSProperties}
    >
      <div className={styles.spotlight}></div>
      <span className={styles.skillIcon}>{skill.icon}</span>
      <span className={styles.skillName}>{skill.name}</span>
    </div>
  );
};

const Skills = () => {
  const allTechnologies = skillCategories.flatMap(cat => cat.skills.map(s => s.name));

  return (
    <section id="skills" className={styles.sectionAlt}>
      <div className={styles.container}>
        <ScrollReveal direction="up">
          <span className={styles.label}>Tech Stack</span>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={100}>
          <h2 className={styles.title}>Skills & Technologies</h2>
        </ScrollReveal>

        <div className={styles.categories}>
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className={styles.categoryBlock}>
              <ScrollReveal direction="up" delay={catIndex * 100}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </ScrollReveal>
              <div className={styles.skillGrid}>
                {category.skills.map((skill, index) => (
                  <ScrollReveal
                    key={skill.name}
                    direction="up"
                    delay={(catIndex * 100) + (index * 50)}
                  >
                    <SkillCard skill={skill} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          {[...allTechnologies, ...allTechnologies].map((tech, index) => (
            <span key={`${tech}-${index}`} className={styles.marqueeItem}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
