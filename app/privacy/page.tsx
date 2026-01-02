export default function PrivacyPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2026</p>

          <div className="prose prose-lg prose-rose">
            <div className="card mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Overview</h2>
              <p className="text-gray-600">
                CSS Gradient Generator is committed to protecting your privacy. This policy explains 
                how we handle information when you use our service.
              </p>
            </div>

            <div className="card mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect minimal information to provide our service:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Local Storage:</strong> Your gradient history is stored locally in your browser. This data never leaves your device.</li>
                <li>• <strong>Analytics:</strong> We may use anonymous analytics to understand how our tool is used.</li>
              </ul>
            </div>

            <div className="card mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Data Storage</h2>
              <p className="text-gray-600">
                All gradient data is stored locally in your browser using localStorage. We do not 
                have access to this data, and it is not transmitted to our servers. You can clear 
                this data at any time by clearing your browser&apos;s local storage.
              </p>
            </div>

            <div className="card mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies</h2>
              <p className="text-gray-600">
                We may use essential cookies to ensure the proper functioning of our website. 
                These cookies do not track personal information.
              </p>
            </div>

            <div className="card mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Services</h2>
              <p className="text-gray-600">
                Our website may use third-party services for hosting and analytics. These services 
                have their own privacy policies governing the use of your information.
              </p>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us through 
                our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
