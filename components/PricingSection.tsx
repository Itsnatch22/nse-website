"use client"
import React from 'react';
import { pricingPlans } from '../data/mock';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Connect Every Team.
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">
              Control Every Dollar.
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Start small and grow. No hidden fees, no surprises. 
            Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-2 border-emerald-500 shadow-lg scale-105 lg:scale-110 z-10'
                  : 'border border-slate-200 hover:border-emerald-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-linear-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-slate-500 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-6">
                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-4xl font-bold text-slate-900">Custom</div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-medium text-slate-500">
                        {plan.currency}
                      </span>
                      <span className="text-5xl font-bold text-slate-900">
                        {plan.price}
                      </span>
                      <span className="text-slate-500">/{plan.period}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href="/get-started" className="w-full">
                  <Button
                    className={`w-full group ${
                      plan.popular
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-slate-500">
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
