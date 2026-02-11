"use client"
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import {
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  Heart,
  Brain,
  Workflow,
  Shield
} from 'lucide-react';

const AboutPage = () => {
  const team = [
     {
      name: 'Jason Crawford',
      role: 'Co-Founder',
      bio: 'Regional Director EAC of NSE, Jason leads strategy, project development, and pipeline origination to deliver scalable renewable energy solutions across the East African market. He holds a BEng and MEng in Mechanical Engineering. Started OneGrid to solve the workflow chaos he experienced firsthand.',
      image: 'https://customer-assets.emergentagent.com/job_solar-workflow-1/artifacts/u06sa9ju_Jason%20Crawford.jpg'
    },
    {
      name: 'David Masureik',
      role: 'Co-Founder',
      bio: 'CEO of NSE, David has led NSE to become a leading Independent Power Producer (IPP) in the Commercial & Industrial (C&I) sector, with extensive experience in building businesses across Sub-Saharan Africa. He holds a B.Comm in Management Accounting. Obsessed with making complex workflows feel simple.',
      image: 'https://customer-assets.emergentagent.com/job_solar-workflow-1/artifacts/sgtfe864_David%20Masureik.jpg'
    },
    {
      name: 'Ryno Bosman',
      role: 'Co-Founder',
      bio: 'COO of NSE, Ryno is responsible for leading the strategic implementation of NSE\'s operational objectives and ensuring the successful implementation of best practices across the company. He holds a B.Comm in Economics and International Trade and a Diploma in Advanced Project Management. Speaks the language of installers, developers, and EPCs.',
      image: 'https://customer-assets.emergentagent.com/job_solar-workflow-1/artifacts/z9rtt484_Ryno%20Bosman.jpg'
    },
    {
      name: 'Albertu Prins',
      role: 'Co-Founder',
      bio: 'CTO of NSE, Albertu oversees all technical and engineering governance and plays a key role in ensuring that technical excellence and innovation are at the core of the company\'s operations. He holds two Master\'s degrees in electrical and electronic engineering and is a registered Professional Engineer (PR Eng) with the Engineering Council of South Africa (ECSA).',
      image: 'https://customer-assets.emergentagent.com/job_solar-workflow-1/artifacts/2bvbiyd5_Albertu%20Prince%201.jpg'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Solve Real Problems',
      description: 'Every feature starts with a real pain point from actual solar companies. We build what works, not what sounds impressive.'
    },
    {
      icon: Lightbulb,
      title: 'AI That Helps, Not Hypes',
      description: 'Our AI automates tedious tasks so humans can focus on decisions that matter. No buzzwords, just useful automation.'
    },
    {
      icon: Heart,
      title: 'Mission Driven',
      description: "We're here to accelerate the solar industry. Every efficiency we create means more clean energy deployed."
    },
    {
      icon: Users,
      title: 'Partners, Not Vendors',
      description: 'We work alongside our customers as partners. Your success metrics are our success metrics.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-linear-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              About OneGrid
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              We Lived the Chaos.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">
                So We Fixed It.
              </span>
            </h1>
            <p className="text-lg text-slate-600">
              OneGrid was born from frustration. After years of managing solar projects with 
              disconnected spreadsheets, endless email chains, and margin-killing scope changes, 
              we knew there had to be a better way.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  In 2025, our founders were running a growing solar installation company. 
                  They had spreadsheets for sales, different spreadsheets for engineering, 
                  contracts in email threads, and procurement in yet another system.
                </p>
                <p>
                  Every project felt like reinventing the wheel. Proposals got re-quoted after 
                  engineering changes. Budgets drifted because nobody tracked changes. Projects 
                  stalled waiting for permits nobody knew were needed.
                </p>
                <p>
                  They looked for software to fix this. Nothing existed that truly connected 
                  the entire solar workflow. So they built it themselves—first as an internal 
                  tool, then as OneGrid.
                </p>
                <p>
                  Today, OneGrid powers hundreds of solar companies. Our AI handles the tedious 
                  stuff—system sizing, policy lookups, project planning—so teams can focus on 
                  what matters: closing deals and delivering projects.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">2025</div>
                <div className="text-slate-600">Founded</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">60+</div>
                <div className="text-slate-600">Team Members</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
                <div className="text-slate-600">Solar Companies</div>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">$28M</div>
                <div className="text-slate-600">Funding Raised</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-linear-to-br from-emerald-50 via-teal-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Build</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              OneGrid is three things in one platform:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                <Workflow className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Workflow Engine</h3>
              <p className="text-slate-600">
                Connect sales, engineering, legal, procurement, and construction in one 
                system with configurable workflows that match your business.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">AI Automation</h3>
              <p className="text-slate-600">
                System sizing, policy compliance, project planning, and risk management—
                powered by AI trained on solar industry data.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-emerald-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Budget Control</h3>
              <p className="text-slate-600">
                Lock budgets at each project phase. Track every change from proposal to 
                completion. Protect margins from scope creep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600">The principles that guide everything we do.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-slate-200 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-slate-600">Meet the people driving OneGrid's mission forward.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-emerald-600 text-sm mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-br from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Want to join our team?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            We're always looking for talented people who are passionate about solar and great software.
          </p>
          <Link href="/careers">
            <Button className="bg-white hover:bg-emerald-50 text-emerald-700 px-8 py-6">
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
