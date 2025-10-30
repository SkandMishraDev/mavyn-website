import React, { useState, useRef, useEffect } from 'react';
import { Link } from './Link';
import { IconPlaceholder } from './ui/Icons';
import { cn } from '@/lib/utils';
import { useRouter } from '@/contexts/RouterContext';

const services = [
  { slug: 'managed-compliance-kyc-aml', title: 'Compliance & KYC/AML', icon: 'Shield', description: 'Achieve 100% CBUAE compliance at a predictable cost.' },
  { slug: 'sme-onboarding-as-a-service', title: 'Onboarding-as-a-Service', icon: 'Users', description: 'Acquire and onboard SME clients in hours, not weeks.' },
  { slug: 'digital-journey-transformation', title: 'Digital Journey Transformation', icon: 'Zap', description: 'From manual forms to seamless digital experiences.' },
  { slug: 'customer-experience-nps', title: 'Customer Experience & NPS', icon: 'TrendingUp', description: 'Go beyond scores. Drive actionable CX improvement.' },
  { slug: 'banking-advisory', title: 'Business Advisory', icon: 'BarChart3', description: 'Expert banking support for your SME: account opening, trade finance, and compliance.' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const { navigate } = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleMobileLinkClick = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        const menuButton = headerRef.current.querySelector('button[aria-label="Toggle menu"]');
        if (!menuButton || !menuButton.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="container flex items-center justify-between h-18 md:h-22">
        {/* Logo and Tagline */}
        <Link href="/" className="flex-shrink-0" onClick={() => { setServicesOpen(false); setIsOpen(false); }}>
          <div className="flex flex-col items-start">
            <img src="https://placehold.co/160x40/4F46E5/FFFFFF?text=MAVYN&font=sora" alt="MAVYN Logo" className="h-10 md:h-12 w-auto object-contain" />
            <span className="text-xs italic text-indigo-700/80 mt-1">Quality Isn't Expensive.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Link href="/about-us" className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesMenuRef}>
            <button
              onMouseDown={(e) => { e.preventDefault(); setServicesOpen(!servicesOpen); }}
              onMouseEnter={() => setServicesOpen(true)}
              aria-expanded={servicesOpen}
              className={cn(
                'group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600 focus:outline-none focus:text-indigo-600',
                servicesOpen && 'text-indigo-600'
              )}
            >
              Services
              <IconPlaceholder name="ChevronDown" size={16} className={cn('relative top-[1px] ml-1 transition duration-200', servicesOpen && 'rotate-180')} />
            </button>

            {/* Dropdown Content */}
            <div
              onMouseLeave={() => setServicesOpen(false)}
              className={cn(
                'absolute right-0 top-full w-auto min-w-[600px] z-50 transition-all duration-300 ease-out origin-top',
                servicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
              )}
            >
              <div className="mt-2 rounded-2xl border bg-white p-4 text-gray-900 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                <ul className="grid gap-3 md:grid-cols-2">
                  {services.map((service) => (
                    <li key={service.title}>
                      <a
                        href={`#/services/${service.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setServicesOpen(false);
                          navigate(`/services/${service.slug}`);
                        }}
                        className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-indigo-50 focus:bg-indigo-50"
                      >
                        <div className="text-sm font-medium leading-none flex items-center gap-2">
                          <IconPlaceholder name={service.icon} size={16} className="text-indigo-600" />
                          {service.title}
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-gray-500">{service.description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link href="/our-model" className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600">
            Why MAVYN
          </Link>
          <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 -mr-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <IconPlaceholder name="X" size={24} /> : <IconPlaceholder name="Menu" size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden border-t border-gray-200 bg-white absolute w-full shadow-lg transition-all duration-300 ease-out z-40 overflow-auto',
          isOpen ? 'max-h-[calc(100vh-4.5rem)] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        )}
        style={{ top: 'calc(4.5rem - 1px)' }}
      >
        <nav className="container py-4 flex flex-col gap-1">
          <Link href="/about-us" onClick={handleMobileLinkClick} className="block text-base font-medium text-gray-700 hover:bg-indigo-50 rounded-md transition-colors py-2 px-3">
            About Us
          </Link>
          <span className="text-sm font-semibold py-2 px-3 text-gray-500 mt-2">Services</span>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} onClick={handleMobileLinkClick} className="block text-base font-medium text-gray-700 hover:bg-indigo-50 rounded-md transition-colors py-2 px-3 pl-6">
              {service.title}
            </Link>
          ))}
          <Link href="/our-model" onClick={handleMobileLinkClick} className="block text-base font-medium text-gray-700 hover:bg-indigo-50 rounded-md transition-colors py-2 px-3 mt-2">
            Why MAVYN
          </Link>
          <Link href="/contact" onClick={handleMobileLinkClick}>
            <button className="w-full mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30 hover:shadow-xl h-10 px-6 py-2">
              Contact Us
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
