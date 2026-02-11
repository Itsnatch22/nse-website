import React from 'react';
const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-slate-500">Last updated: January 1, 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 mb-4">
                By accessing or using OneGrid's solar project management platform (the "Service"), you agree 
                to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not 
                use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Description of Service</h2>
              <p className="text-slate-600 mb-4">
                OneGrid provides a cloud-based platform for managing solar energy projects, assets, and 
                client relationships. The Service includes project tracking, document management, asset 
                monitoring, reporting, and related functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. User Accounts</h2>
              <p className="text-slate-600 mb-4">
                To use the Service, you must create an account and provide accurate, complete information. 
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Ensuring your account information remains current and accurate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Subscription and Payment</h2>
              <p className="text-slate-600 mb-4">
                Access to the Service requires a paid subscription. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Pay all fees associated with your selected plan</li>
                <li>Automatic renewal of your subscription unless cancelled</li>
                <li>Price changes with 30 days' notice before your next billing cycle</li>
                <li>No refunds for partial months or unused service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Acceptable Use</h2>
              <p className="text-slate-600 mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit malicious code or interfere with the Service</li>
                <li>Attempt to gain unauthorized access to systems or data</li>
                <li>Use the Service for competitive analysis or benchmarking</li>
                <li>Resell or redistribute the Service without authorization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Data Ownership</h2>
              <p className="text-slate-600 mb-4">
                You retain ownership of all data you upload to the Service ("Customer Data"). By using 
                the Service, you grant OneGrid a limited license to use Customer Data solely to provide 
                the Service to you. We will not access, use, or share your Customer Data except as 
                necessary to provide the Service or as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Intellectual Property</h2>
              <p className="text-slate-600 mb-4">
                The Service, including all software, features, content, and documentation, is owned by 
                OneGrid and protected by intellectual property laws. These Terms do not grant you any 
                rights to our trademarks, logos, or other brand elements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-slate-600 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, GRIDONE SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, 
                DATA, OR BUSINESS OPPORTUNITIES, ARISING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Termination</h2>
              <p className="text-slate-600 mb-4">
                Either party may terminate these Terms at any time. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Your access to the Service will be suspended</li>
                <li>You may request export of your Customer Data within 30 days</li>
                <li>We may delete your Customer Data after 90 days</li>
                <li>All outstanding fees become immediately due</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Contact</h2>
              <p className="text-slate-600">
                For questions about these Terms, contact us at:<br />
                Email: legal@onegrid.com<br />
                Address: Nairobi, Kenya
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
