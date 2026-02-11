import React from 'react';
import { features } from '../data/mock';
import { Workflow, Users, DollarSign, FileCheck, BarChart3, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const iconMap = {
  Workflow,
  Users,
  DollarSign,
  FileCheck,
  BarChart3,
  Shield,
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
            Purpose-Built for Solar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Stop Managing Chaos.
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">
              Start Delivering Projects.
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            OneGrid was built by solar developers who lived the chaos of disconnected tools, 
            lost documents, and budget surprises. Every feature solves a real problem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-emerald-600" />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 to-teal-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            );
          })}
        </div>

        {/* CTA to Features Page */}
        <div className="text-center">
          <Link href="/features">
            <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-base group">
              Explore All Features
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
