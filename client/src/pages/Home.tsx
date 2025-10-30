import React from 'react';
import { Link } from '@/components/Link';
import { IconPlaceholder } from '@/components/ui/Icons';
import { useRouter } from '@/contexts/RouterContext';
import Testimonials from '@/components/Testimonials';

const services = [
  { slug: 'managed-compliance-kyc-aml', title: 'Compliance & KYC/AML', icon: 'Shield', description: 'Achieve 100% CBUAE compliance at a predictable cost.' },
  { slug: 'sme-onboarding-as-a-service', title: 'Onboarding-as-a-Service', icon: 'Users', description: 'Acquire and onboard SME clients in hours, not weeks.' },
  { slug: 'digital-journey-transformation', title: 'Digital Journey Transformation', icon: 'Zap', description: 'From manual forms to seamless digital experiences.' },
  { slug: 'customer-experience-nps', title: 'Customer Experience & NPS', icon: 'TrendingUp', description: 'Go beyond scores. Drive actionable CX improvement.' },
  { slug: 'banking-advisory', title: 'Business Advisory', icon: 'BarChart3', description: 'Expert banking support for your SME: account opening, trade finance, and compliance.' },
];

export default function Home() {
  const { navigate } = useRouter();
  const pillars = services;
   const painPoints = [
    "High costs & errors from manual KYC/AML?",
    "Slow, complex SME onboarding driving customers away?",
    "Juggling separate vendors for Tech, BPO, Compliance?",
    "Low NPS scores due to broken experiences?"
   ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-12 duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-8 leading-snug text-gray-900"> {/* Changed leading-tight to leading-snug */}
              Unmatched Financial Expertise. {/* Replaced Banking with Financial */}
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Integrated Solutions.</span>
            </h1>
            {/* REMOVED Tagline from here */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Founded by two banking leaders with 40+ years of experience, <strong className="font-semibold text-gray-800">Mavyn</strong> is your single partner to transform compliance, digitize onboarding, and enhance customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30 hover:shadow-xl h-11 rounded-full px-8 text-base">
                Schedule a Consultation
                <IconPlaceholder name="ArrowRight" size={18} />
              </Link>
              <Link href="/our-model" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 shadow-sm h-11 rounded-full px-8 text-base">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

       {/* Pain Points Section */}
       <section className="py-16 md:py-24">
        <div className="container animate-in fade-in duration-700 delay-150">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4 text-gray-900">Are these challenges familiar?</h2>
            <p className="text-gray-600 text-lg">
              The common hurdles facing modern UAE banks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {painPoints.map((point, idx) => (
              <div key={idx} className="flex gap-4 p-8 bg-white rounded-3xl border border-gray-200 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <IconPlaceholder name="CheckCircle" size={24} className="text-yellow-600 flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container animate-in fade-in duration-700 delay-150">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-12 text-center text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.slug}
                className="p-8 bg-white rounded-3xl border border-gray-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group"
                onClick={() => navigate(`/services/${service.slug}`)}
              >
                <IconPlaceholder name={service.icon} className="text-indigo-600 mb-5 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-sora font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{service.description}</p>
                <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  Learn More
                  <IconPlaceholder name="ArrowRight" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container animate-in fade-in duration-700 delay-300">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">Ready to Transform Your Banking Operations?</h2>
            <p className="text-lg text-indigo-100 mb-8">
              Let's discuss how MAVYN can help you achieve compliance, delight customers, and scale efficiently.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0 bg-white text-indigo-600 hover:bg-gray-100 shadow-lg h-11 rounded-full px-8 text-base">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
