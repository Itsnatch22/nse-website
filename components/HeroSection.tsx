"use client"
import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { stats } from '../data/mock';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const HeroSection = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-emerald-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Built by Solar Developers, for Solar Developers
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              From Lead to COD.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">
                Finally, One Platform.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              Solar projects are complex. Your tools shouldn't make it worse. 
              OneGrid connects sales, engineering, permitting, legal, and construction 
              so nothing falls through the cracks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/get-started">
                <Button 
                  size="lg" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-base group"
                onClick={() => setShowDemoModal(true)}
              >
                <Play className="w-5 h-5 mr-2 text-emerald-600" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Setup in days, not months</span>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1.5 text-xs text-slate-400 text-center">
                    app.onegrid.io/projects
                  </div>
                </div>
              </div>

              {/* Dashboard Preview Content */}
              <div className="p-4 sm:p-6 bg-slate-50">
                {/* Project Lifecycle Pipeline - Hidden on mobile, simplified */}
                <div className="hidden sm:flex items-center justify-between mb-4 bg-white rounded-lg p-3 shadow-sm border border-slate-100 overflow-x-auto">
                  <div className="flex items-center gap-2">
                    {['Lead', 'Design', 'Permitting', 'Contract', 'Construction', 'COD'].map((stage, i) => (
                      <div key={stage} className="flex items-center">
                        <div className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          i === 3 ? 'bg-amber-100 text-amber-700' : 
                          i < 3 ? 'bg-emerald-100 text-emerald-700' : 
                          'bg-slate-100 text-slate-500'
                        }`}>
                          {stage}
                        </div>
                        {i < 5 && <div className="w-3 h-px bg-slate-200 mx-1" />}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Pipeline - Simplified */}
                <div className="sm:hidden mb-4 bg-white rounded-lg p-3 shadow-sm border border-slate-100">
                  <div className="text-xs text-slate-500 mb-2">Project Stage</div>
                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                      Contract
                    </div>
                    <span className="text-xs text-slate-400">→ 4 of 6 stages</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-slate-100">
                    <div className="text-[10px] sm:text-xs text-slate-500 mb-1">Active</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">47</div>
                    <div className="text-[10px] sm:text-xs text-emerald-600 mt-1 hidden sm:block">+5 this month</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-slate-100">
                    <div className="text-[10px] sm:text-xs text-slate-500 mb-1">Building</div>
                    <div className="text-lg sm:text-2xl font-bold text-slate-900">12</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1 hidden sm:block">156 MW</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-slate-100">
                    <div className="text-[10px] sm:text-xs text-slate-500 mb-1">Budget</div>
                    <div className="text-lg sm:text-2xl font-bold text-emerald-600">+2.1%</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1 hidden sm:block">On track</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs sm:text-sm font-medium text-slate-700">Recent Activity</span>
                    <span className="text-[10px] sm:text-xs text-slate-400">Today</span>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-slate-600 truncate">Permit approved - Riverside Solar</span>
                      <span className="text-slate-400 ml-auto shrink-0">2h</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs">
                      <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-slate-600 truncate">Contract sent - Valley Commerce</span>
                      <span className="text-slate-400 ml-auto shrink-0">4h</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 text-xs">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-slate-600">Engineering complete - Summit Industrial</span>
                      <span className="text-slate-400 ml-auto">6h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-slate-100 animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">Permit Approved</div>
                  <div className="text-xs text-slate-500">Riverside Solar - 5.2MW</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-xl border border-slate-100 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-600 text-xs font-bold">$</span>
                </div>
                <div className="text-xs">
                  <div className="font-medium text-slate-900">Budget Locked</div>
                  <div className="text-slate-500">Engineering → Contract</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Video Modal */}
      <Dialog open={showDemoModal} onOpenChange={setShowDemoModal}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl">OneGrid Platform Demo</DialogTitle>
          </DialogHeader>
          <div className="p-6">
            {/* Live Platform Embed */}
            <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden relative border border-slate-200">
              <iframe
                src="https://construct-flow-16.preview.emergentagent.com/login"
                className="w-full h-full"
                title="OneGrid Live Demo"
                allow="fullscreen"
              />
            </div>
            
            <div className="mt-4 bg-emerald-50 rounded-lg p-4 border border-emerald-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Play className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-1">Interactive Demo</h4>
                  <p className="text-sm text-slate-600 mb-2">
                    This is a live preview of the OneGrid platform. For a personalized walkthrough 
                    tailored to your business needs, schedule a demo with our team.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact">
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        Schedule Live Demo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
