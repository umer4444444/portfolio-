'use client';

import React, { useState, useEffect } from 'react';
import MagneticElement from './MagneticElement';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section highlighting
      const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement);
      let current = '';

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id') || '';
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <MagneticElement>
          <a href="#home" className={styles.logo}>
            Umer.
          </a>
        </MagneticElement>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navItems}>
            {navLinks.map((link, index) => (
              <li 
                key={link.name} 
                className={styles.navItem}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <MagneticElement>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${activeSection === link.href.substring(1) ? styles.active : ''}`}
                  >
                    {link.name}
                  </a>
                </MagneticElement>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger */}
        <button 
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerActive : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.overlayActive : ''}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavActive : ''}`}>
        <ul className={styles.mobileNavItems}>
          {navLinks.map((link, index) => (
            <li 
              key={link.name} 
              className={styles.mobileNavItem}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <a
                href={link.href}
                className={`${styles.mobileNavLink} ${activeSection === link.href.substring(1) ? styles.active : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
