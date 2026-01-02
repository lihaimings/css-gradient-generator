import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    slug: 'getting-started',
    title: 'Getting Started with CSS Gradients',
    excerpt: 'Learn the basics of CSS gradients and how to use them effectively in your web projects.',
    date: '2026-01-01',
  },
];

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 mb-12">
            Tips, tutorials, and insights about CSS gradients and web design.
          </p>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card block hover:-translate-y-1 transition-transform duration-200">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-rose-600 font-medium">
                  Read more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
