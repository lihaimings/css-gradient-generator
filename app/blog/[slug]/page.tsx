import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

const posts: Record<string, { title: string; date: string; content: string }> = {
  'getting-started': {
    title: 'Getting Started with CSS Gradients',
    date: '2026-01-01',
    content: `
CSS gradients are a powerful way to create smooth color transitions in your web designs. They can be used for backgrounds, buttons, text effects, and much more.

## Types of Gradients

### Linear Gradients
Linear gradients transition colors along a straight line. You can control the direction using angles or keywords like "to right" or "to bottom".

\`\`\`css
background: linear-gradient(90deg, #f43f5e 0%, #ec4899 100%);
\`\`\`

### Radial Gradients
Radial gradients transition colors from a center point outward. They create circular or elliptical patterns.

\`\`\`css
background: radial-gradient(circle, #f43f5e 0%, #ec4899 100%);
\`\`\`

## Color Stops

Color stops define where each color appears in the gradient. You can add multiple stops to create complex transitions.

\`\`\`css
background: linear-gradient(90deg, #f43f5e 0%, #fbbf24 50%, #ec4899 100%);
\`\`\`

## Tips for Beautiful Gradients

1. **Use complementary colors** for vibrant gradients
2. **Keep it subtle** for professional designs
3. **Test on different screens** to ensure colors look good everywhere
4. **Consider accessibility** - ensure text remains readable

## Using Our Generator

Our CSS Gradient Generator makes it easy to create and customize gradients:

1. Choose between linear and radial gradients
2. Pick your colors using the color picker
3. Adjust positions and angles
4. Copy the generated CSS code

Start creating beautiful gradients today!
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <article>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4" />
              <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">{post.title}</h1>

            <div className="prose prose-lg prose-rose max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('```')) {
                  const code = paragraph.replace(/```\w*\n?/g, '');
                  return (
                    <pre key={index} className="bg-gray-900 text-green-400 p-4 rounded-xl overflow-x-auto my-4">
                      <code>{code}</code>
                    </pre>
                  );
                }
                if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={index} className="space-y-2 my-4">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-600">{item.replace(/^\d+\.\s*|\*\*|\-\s*/g, '')}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={index} className="text-gray-600 my-4">{paragraph}</p>;
              })}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
