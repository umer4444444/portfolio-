'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import styles from './BlogPreview.module.css';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'building-scalable-web-apps-with-nextjs',
    title: 'Building Scalable Web Apps with Next.js 15',
    excerpt:
      'Explore the latest features of Next.js 15 and learn how to build performant, scalable web applications with the App Router, Server Components, and more.',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    category: 'Web Dev',
    categoryColor: 'accent',
  },
  {
    slug: 'automating-workflows-with-python',
    title: 'Automating Repetitive Workflows with Python',
    excerpt:
      'How I saved 20+ hours per week by building custom automation scripts. A practical guide to identifying and automating repetitive tasks.',
    date: 'Dec 28, 2024',
    readTime: '6 min read',
    category: 'Automation',
    categoryColor: 'olive',
  },
  {
    slug: 'react-native-vs-flutter',
    title: 'React Native vs Flutter in 2025: A Developer\'s Perspective',
    excerpt:
      'An honest comparison of React Native and Flutter based on real project experience. Performance, DX, ecosystem, and when to use which.',
    date: 'Nov 10, 2024',
    readTime: '10 min read',
    category: 'Mobile',
    categoryColor: 'accent',
  },
];

export default function BlogPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="blog" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.label}>Blog</span>
          <h2 className={styles.title}>Latest Articles</h2>
          <p className={styles.subtitle}>
            Thoughts, tutorials, and insights from my journey as a software engineer.
          </p>
        </ScrollReveal>

        <div className={styles.grid}>
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 150} direction="up">
              <a
                href={`/blog/${post.slug}`}
                className={styles.card}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`${styles.cardImage} ${
                    styles[`gradient${index + 1}`]
                  }`}
                >
                  <span
                    className={`${styles.category} ${
                      post.categoryColor === 'olive'
                        ? styles.categoryOlive
                        : styles.categoryAccent
                    }`}
                  >
                    {post.category}
                  </span>
                  <div className={styles.cardImagePattern}>
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={styles.patternDot} />
                    ))}
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.meta}>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.readTime}>{post.readTime}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>

                  <span className={styles.readMore}>
                    Read Article
                    <svg
                      className={`${styles.arrow} ${
                        hoveredIndex === index ? styles.arrowActive : ''
                      }`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className={styles.viewAll}>
            <a href="/blog" className={styles.viewAllLink}>
              View All Articles
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 10h12M12 6l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
