import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Database, Eye, Trash2, Download, Mail } from 'lucide-react';

const GDPRPage = () => {
  const rights = [
    {
      icon: Eye,
      title: 'Right of Access',
      description: 'You can request a copy of the personal data we hold about you.'
    },
    {
      icon: Database,
      title: 'Right to Rectification',
      description: 'You can ask us to correct any inaccurate or incomplete data.'
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data under certain circumstances.'
    },
    {
      icon: Download,
      title: 'Right to Data Portability',
      description: 'You can request your data in a machine-readable format.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 bg-linear-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              GDPR Compliance
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Your Data Rights Under GDPR</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              OneGrid is committed to protecting your privacy and complying with the General Data 
              Protection Regulation (GDPR) for users in the European Economic Area.
            </p>
          </div>

          {/* Rights Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {rights.map((right, index) => {
              const IconComponent = right.icon;
              return (
                <Card key={index} className="border-slate-200 hover:border-emerald-200 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{right.title}</h3>
                    <p className="text-slate-600">{right.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our GDPR Commitment</h2>
              <p className="text-slate-600 mb-4">
                As a data processor and controller, OneGrid implements appropriate technical and 
                organizational measures to ensure GDPR compliance, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Data Processing Agreements (DPAs) with all customers</li>
                <li>EU-based data storage options</li>
                <li>Privacy by design principles in our platform development</li>
                <li>Regular data protection impact assessments</li>
                <li>Appointed Data Protection Officer</li>
                <li>72-hour breach notification procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Legal Basis for Processing</h2>
              <p className="text-slate-600 mb-4">
                We process personal data under the following legal bases:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li><strong>Contract:</strong> Processing necessary to provide our services</li>
                <li><strong>Legitimate Interest:</strong> Improving our services and security</li>
                <li><strong>Legal Obligation:</strong> Compliance with applicable laws</li>
                <li><strong>Consent:</strong> Marketing communications and optional features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">International Data Transfers</h2>
              <p className="text-slate-600 mb-4">
                When we transfer personal data outside the EEA, we ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions where applicable</li>
                <li>Additional technical and organizational measures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Retention</h2>
              <p className="text-slate-600 mb-4">
                We retain personal data only as long as necessary for the purposes for which it was 
                collected. Upon account termination:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Customer data is available for export for 30 days</li>
                <li>Data is securely deleted within 90 days</li>
                <li>Backup copies are purged according to our retention schedule</li>
              </ul>
            </section>

            <section className="mb-8 bg-emerald-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Exercise Your Rights</h2>
              <p className="text-slate-600 mb-6">
                To exercise any of your GDPR rights, please contact our Data Protection Officer:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span>dpo@onegrid.com</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                Address: Nairobi, Kenya<br />
                We will respond to your request within 30 days.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPRPage;
