import Link from 'next/link';
import { Palette, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-rose-100 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Gradient Gen</span>
            </Link>
            <p className="text-gray-600 max-w-md">
              Create beautiful CSS gradients with our free online tool. 
              Design linear and radial gradients visually and copy the CSS code instantly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/how-to-use" className="text-gray-600 hover:text-rose-600 transition-colors">How to Use</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-rose-600 transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-rose-600 transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-rose-600 transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-600 hover:text-rose-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-rose-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rose-100 mt-8 pt-8 text-center text-gray-600">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> by CSS Gradient Generator
          </p>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
