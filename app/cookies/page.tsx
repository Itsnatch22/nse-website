import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cookie, Settings, Shield, BarChart3 } from 'lucide-react';

const CookiePage = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for the platform to function properly. Cannot be disabled.',
      examples: 'Authentication, security, preferences'
    },
    {
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how you use the platform to improve the experience.',
      examples: 'Page views, feature usage, error tracking'
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Enable enhanced features and personalization.',
      examples: 'Dashboard layouts, display preferences'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 bg-linear-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <Cookie className="w-4 h-4" />
              Cookie Policy
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">How We Use Cookies</h1>
            <p className="text-slate-500">Last updated: January 1, 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <p className="text-slate-600 mb-6">
                OneGrid uses cookies and similar technologies to provide, protect, and improve our 
                solar project management platform. This policy explains what cookies are, how we use them, 
                and your choices regarding their use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">What Are Cookies?</h2>
              <p className="text-slate-600 mb-4">
                Cookies are small text files that are placed on your device when you visit a website. 
                They help websites remember information about your visit, which can make your next visit 
                easier and the site more useful to you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Types of Cookies We Use</h2>
              <div className="grid gap-6">
                {cookieTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <Card key={index} className="border-slate-200 hover:border-emerald-200 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                            <IconComponent className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{type.title}</h3>
                            <p className="text-slate-600 mb-2">{type.description}</p>
                            <p className="text-sm text-slate-500"><strong>Examples:</strong> {type.examples}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Third-Party Cookies</h2>
              <p className="text-slate-600 mb-4">
                We may use third-party services that set their own cookies, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li><strong>Google Analytics:</strong> For usage analysis and platform improvement</li>
                <li><strong>Intercom:</strong> For customer support chat functionality</li>
                <li><strong>Stripe:</strong> For secure payment processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Managing Cookies</h2>
              <p className="text-slate-600 mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>View and delete existing cookies</li>
                <li>Block all or specific cookies</li>
                <li>Set preferences for certain websites</li>
                <li>Receive notifications when cookies are set</li>
              </ul>
              <p className="text-slate-600 mb-4">
                Please note that disabling essential cookies may prevent you from using certain features 
                of our platform.
              </p>
            </section>

            <section className="mb-8 bg-emerald-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600">
                If you have questions about our use of cookies, please contact us at:<br />
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

export default CookiePage;
