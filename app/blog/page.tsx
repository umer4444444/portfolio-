import styles from './page.module.css';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  content: string;
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
    content: '',
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
    content: '',
  },
  {
    slug: 'react-native-vs-flutter',
    title: "React Native vs Flutter in 2025: A Developer's Perspective",
    excerpt:
      'An honest comparison of React Native and Flutter based on real project experience. Performance, DX, ecosystem, and when to use which.',
    date: 'Nov 10, 2024',
    readTime: '10 min read',
    category: 'Mobile',
    categoryColor: 'accent',
    content: '',
  },
];

export default function BlogPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16 10H4M4 10l4-4M4 10l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className={styles.heroTitle}>Blog</h1>
          <p className={styles.heroSubtitle}>
            Thoughts, tutorials, and insights from my journey as a software
            engineer.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={styles.card}
                style={{ animationDelay: `${index * 100}ms` }}
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
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.meta}>
                    <span>{post.date}</span>
                    <span className={styles.dot}>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <span className={styles.readMore}>
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
