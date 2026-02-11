import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, Heart, Coffee, Zap, Globe, Mail } from 'lucide-react';

const CareersPage = () => {
  const benefits = [
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
    { icon: Coffee, title: 'Flexible Work', description: 'Remote-first culture with flexible hours. Work where you do your best work.' },
    { icon: Zap, title: 'Equity', description: 'Meaningful equity stake so you share in the success you help create.' },
    { icon: Globe, title: 'Unlimited PTO', description: 'Take the time you need to recharge. We trust you to manage your schedule.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-linear-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              Join Our Team
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Help Build the Future of
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">
                Clean Energy Software
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              We're on a mission to accelerate the solar industry. Join a team of passionate 
              people building tools that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why OneGrid?</h2>
            <p className="text-lg text-slate-600">We take care of our team so they can take care of our customers.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="border-slate-200 hover:border-emerald-200 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-linear-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Interested in Joining Us?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We're always looking for talented people who are passionate about solar and great software. 
            Send us your CV and tell us why you'd be a great fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:careers@onegrid.com">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6">
                <Mail className="w-5 h-5 mr-2" />
                careers@onegrid.com
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" className="px-8 py-6">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
