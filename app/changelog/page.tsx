import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Bug, Zap, Shield, ArrowUpRight } from 'lucide-react';

const ChangelogPage = () => {
  const releases = [
    {
      version: '2.5.0',
      date: 'January 15, 2025',
      title: 'Enhanced Analytics Dashboard',
      description: 'Major update to our analytics capabilities with new visualization options and export features.',
      changes: [
        { type: 'feature', text: 'New customizable dashboard widgets for asset performance' },
        { type: 'feature', text: 'Export reports to PDF, Excel, and PowerPoint formats' },
        { type: 'feature', text: 'Real-time alerts for performance anomalies' },
        { type: 'improvement', text: 'Improved chart rendering performance by 40%' },
        { type: 'fix', text: 'Fixed date range selector timezone issues' },
      ]
    },
    {
      version: '2.4.2',
      date: 'January 5, 2025',
      title: 'Security & Performance Updates',
      description: 'Important security enhancements and performance optimizations.',
      changes: [
        { type: 'security', text: 'Enhanced encryption for API communications' },
        { type: 'improvement', text: 'Reduced page load times by 25%' },
        { type: 'fix', text: 'Resolved intermittent login issues on Safari' },
        { type: 'fix', text: 'Fixed document upload size limit validation' },
      ]
    },
    {
      version: '2.4.0',
      date: 'December 20, 2024',
      title: 'Document Management Overhaul',
      description: 'Complete redesign of the document management system with new features.',
      changes: [
        { type: 'feature', text: 'New drag-and-drop file upload interface' },
        { type: 'feature', text: 'Full-text search across all documents' },
        { type: 'feature', text: 'Document versioning and history tracking' },
        { type: 'feature', text: 'Integration with DocuSign for e-signatures' },
        { type: 'improvement', text: 'Increased maximum file size to 500MB' },
      ]
    },
    {
      version: '2.3.0',
      date: 'December 5, 2024',
      title: 'Project Timeline Visualization',
      description: 'New Gantt chart view for project milestone tracking.',
      changes: [
        { type: 'feature', text: 'Interactive Gantt chart for project schedules' },
        { type: 'feature', text: 'Milestone dependencies and critical path highlighting' },
        { type: 'feature', text: 'Timeline export to MS Project format' },
        { type: 'improvement', text: 'Better mobile responsiveness for project views' },
        { type: 'fix', text: 'Fixed milestone notification delivery timing' },
      ]
    },
    {
      version: '2.2.0',
      date: 'November 15, 2024',
      title: 'Multi-Currency Support',
      description: 'Added support for managing projects and assets in multiple currencies.',
      changes: [
        { type: 'feature', text: 'Support for 50+ currencies with automatic conversion' },
        { type: 'feature', text: 'Currency-specific financial reporting' },
        { type: 'feature', text: 'Historical exchange rate tracking' },
        { type: 'improvement', text: 'Improved financial dashboard accuracy' },
      ]
    },
  ];

  const getChangeIcon = (type: string) => {
    switch (type) {
      case 'feature':
        return <Sparkles className="w-4 h-4 text-emerald-500" />;
      case 'improvement':
        return <Zap className="w-4 h-4 text-blue-500" />;
      case 'fix':
        return <Bug className="w-4 h-4 text-teal-500" />;
      case 'security':
        return <Shield className="w-4 h-4 text-red-500" />;
      default:
        return <ArrowUpRight className="w-4 h-4 text-slate-500" />;
    }
  };

  const getChangeBadge = (type: string) => {
    switch (type) {
      case 'feature':
        return <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">New</Badge>;
      case 'improvement':
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Improved</Badge>;
      case 'fix':
        return <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">Fixed</Badge>;
      case 'security':
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Security</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-12 bg-linear-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Changelog
            </h1>
            <p className="text-lg text-slate-600">
              Stay up to date with the latest features, improvements, and fixes in OneGrid.
            </p>
          </div>
        </div>
      </section>

      {/* Releases */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {releases.map((release, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-slate-900">v{release.version}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-500">{release.date}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-slate-900">{release.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-6">{release.description}</p>

                  <div className="space-y-3">
                    {release.changes.map((change, changeIndex) => (
                      <div key={changeIndex} className="flex items-start gap-3">
                        {getChangeIcon(change.type)}
                        <span className="text-slate-600 flex-1">{change.text}</span>
                        {getChangeBadge(change.type)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangelogPage;
