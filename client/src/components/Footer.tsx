import React from 'react';
import { Link } from './Link';
import { IconPlaceholder } from './ui/Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto border-t-4 border-indigo-600">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 pr-8">
            <Link href="/" className="inline-block mb-4">
              <img src="https://placehold.co/160x40/4F46E5/FFFFFF?text=MAVYN&font=sora" alt="MAVYN Logo" className="h-10 w-auto filter brightness-0 invert" />
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              MAVYN LLC: Your expert, integrated partner for banking compliance, digital transformation, and customer experience in the UAE.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/managed-compliance-kyc-aml" className="opacity-80 hover:text-indigo-400 transition-colors">Compliance & KYC/AML</Link></li>
              <li><Link href="/services/sme-onboarding-as-a-service" className="opacity-80 hover:text-indigo-400 transition-colors">Onboarding-as-a-Service</Link></li>
              <li><Link href="/services/digital-journey-transformation" className="opacity-80 hover:text-indigo-400 transition-colors">Digital Transformation</Link></li>
              <li><Link href="/services/customer-experience-nps" className="opacity-80 hover:text-indigo-400 transition-colors">Customer Experience</Link></li>
              <li><Link href="/services/banking-advisory" className="opacity-80 hover:text-indigo-400 transition-colors">Business Advisory</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="opacity-80 hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/our-model" className="opacity-80 hover:text-indigo-400 transition-colors">Why MAVYN</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <IconPlaceholder name="Mail" size={16} className="text-indigo-400" />
                <a href="mailto:hello@mavyn.ae" className="opacity-80 hover:text-indigo-400 transition-colors">hello@mavyn.ae</a>
              </li>
              <li className="flex items-center gap-2">
                <IconPlaceholder name="Phone" size={16} className="text-indigo-400" />
                <a href="tel:+971" className="opacity-80 hover:text-indigo-400 transition-colors">+971 (0) 4 XXX XXXX</a>
              </li>
              <li className="flex items-center gap-2">
                <IconPlaceholder name="MapPin" size={16} className="text-indigo-400" />
                <span className="opacity-80">Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} MAVYN LLC. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
