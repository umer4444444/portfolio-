import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

const posts: Record<string, BlogPostData> = {
  'building-scalable-web-apps-with-nextjs': {
    slug: 'building-scalable-web-apps-with-nextjs',
    title: 'Building Scalable Web Apps with Next.js 15',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    category: 'Web Dev',
    content: [
      'Next.js 15 represents a significant leap forward in the React ecosystem. With its enhanced App Router, improved Server Components, and built-in optimizations, it has become my go-to framework for building production-grade web applications.',
      'One of the most impactful features is the refined Server Components architecture. By default, components run on the server, reducing the JavaScript bundle sent to the client. This results in faster initial page loads and improved Core Web Vitals scores.',
      'The new caching strategies in Next.js 15 give developers granular control over data freshness. You can now configure caching at the route, component, or even request level, making it easier to balance performance with real-time data requirements.',
      'For state management, I have been leveraging a combination of React Server Components for server state and lightweight client-side solutions like Zustand for interactive UI state. This hybrid approach keeps the architecture clean while maintaining excellent performance.',
      'Another game-changer is the improved developer experience. Hot Module Replacement is faster than ever, TypeScript support is first-class, and the error overlay provides clear, actionable feedback that speeds up debugging significantly.',
      'When building scalable applications, I follow a modular architecture pattern: features are organized into self-contained modules with their own components, hooks, and utilities. This approach scales well as the application grows and makes it easier for teams to work in parallel.',
    ],
  },
  'automating-workflows-with-python': {
    slug: 'automating-workflows-with-python',
    title: 'Automating Repetitive Workflows with Python',
    date: 'Dec 28, 2024',
    readTime: '6 min read',
    category: 'Automation',
    content: [
      'As developers, we often find ourselves performing repetitive tasks that consume valuable time. Whether it is data entry, report generation, file management, or testing workflows, these tasks are prime candidates for automation.',
      'Python has become my weapon of choice for automation. Its rich ecosystem of libraries, readable syntax, and cross-platform compatibility make it ideal for building automation scripts that actually save time.',
      'The first step in any automation project is identifying the right tasks to automate. I look for tasks that are performed frequently, follow predictable patterns, and consume significant time. A task that takes 30 minutes daily and can be automated in 4 hours pays for itself within a week.',
      'For web automation, I rely on Selenium and Playwright. These tools can navigate websites, fill forms, click buttons, and extract data just like a human would. I have used them to automate data extraction from client portals, saving 20+ hours of manual work per week.',
      'File system automation is another area where Python shines. Using libraries like os, shutil, and watchdog, I have built scripts that automatically organize downloads, convert file formats, generate reports from templates, and sync data across directories.',
      'The key to successful automation is building in error handling and logging from the start. Scripts should fail gracefully, notify you of issues, and maintain logs for debugging. I always include retry logic for network operations and validation checks for data integrity.',
    ],
  },
  'react-native-vs-flutter': {
    slug: 'react-native-vs-flutter',
    title: "React Native vs Flutter in 2025: A Developer's Perspective",
    date: 'Nov 10, 2024',
    readTime: '10 min read',
    category: 'Mobile',
    content: [
      'Having built production apps with both React Native and Flutter, I often get asked which framework is better. The honest answer? It depends on your project requirements, team expertise, and long-term goals.',
      'React Native has matured significantly with the New Architecture (Fabric and TurboModules). Performance gaps that once existed have narrowed considerably. If your team already knows React, the learning curve is gentle, and you can share logic between web and mobile apps.',
      'Flutter, on the other hand, offers pixel-perfect control over every visual element. Its widget-based architecture and Skia rendering engine ensure consistent UI across platforms. The hot reload experience in Flutter is remarkably fast and reliable.',
      'For performance-critical applications, Flutter has a slight edge due to its compiled nature. React Native has closed this gap with the new architecture, but Flutter still leads in complex animations and custom UI rendering.',
      'The ecosystem is another important consideration. React Native benefits from the vast npm ecosystem, while Flutter has a growing but smaller package collection. However, Flutter packages tend to be more consistent in quality since they follow stricter guidelines.',
      'My recommendation: choose React Native if you have a React-experienced team, need to share code with a web app, or want access to the npm ecosystem. Choose Flutter if you need pixel-perfect UI consistency, complex animations, or are starting fresh without framework preferences.',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // For static generation, we need to handle this synchronously
  // Next.js will resolve the params during build
  return params.then(({ slug }) => {
    const post = posts[slug];
    if (!post) return { title: 'Post Not Found' };
    return {
      title: `${post.title} — Mian Muhammad Umer`,
      description: post.content[0],
    };
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <div className={styles.container}>
          <Link href="/blog" className={styles.backLink}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M16 10H4M4 10l4-4M4 10l4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Blog
          </Link>

          <header className={styles.header}>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <span className={styles.author}>Mian Muhammad Umer</span>
              <span className={styles.dot}>·</span>
              <span>{post.date}</span>
              <span className={styles.dot}>·</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className={styles.body}>
            {post.content.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <footer className={styles.footer}>
            <div className={styles.authorCard}>
              <div className={styles.authorAvatar}>MU</div>
              <div>
                <p className={styles.authorName}>Mian Muhammad Umer</p>
                <p className={styles.authorBio}>
                  Software Engineer specializing in web, mobile, and automation.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
}
