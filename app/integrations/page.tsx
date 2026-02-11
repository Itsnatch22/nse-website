import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, Plug, Database, BarChart3, Cloud, Shield, Zap, RefreshCw, Code } from 'lucide-react';

const IntegrationsPage = () => {
  const integrations = [
    {
      name: 'Salesforce',
      category: 'CRM',
      description: 'Sync client data, opportunities, and pipeline between OneGrid and Salesforce.',
      icon: Cloud,
      status: 'Available'
    },
    {
      name: 'QuickBooks',
      category: 'Accounting',
      description: 'Automatically sync invoices, payments, and financial data.',
      icon: Database,
      status: 'Available'
    },
    {
      name: 'Also Energy',
      category: 'Monitoring',
      description: 'Import real-time generation data from Also Energy monitoring systems.',
      icon: BarChart3,
      status: 'Available'
    },
    {
      name: 'Power Factors',
      category: 'Monitoring',
      description: 'Connect to Power Factors for comprehensive asset performance data.',
      icon: Zap,
      status: 'Available'
    },
    {
      name: 'DocuSign',
      category: 'Documents',
      description: 'Send contracts for e-signature directly from OneGrid.',
      icon: Shield,
      status: 'Available'
    },
    {
      name: 'Microsoft 365',
      category: 'Productivity',
      description: 'Sync calendars, emails, and documents with Microsoft 365.',
      icon: Cloud,
      status: 'Available'
    },
    {
      name: 'Xero',
      category: 'Accounting',
      description: 'Connect your Xero account for seamless financial management.',
      icon: Database,
      status: 'Coming Soon'
    },
    {
      name: 'HubSpot',
      category: 'CRM',
      description: 'Integrate with HubSpot for marketing and sales automation.',
      icon: RefreshCw,
      status: 'Coming Soon'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 bg-linear-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <Plug className="w-4 h-4" />
              Integrations
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Connect Your
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">
                Entire Tech Stack
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              OneGrid integrates with the tools you already use, creating a seamless 
              workflow across your entire organization.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <Card key={index} className="border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-slate-700" />
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        integration.status === 'Available'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {integration.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {integration.name}
                    </h3>
                    <p className="text-sm text-emerald-600 mb-3">{integration.category}</p>
                    <p className="text-sm text-slate-600">{integration.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                Developer API
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Build Custom Integrations
              </h2>
              <p className="text-slate-600 mb-6">
                Our RESTful API gives you full access to your OneGrid data. Build custom 
                integrations, create automated workflows, and connect to any system.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  Comprehensive REST API documentation
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  Webhooks for real-time event notifications
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  SDKs for Python, JavaScript, and more
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  Sandbox environment for testing
                </li>
              </ul>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                View API Documentation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6 overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <pre className="text-sm text-slate-300 overflow-x-auto">
{`curl -X GET "https://api.gridone.io/v1/projects" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"

{
  "data": [
    {
      "id": "proj_123",
      "name": "Sunnydale Solar Farm",
      "capacity_mw": 50.5,
      "status": "construction",
      "cod_date": "2025-06-15"
    }
  ],
  "meta": {
    "total": 24,
    "page": 1
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Need a custom integration?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our team can help you connect OneGrid to any system in your tech stack.
          </p>
          <Link href="/contact">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6">
              Contact Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IntegrationsPage;
