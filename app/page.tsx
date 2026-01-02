import { Palette, Sparkles, Copy, Sliders, History } from 'lucide-react';
import ToolComponent from '@/components/tool/ToolComponent';

export default function Home() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="container-custom text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Free Online Tool
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          CSS Gradient
          <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent"> Generator</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Create beautiful linear and radial CSS gradients with our visual editor. 
          Customize colors, angles, and positions, then copy the CSS code instantly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#tool" className="btn-primary">
            Start Creating
          </a>
          <a href="/how-to-use" className="btn-secondary">
            Learn How
          </a>
        </div>
      </section>

      {/* Tool Section */}
      <section id="tool" className="container-custom mb-20">
        <ToolComponent />
      </section>

      {/* Features Section */}
      <section className="container-custom mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Use Our Gradient Generator?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Palette,
              title: 'Visual Editor',
              description: 'Design gradients visually with real-time preview. No coding required.',
            },
            {
              icon: Sliders,
              title: 'Full Control',
              description: 'Adjust colors, positions, angles, and gradient types with precision.',
            },
            {
              icon: Copy,
              title: 'One-Click Copy',
              description: 'Copy the generated CSS code to your clipboard instantly.',
            },
            {
              icon: History,
              title: 'History Saved',
              description: 'Your recent gradients are saved locally for quick access.',
            },
          ].map((feature, index) => (
            <div key={index} className="card text-center hover:-translate-y-1 transition-transform duration-200">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-rose-200/50">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom">
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Beautiful Gradients?
          </h2>
          <p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto">
            Start designing stunning CSS gradients for your websites and applications. 
            It&apos;s free, fast, and requires no sign-up.
          </p>
          <a href="#tool" className="inline-flex items-center gap-2 bg-white text-rose-600 font-semibold py-3 px-8 rounded-xl hover:bg-rose-50 transition-colors shadow-lg">
            <Palette className="w-5 h-5" />
            Start Creating Now
          </a>
        </div>
      </section>
    </div>
  );
}
