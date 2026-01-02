import { Palette, Sliders, Copy, History } from 'lucide-react';

export default function HowToUsePage() {
  const steps = [
    {
      icon: Palette,
      title: 'Choose Gradient Type',
      description: 'Select between linear gradient (straight line) or radial gradient (circular). Linear gradients are great for backgrounds, while radial gradients work well for spotlight effects.',
    },
    {
      icon: Sliders,
      title: 'Customize Colors',
      description: 'Click on the color picker to choose your colors, or enter hex codes directly. Add up to 5 color stops and adjust their positions using the percentage slider.',
    },
    {
      icon: Copy,
      title: 'Copy CSS Code',
      description: 'Once you\'re happy with your gradient, click the "Copy" button to copy the CSS code. Paste it into your stylesheet or inline styles.',
    },
    {
      icon: History,
      title: 'Access History',
      description: 'Your recent gradients are automatically saved. Click on any gradient in the history section to load it back into the editor.',
    },
  ];

  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Use</h1>
          <p className="text-xl text-gray-600 mb-12">
            Learn how to create beautiful CSS gradients in just a few simple steps.
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="card flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-200/50">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-rose-600">Step {index + 1}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h2>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 card bg-gradient-to-br from-rose-50 to-pink-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro Tips</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                <span>Use the "Random" button to get inspiration for new color combinations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                <span>For subtle gradients, use colors that are close to each other on the color wheel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                <span>Add a middle color stop at 50% to create a smoother transition.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                <span>Use 45° or 135° angles for diagonal gradients that look great on buttons.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <a href="/" className="btn-primary inline-flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Start Creating Gradients
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
