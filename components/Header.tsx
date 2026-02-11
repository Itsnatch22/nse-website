"use client"
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Sun, ChevronDown, Users, Building2, HardHat, Briefcase, Scale, FolderKanban } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamSolutions = [
    { href: '/solutions/sales-teams', label: 'Sales Teams', icon: Users },
    { href: '/solutions/engineering', label: 'Engineering', icon: Building2 },
    { href: '/solutions/project-management', label: 'Project Management', icon: FolderKanban },
    { href: '/solutions/legal-and-contracts', label: 'Contracts & Legal', icon: Scale },
  ];

  const serviceProviders = [
    { href: '/solutions/solar-developers', label: 'Solar Developers', icon: Sun },
    { href: '/solutions/epcs', label: 'EPCs', icon: HardHat },
    { href: '/solutions/ipps', label: 'IPPs', icon: Briefcase },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      if (pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.replace('/', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              OneGrid
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                isScrolled ? 'text-slate-600' : 'text-slate-700'
              }`}
            >
              About Us
            </Link>

            <Link
              href="/features"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                isScrolled ? 'text-slate-600' : 'text-slate-700'
              }`}
            >
              Features
            </Link>
            
            {/* Solutions Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onMouseEnter={() => setSolutionsOpen(true)}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 flex items-center gap-1 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-700'
                }`}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Panel */}
              {solutionsOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 min-w-[480px]">
                    <div className="grid grid-cols-2 gap-6">
                      {/* By Team */}
                      <div>
                        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-8 h-px bg-emerald-200"></span>
                          By Team
                        </p>
                        <div className="space-y-1">
                          {teamSolutions.map((link) => {
                            const IconComponent = link.icon;
                            return (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setSolutionsOpen(false)}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-emerald-100 group-hover:bg-emerald-200 flex items-center justify-center transition-colors">
                                  <IconComponent className="w-4 h-4 text-emerald-600" />
                                </div>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-emerald-700">
                                  {link.label}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Service Providers */}
                      <div>
                        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-8 h-px bg-emerald-200"></span>
                          Service Providers
                        </p>
                        <div className="space-y-1">
                          {serviceProviders.map((link) => {
                            const IconComponent = link.icon;
                            return (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setSolutionsOpen(false)}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-emerald-100 group-hover:bg-emerald-200 flex items-center justify-center transition-colors">
                                  <IconComponent className="w-4 h-4 text-emerald-600" />
                                </div>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-emerald-700">
                                  {link.label}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom CTA */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <Link
                        href="/contact"
                        onClick={() => setSolutionsOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl bg-linear-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-colors group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Not sure where to start?</p>
                          <p className="text-xs text-slate-500">Talk to our team for a personalized recommendation</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                          <ChevronDown className="w-4 h-4 text-white -rotate-90" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('/#pricing')}
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                isScrolled ? 'text-slate-600' : 'text-slate-700'
              }`}
            >
              Pricing
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/sign-in">
              <Button variant="ghost" className="text-slate-600 hover:text-emerald-600">
                Sign In
              </Button>
            </Link>
            <Link href="/get-started">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col h-full pt-8">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-700 hover:text-emerald-600 transition-colors py-2"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/features"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-700 hover:text-emerald-600 transition-colors py-2"
                  >
                    Features
                  </Link>
                  
                  <button
                    onClick={() => scrollToSection('/#pricing')}
                    className="text-lg font-medium text-slate-700 hover:text-emerald-600 transition-colors text-left py-2"
                  >
                    Pricing
                  </button>
                  
                  {/* Mobile Solutions Section */}
                  <div className="py-2">
                    <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">By Team</p>
                    {teamSolutions.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 py-2 text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                          <IconComponent className="w-4 h-4" />
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="py-2">
                    <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Service Providers</p>
                    {serviceProviders.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 py-2 text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                          <IconComponent className="w-4 h-4" />
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </nav>
                <div className="mt-auto pb-8 flex flex-col gap-3">
                  <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/get-started" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
