"use client"
import React from 'react';
import { processSteps } from '../data/mock';
import { ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-lg text-slate-600">
            Our implementation team guides you through every step. Most clients are 
            fully operational within two weeks.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-200 via-emerald-400 to-emerald-200 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg">
                    {step.id}
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile/Tablet */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight className="w-8 h-8 text-emerald-400 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
