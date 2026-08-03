'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    id: 1,
    quote: "Umer delivered our e-commerce platform ahead of schedule. His attention to detail and code quality is exceptional.",
    author: "Sarah Chen",
    title: "CEO at TechStart",
    initials: "SC"
  },
  {
    id: 2,
    quote: "Working with Umer was a game-changer. He automated our entire data pipeline, saving us 20+ hours weekly.",
    author: "Ahmed Khan",
    title: "CTO at DataFlow",
    initials: "AK"
  },
  {
    id: 3,
    quote: "The mobile app Umer built for us received amazing user feedback. Professional, responsive, and talented.",
    author: "Maria Garcia",
    title: "Founder of FitLife",
    initials: "MG"
  },
  {
    id: 4,
    quote: "Umer's expertise in web development helped us launch our platform 2 weeks early. Highly recommended!",
    author: "James Wilson",
    title: "PM at CloudScale",
    initials: "JW"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const StarRating = () => (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className={styles.section}>
      <ScrollReveal className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.title}>What Clients Say</h2>
        </div>

        <div 
          className={styles.carousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={styles.quotesMark}>"</div>
          
          <div className={styles.slidesWrapper}>
            {testimonials.map((t, index) => (
              <div 
                key={t.id} 
                className={`${styles.slide} ${index === activeIndex ? styles.active : ''} ${index < activeIndex ? styles.prev : ''} ${index > activeIndex ? styles.next : ''}`}
                style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
              >
                <StarRating />
                <p className={styles.quoteText}>{t.quote}</p>
                <div className={styles.authorInfo}>
                  <div className={styles.avatar}>
                    <span>{t.initials}</span>
                  </div>
                  <div>
                    <h4 className={styles.authorName}>{t.author}</h4>
                    <p className={styles.authorTitle}>{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.controls}>
            <button className={styles.arrowBtn} onClick={prevSlide} aria-label="Previous testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button className={styles.arrowBtn} onClick={nextSlide} aria-label="Next testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
