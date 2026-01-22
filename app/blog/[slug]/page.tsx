import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Props = {
  params: Promise<{ slug: string }>
}

// Sample blog post data - in production, this would come from a CMS or database
const blogPosts: Record<string, {
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  author: string
}> = {
  'nextjs-16-new-features': {
    title: 'What\'s New in Next.js 16: A Complete Guide',
    excerpt: 'Explore the latest features in Next.js 16 including improved performance, new routing capabilities, and enhanced developer experience.',
    content: `
Next.js 16 brings significant improvements to the React framework that powers modern web applications. Here's what you need to know about the latest release.

## Improved Performance

The new Turbopack bundler is now stable and offers incredible speed improvements:
- Up to 700x faster than Webpack for large applications
- Instant hot module replacement
- Optimized build times for production

## Enhanced App Router

The App Router continues to evolve with new features:
- Improved parallel routes
- Better error handling
- Enhanced loading states

## Server Components

React Server Components are now more powerful:
- Reduced client-side JavaScript
- Better SEO out of the box
- Improved data fetching patterns

## Getting Started

To upgrade to Next.js 16, simply run:

\`\`\`bash
npm install next@latest react@latest react-dom@latest
\`\`\`

Stay tuned for more in-depth tutorials on leveraging these new features in your projects.
    `,
    category: 'Frontend',
    date: '2026-01-20',
    readTime: '8 min read',
    author: 'Hongzhi Li',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return {
      title: 'Post Not Found - Hong Yan AB Blog',
    }
  }

  return {
    title: `${post.title} - Hong Yan AB Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/blog" className="text-primary font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-secondary-dark via-secondary to-secondary-light">
        <div className="container mx-auto px-4 text-white">
          <Link href="/blog" className="text-primary-light hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="max-w-3xl">
            <span className="text-sm bg-primary/20 text-primary-light px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-300">
              <span>{post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto prose prose-lg">
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </article>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-2xl font-bold">
                HL
              </div>
              <div>
                <h3 className="font-bold text-secondary">{post.author}</h3>
                <p className="text-gray-600 text-sm">
                  Full-Stack Developer & Founder of Hong Yan AB
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Hongzhi is a seasoned developer with over 5 years of experience in enterprise-grade solutions.
              He specializes in Java Spring Boot, React, and cloud architecture.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Need Help with Your Project?
          </h2>
          <p className="text-gray-600 mb-6">
            Let&apos;s discuss how we can help bring your ideas to life.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}