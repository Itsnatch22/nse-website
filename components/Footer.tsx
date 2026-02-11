"use client"
import React from 'react';
import { Sun, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/#pricing' },
      ],
    },
    solutions: {
      title: 'Solutions',
      links: [
        { label: 'Sales Teams', href: '/solutions/sales-teams' },
        { label: 'Engineering', href: '/solutions/engineering' },
        { label: 'Project Management', href: '/solutions/project-management' },
        { label: 'Contracts & Legal', href: '/solutions/legal-and-contracts' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'GDPR', href: '/gdpr' },
      ],
    },
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg">
                  <Sun className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl text-slate-900">
                  OneGrid
                </span>
              </Link>
              <p className="text-slate-600 mb-6 max-w-xs leading-relaxed">
                Built by solar developers, for solar developers. 
                Streamline your projects from lead to COD.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-300 transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:border-emerald-300 transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="font-semibold text-slate-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('/#') ? (
                        <a
                          href={link.href}
                          className="text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Bar */}
        <div className="py-8 border-t border-slate-200">
          <div className="flex flex-wrap gap-8 justify-center text-sm text-slate-600">
            <a href="mailto:hello@onegrid.com" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Mail className="w-4 h-4" />
              hello@onegrid.com
            </a>
            <a href="tel:+254723154900" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Phone className="w-4 h-4" />
              +254 72 315 4900
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Nairobi, Kenya
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} OneGrid. All rights reserved.
            </p>
            <p className="text-sm text-slate-400">
              Built by solar developers, for solar developers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
