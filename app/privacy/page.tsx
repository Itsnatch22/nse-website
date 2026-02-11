import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500">Last updated: January 1, 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
              <p className="text-slate-600 mb-4">
                OneGrid ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use our 
                solar project management platform and related services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-medium text-slate-800 mb-2">Personal Information</h3>
              <p className="text-slate-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Register for an account</li>
                <li>Use our platform services</li>
                <li>Contact our support team</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-slate-600 mb-4">
                This information may include your name, email address, phone number, company name, 
                job title, and billing information.
              </p>

              <h3 className="text-lg font-medium text-slate-800 mb-2">Usage Data</h3>
              <p className="text-slate-600 mb-4">
                We automatically collect certain information when you access our platform, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Features used and actions taken</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and features</li>
                <li>Monitor and analyze usage patterns</li>
                <li>Detect and prevent fraudulent activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-slate-600 mb-4">
                We do not sell your personal information. We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li><strong>Service Providers:</strong> With third-party vendors who assist in providing our services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you have given us permission to share</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Data Security</h2>
              <p className="text-slate-600 mb-4">
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>AES-256 encryption for data at rest and in transit</li>
                <li>SOC 2 Type II compliance</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication options</li>
                <li>Role-based access controls</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Rights</h2>
              <p className="text-slate-600 mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-slate-600">
                Email: privacy@onegrid.com<br />
                Address: Nairobi, Kenya
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
