import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Blog - Hong Yan AB | Tech Insights & Development Tips',
  description: 'Read our latest articles on full-stack development, cloud architecture, DevOps practices, and technology trends.',
}

const blogPosts = [
  {
    slug: 'nextjs-16-new-features',
    title: 'What&apos;s New in Next.js 16: A Complete Guide',
    excerpt: 'Explore the latest features in Next.js 16 including improved performance, new routing capabilities, and enhanced developer experience.',
    category: 'Frontend',
    date: '2026-01-20',
    readTime: '8 min read',
    icon: 'react',
  },
  {
    slug: 'spring-boot-microservices',
    title: 'Building Scalable Microservices with Spring Boot',
    excerpt: 'Learn how to design and implement microservices architecture using Spring Boot, Docker, and Kubernetes for enterprise applications.',
    category: 'Backend',
    date: '2026-01-15',
    readTime: '12 min read',
    icon: 'code',
  },
  {
    slug: 'aws-cost-optimization',
    title: 'AWS Cost Optimization Strategies for Startups',
    excerpt: 'Practical tips and strategies to reduce your AWS bill while maintaining performance and reliability for your cloud infrastructure.',
    category: 'Cloud',
    date: '2026-01-10',
    readTime: '10 min read',
    icon: 'cloud',
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for Large-Scale Applications',
    excerpt: 'Essential TypeScript patterns and practices for maintaining clean, type-safe code in enterprise-level React applications.',
    category: 'Frontend',
    date: '2026-01-05',
    readTime: '15 min read',
    icon: 'document',
  },
  {
    slug: 'docker-kubernetes-guide',
    title: 'From Docker to Kubernetes: A Developer&apos;s Journey',
    excerpt: 'A comprehensive guide to containerization and orchestration, from basic Docker concepts to deploying applications on Kubernetes.',
    category: 'DevOps',
    date: '2025-12-28',
    readTime: '20 min read',
    icon: 'cube',
  },
  {
    slug: 'postgresql-performance',
    title: 'PostgreSQL Performance Tuning for High-Traffic Apps',
    excerpt: 'Advanced techniques for optimizing PostgreSQL databases including indexing strategies, query optimization, and connection pooling.',
    category: 'Database',
    date: '2025-12-20',
    readTime: '14 min read',
    icon: 'database',
  },
]

const icons: Record<string, ReactNode> = {
  react: (
    <svg className="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
    </svg>
  ),
  code: (
    <svg className="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
    </svg>
  ),
  cloud: (
    <svg className="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 20 20">
      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
    </svg>
  ),
  document: (
    <svg className="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
    </svg>
  ),
  cube: (
    <svg className="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 20 20">
      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"/>
    </svg>
  ),
  database: (
    <svg className="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
      <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
      <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
    </svg>
  ),
}

const categories = ['All', 'Frontend', 'Backend', 'Cloud', 'DevOps', 'Database']

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary-dark via-secondary to-secondary-light">
        <div className="container mx-auto px-4 text-center text-white">
          <p className="text-primary-light font-semibold mb-4">Knowledge Sharing</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tech Blog & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on modern software development,
            cloud architecture, and technology trends.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  category === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 flex items-center justify-center">
                  {icons[post.icon]}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary text-sm font-semibold inline-flex items-center hover:underline"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest articles, tutorials, and tech insights
            delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
