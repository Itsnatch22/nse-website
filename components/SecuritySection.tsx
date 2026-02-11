"use client"
import React from 'react';
import { securityFeatures } from '../data/mock';
import { ShieldCheck, Lock, Server } from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Lock,
  Server,
};

const SecuritySection = () => {
  return (
    <section className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-emerald-400 text-sm font-medium mb-6">
              Enterprise-Grade Security
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Data is Our
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">
                Top Priority
              </span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We use industry-leading security measures to protect your business data. 
              From encryption to compliance, trust OneGrid to keep your information safe.
            </p>

            {/* Security Features */}
            <div className="space-y-6">
              {securityFeatures.map((feature) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <div key={feature.id} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-emerald-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700">
              {/* Shield Animation Background */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl" />
              
              <div className="relative z-10 flex flex-col items-center justify-center py-12">
                {/* Central Shield */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                    <ShieldCheck className="w-16 h-16 text-white" />
                  </div>
                  {/* Pulse Animation */}
                  <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping" style={{ animationDuration: '3s' }} />
                </div>

                <div className="mt-8 text-center">
                  <div className="text-2xl font-bold text-white mb-2">Protected</div>
                  <div className="text-slate-400">Your data is encrypted and secure</div>
                </div>

                {/* Stats Row */}
                <div className="mt-8 grid grid-cols-3 gap-6 w-full">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">256-bit</div>
                    <div className="text-xs text-slate-500">Encryption</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">99.9%</div>
                    <div className="text-xs text-slate-500">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">SOC 2</div>
                    <div className="text-xs text-slate-500">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
