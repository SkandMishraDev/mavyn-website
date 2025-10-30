import React from 'react';
import { Link } from '@/components/Link';
import { IconPlaceholder } from '@/components/ui/Icons';
import { useRouter } from '@/contexts/RouterContext';

const services = [
  {
    slug: 'managed-compliance-kyc-aml',
    title: 'Compliance & KYC/AML',
    icon: 'Shield',
    description: 'Achieve 100% CBUAE compliance at a predictable cost.',
    details: 'Navigate the complex UAE regulatory landscape with confidence. Our compliance solutions ensure your business meets CBUAE requirements while minimizing operational burden.',
  },
  {
    slug: 'sme-onboarding-as-a-service',
    title: 'Onboarding-as-a-Service',
    icon: 'Users',
    description: 'Acquire and onboard SME clients in hours, not weeks.',
    details: 'Transform your customer acquisition process. We streamline SME onboarding, reducing friction and accelerating time-to-value for your business.',
  },
  {
    slug: 'digital-journey-transformation',
    title: 'Digital Journey Transformation',
    icon: 'Zap',
    description: 'From manual forms to seamless digital experiences.',
    details: 'Reimagine your customer interactions. We design and implement digital journeys that delight customers and reduce operational costs.',
  },
  {
    slug: 'customer-experience-nps',
    title: 'Customer Experience & NPS',
    icon: 'TrendingUp',
    description: 'Go beyond scores. Drive actionable CX improvement.',
    details: 'Build loyalty through exceptional experiences. We help you measure, analyze, and improve customer satisfaction with data-driven insights.',
  },
  {
    slug: 'banking-advisory',
    title: 'Business Advisory',
    icon: 'BarChart3',
    description: 'Expert banking support for your SME: account opening, trade finance, and compliance.',
    details: 'Get expert guidance from former bankers. We help you navigate banking relationships, secure financing, and optimize your banking operations.',
  },
];

export default function Services() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container animate-in fade-in slide-in-from-top-12 duration-500">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-sora font-bold mb-6 text-gray-900">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Comprehensive solutions for banking compliance, digital transformation, and customer experience excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 flex-grow">
        <div className="container animate-in fade-in duration-700 delay-150">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.slug}
                className="p-8 bg-white rounded-3xl border border-gray-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group flex flex-col"
                onClick={() => navigate(`/services/${service.slug}`)}
              >
                <IconPlaceholder name={service.icon} className="text-indigo-600 mb-5 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-sora font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  Learn More
                  <IconPlaceholder name="ArrowRight" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container animate-in fade-in duration-700 delay-300">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-lg text-indigo-100 mb-8">
              Our services can be tailored to meet your specific business needs. Let's discuss your requirements.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0 bg-white text-indigo-600 hover:bg-gray-100 shadow-lg h-11 rounded-full px-8 text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
