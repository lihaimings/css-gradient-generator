import { Palette, Target, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About CSS Gradient Generator</h1>
          
          <div className="prose prose-lg prose-rose">
            <p className="text-xl text-gray-600 mb-8">
              CSS Gradient Generator is a free online tool designed to help web developers 
              and designers create beautiful CSS gradients quickly and easily.
            </p>

            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-rose-600" />
                Our Mission
              </h2>
              <p className="text-gray-600">
                We believe that creating beautiful web designs should be accessible to everyone. 
                Our gradient generator simplifies the process of creating CSS gradients, 
                allowing you to focus on what matters most - building great websites.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-rose-600" />
                Key Features
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                  <span>Support for both linear and radial gradients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                  <span>Visual color picker with hex code input</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                  <span>Adjustable angle for linear gradients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                  <span>Multiple color stops with position control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                  <span>One-click CSS code copy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2"></span>
                  <span>Gradient history saved locally</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-rose-600" />
                Who Is This For?
              </h2>
              <p className="text-gray-600 mb-4">
                Our tool is perfect for:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Web developers looking to add gradients to their projects</li>
                <li>• UI/UX designers creating mockups and prototypes</li>
                <li>• Students learning CSS and web design</li>
                <li>• Anyone who wants to create beautiful color gradients</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
