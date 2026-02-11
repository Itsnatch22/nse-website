"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  FileCheck,
  DollarSign,
  Sparkles,
  ShieldAlert,
  Workflow,
  CheckCircle,
  Zap,
  Clock,
  Play,
  ChevronRight,
  BarChart3,
  Users,
  Globe,
  Lock
} from 'lucide-react';
import { detailedFeatures } from '@/data/mock';

const iconMap = {
  Brain,
  FileCheck,
  DollarSign,
  Sparkles,
  ShieldAlert,
  Workflow,
};

const FeaturesPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const highlights = [
    { icon: Clock, value: '15+', label: 'Hours Saved', description: 'Weekly on manual tasks' },
    { icon: DollarSign, value: '40%', label: 'Less Leakage', description: 'With budget controls' },
    { icon: Zap, value: '30%', label: 'Faster Delivery', description: 'From lead to COD' },
    { icon: Users, value: '100%', label: 'Team Visibility', description: 'Across all departments' },
  ];

  const capabilities = [
    { icon: Globe, title: 'Multi-Region Support', description: 'Operate across borders with localized compliance' },
    { icon: Lock, title: 'Enterprise Security', description: 'SOC 2 compliant with role-based access' },
    { icon: BarChart3, title: 'Advanced Analytics', description: 'Real-time dashboards and custom reports' },
    { icon: Users, title: 'Unlimited Users', description: 'Scale your team without per-seat pricing' },
  ];

  return (
    <div className="min-h-screen bg-white">{/* Hero Section */}
      <section className="pt-32 pb-16 bg-linear-to-br from-slate-50 via-white to-emerald-50/50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16,185,129,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6 border border-emerald-200">
              <Sparkles className="w-4 h-4" />
              Platform Features
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Automate the Tedious.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">
                Focus on What Matters.
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              OneGrid combines intelligent automation with purpose-built workflows to eliminate 
              the chaos of solar project management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg shadow-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </Link>
              <Link href="/get-started">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center hover:shadow-md hover:border-emerald-200 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{item.value}</div>
                  <div className="text-sm font-medium text-emerald-600">{item.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Feature Explorer */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore the powerful features that make OneGrid the choice for leading solar companies.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Feature Tabs */}
            <div className="lg:col-span-4 space-y-2">
              {detailedFeatures.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                const isActive = activeFeature === index;
                
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                      isActive 
                        ? 'bg-white shadow-lg border-l-4 border-emerald-500' 
                        : 'bg-white/50 hover:bg-white hover:shadow-md border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isActive 
                          ? 'bg-linear-to-br from-emerald-500 to-teal-500' 
                          : 'bg-slate-100 group-hover:bg-emerald-100'
                      }`}>
                        {IconComponent && (
                          <IconComponent className={`w-6 h-6 ${isActive ? 'text-white' : 'text-slate-600 group-hover:text-emerald-600'}`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold transition-colors ${isActive ? 'text-emerald-700' : 'text-slate-700'}`}>
                          {feature.title}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-1">{feature.description.split('.')[0]}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-emerald-500 rotate-90' : 'text-slate-400'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feature Detail */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                {/* Feature Header */}
                <div className="bg-linear-to-r from-emerald-600 to-teal-600 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    {iconMap[detailedFeatures[activeFeature].icon as keyof typeof iconMap] && (
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                        {React.createElement(iconMap[detailedFeatures[activeFeature].icon as keyof typeof iconMap], { className: "w-7 h-7 text-white" })}
                      </div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold">{detailedFeatures[activeFeature].title}</h3>
                      <p className="text-emerald-100 text-sm">Core Feature</p>
                    </div>
                  </div>
                  <p className="text-emerald-50 text-lg leading-relaxed">
                    {detailedFeatures[activeFeature].description}
                  </p>
                </div>

                {/* Feature Details */}
                <div className="p-8">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Key Capabilities</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {detailedFeatures[activeFeature].details.map((detail, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 transition-colors group"
                      >
                        <div className="w-6 h-6 rounded-full bg-emerald-100 group-hover:bg-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-slate-700 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Preview Mock */}
                  <div className="mt-8 p-6 rounded-2xl bg-linear-to-br from-slate-100 to-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span className="ml-4 text-xs text-slate-400">app.onegrid.com</span>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {iconMap[detailedFeatures[activeFeature].icon as keyof typeof iconMap] && (
                            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                              {React.createElement(iconMap[detailedFeatures[activeFeature].icon as keyof typeof iconMap], { className: "w-5 h-5 text-emerald-600" })}
                            </div>
                          )}
                          <div>
                            <div className="font-medium text-slate-900">{detailedFeatures[activeFeature].title}</div>
                            <div className="text-xs text-emerald-600">Active • Auto-updating</div>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                          Live
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: 'Processed', value: '1,247' },
                          { label: 'Success Rate', value: '99.2%' },
                          { label: 'Time Saved', value: '156h' },
                        ].map((stat, i) => (
                          <div key={i} className="bg-slate-50 rounded-lg p-3 text-center">
                            <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                            <div className="text-xs text-slate-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Scale</h2>
            <p className="text-lg text-slate-600">Enterprise-ready features that grow with your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => {
              const IconComponent = cap.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 group-hover:bg-emerald-200 flex items-center justify-center mb-4 transition-colors">
                    <IconComponent className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{cap.title}</h3>
                  <p className="text-slate-600 text-sm">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join leading solar companies using OneGrid to deliver projects faster, 
            protect margins, and scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button className="bg-white hover:bg-emerald-50 text-emerald-700 px-8 py-6 text-lg font-semibold shadow-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
