"use client"
import React from 'react';
import { departmentCards, useCases } from '../data/mock';
import { Sun, HardHat, Building2, TrendingUp, Cpu, Kanban, Scale, Package, LayoutDashboard, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const iconMap = {
  Sun,
  HardHat,
  Building2,
  TrendingUp,
  Cpu,
  Kanban,
  Scale,
  Package,
  LayoutDashboard,
};

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
            Built for Every Team
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            One Platform, Every Department
          </h2>
          <p className="text-lg text-slate-600">
            From sales proposals to construction completion, OneGrid connects every team 
            in your solar workflow.
          </p>
        </div>

        {/* Department Cards Grid - NSE Green Theme */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {departmentCards.map((card) => {
            const IconComponent = iconMap[card.icon as keyof typeof iconMap];
            const departmentSlug = card.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and');
            return (
              <Link
                key={card.id}
                href={`/solutions/${departmentSlug}`}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 relative overflow-hidden block"
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-emerald-50/0 to-teal-50/0 group-hover:from-emerald-50/50 group-hover:to-teal-50/50 transition-all duration-300" />
                
                <div className="relative z-10">
                  {/* Icon - NSE Green */}
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Service Providers Section */}
        <div className="bg-linear-to-br from-emerald-50 via-teal-50 to-emerald-100 rounded-3xl p-8 lg:p-12 border border-emerald-100">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium mb-6">
              Service Providers
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              For Developers, EPCs & IPPs
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Whether you're developing projects, building them, or operating them—OneGrid 
              connects your entire organization from inception to COD.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => {
              const IconComponent = iconMap[useCase.icon as keyof typeof iconMap];
              return (
                <Link
                  key={useCase.id}
                  href={`/solutions/${useCase.id === 1 ? 'solar-developers' : useCase.id === 2 ? 'epcs' : 'ipps'}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl p-6 border border-emerald-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && (
                        <IconComponent className="w-7 h-7 text-emerald-600" />
                      )}
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {useCase.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {useCase.description}
                    </p>

                    <span className="inline-flex items-center text-sm text-emerald-600 font-medium group-hover:text-emerald-700">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
