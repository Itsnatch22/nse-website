"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, ArrowRight, Check, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

const GetStartedPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sign up attempt:', formData);
    alert('Registration functionality will be connected to the backend.');
  };

  const benefits = [
    '14-day free trial with full access',
    'No credit card required',
    'Personalized onboarding support',
    'Cancel anytime',
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Benefits */}
          <div className="hidden lg:block">
            <Link href="/" className="inline-flex items-center gap-2 mb-8">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg">
                <Sun className="w-7 h-7 text-white" />
              </div>
              <span className="font-bold text-2xl text-slate-900">OneGrid</span>
            </Link>

            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Start managing your
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">
                solar projects today
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8">
              Join hundreds of solar professionals who have streamlined their operations with OneGrid.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-semibold">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Sarah Mitchell</div>
                  <div className="text-sm text-slate-500">SunPower Installations</div>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "OneGrid finally gave us one place to manage everything. Our teams stopped working in silos."
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <div className="lg:hidden text-center mb-8">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg">
                  <Sun className="w-7 h-7 text-white" />
                </div>
                <span className="font-bold text-2xl text-slate-900">OneGrid</span>
              </Link>
            </div>

            <Card className="border-slate-200 shadow-xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Create your account
                </CardTitle>
                <CardDescription className="text-slate-500">
                  Start your 14-day free trial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company name</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="h-11 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    <p className="text-xs text-slate-500">Must be at least 8 characters</p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                  Already have an account?{' '}
                  <Link href="/sign-in" className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Sign in
                  </Link>
                </p>
              </CardContent>
            </Card>

            <p className="mt-6 text-center text-sm text-slate-400">
              By creating an account, you agree to our{' '}
              <Link href="/terms" className="text-slate-500 hover:text-emerald-600">
                Terms
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-slate-500 hover:text-emerald-600">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
