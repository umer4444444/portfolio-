'use client';

import { useState } from 'react';
import styles from './Projects.module.css';
import ScrollReveal from './ScrollReveal';

type Category = 'All' | 'Web' | 'App' | 'Automation';

interface Project {
  id: number;
  title: string;
  description: string;
  category: Category;
  tags: string[];
  gradient: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Outreach Automation Agent',
    description: 'Fully automated outreach agent that scrapes directories, verifies emails, and drafts personalized emails using AI.',
    category: 'Automation',
    tags: ['n8n', 'OpenAI', 'Python'],
    gradient: 'linear-gradient(135deg, #E8E2D8, #C2703E)'
  },
  {
    id: 2,
    title: 'YouTube Automation Bot',
    description: 'Multi-API pipeline that fully translates, voice-swaps, and remasters YouTube videos autonomously.',
    category: 'Automation',
    tags: ['Python', 'ElevenLabs', 'n8n'],
    gradient: 'linear-gradient(135deg, #6B7F5E, #E8E2D8)'
  },
  {
    id: 3,
    title: 'TaskFlow',
    description: 'A cross-platform project coordination platform with unified REST API and React Native client.',
    category: 'App',
    tags: ['React Native', 'PHP', 'MySQL'],
    gradient: 'linear-gradient(135deg, #FAF7F2, #2C2C2C)'
  },
  {
    id: 4,
    title: 'Heart Disease Predictor',
    description: 'A smart cross-platform mobile app analyzing health metrics to predict potential heart disease risk.',
    category: 'App',
    tags: ['React Native', 'Python', 'ML'],
    gradient: 'linear-gradient(135deg, #E0DAD0, #A85C32)'
  },
  {
    id: 5,
    title: 'Polymedia',
    description: 'Platform that transforms static PDF documents into dynamic, multilingual audio experiences.',
    category: 'Web',
    tags: ['PHP', 'Python', 'React'],
    gradient: 'linear-gradient(135deg, #F0EBE3, #6B7F5E)'
  }
];

const ProjectCard = ({ project, isAnimating }: { project: Project, isAnimating: boolean }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <div 
      className={`${styles.card} ${isAnimating ? styles.animating : ''}`}
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px` } as React.CSSProperties}
    >
      <div className={styles.spotlight}></div>
      <div className={styles.imageWrapper}>
        <div className={styles.gradientBg} style={{ background: project.gradient }} />
        <div className={styles.overlay}>
          <a href="#" className={styles.iconBtn} aria-label="GitHub Repository">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="#" className={styles.iconBtn} aria-label="Live Demo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag, i) => (
            <span key={i} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState<Category>('All');
  const [isAnimating, setIsAnimating] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);

  const handleFilter = (category: Category) => {
    if (category === filter) return;
    setIsAnimating(true);
    setFilter(category);
    
    setTimeout(() => {
      if (category === 'All') {
        setFilteredProjects(projectsData);
      } else {
        setFilteredProjects(projectsData.filter(p => p.category === category));
      }
      setIsAnimating(false);
    }, 300);
  };

  const categories: Category[] = ['All', 'Web', 'App', 'Automation'];

  return (
    <section id="projects" className={styles.section}>
      <ScrollReveal>
        <span className={styles.label}>Portfolio</span>
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <h2 className={styles.title}>Featured Projects</h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.filterBtnActive : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.id} delay={100 + (index % 3) * 100}>
            <ProjectCard project={project} isAnimating={isAnimating} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
