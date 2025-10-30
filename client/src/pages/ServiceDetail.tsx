import React from 'react';
import { Link } from '@/components/Link';
import { IconPlaceholder } from '@/components/ui/Icons';
import { useRouter } from '@/contexts/RouterContext';

interface ServiceDetailProps {
  slug: string;
}

const serviceDetails: Record<string, any> = {
  'managed-compliance-kyc-aml': {
    title: 'Compliance & KYC/AML',
    icon: 'Shield',
    heroImage: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    subtitle: 'Achieve 100% CBUAE compliance at a predictable cost.',
    overview: 'Navigate the complex UAE regulatory landscape with confidence. Our compliance solutions ensure your business meets CBUAE requirements while minimizing operational burden and costs.',
    sections: [
      {
        title: 'KYC/AML Compliance Setup',
        description: 'We establish robust KYC and AML frameworks tailored to CBUAE standards.',
        items: ['Customer Due Diligence (CDD)', 'Enhanced Due Diligence (EDD)', 'Ongoing Customer Monitoring', 'Sanctions Screening'],
      },
      {
        title: 'Regulatory Reporting',
        description: 'Ensure timely and accurate reporting to regulatory authorities.',
        items: ['Suspicious Activity Reports (SAR)', 'Currency Transaction Reports (CTR)', 'Regulatory Filings', 'Audit Support'],
      },
      {
        title: 'Compliance Training',
        description: 'Equip your team with the knowledge to maintain compliance.',
        items: ['Staff Training Programs', 'Compliance Policies & Procedures', 'Risk Assessment', 'Internal Audits'],
      },
    ],
    pricing: 'Custom pricing based on your business size and complexity. We offer flexible engagement models.',
  },
  'sme-onboarding-as-a-service': {
    title: 'Onboarding-as-a-Service',
    icon: 'Users',
    heroImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    subtitle: 'Acquire and onboard SME clients in hours, not weeks.',
    overview: 'Transform your customer acquisition process. We streamline SME onboarding, reducing friction and accelerating time-to-value for your business.',
    sections: [
      {
        title: 'Streamlined Onboarding',
        description: 'Fast-track your SME clients through the onboarding process.',
        items: ['Digital Application Forms', 'Document Verification', 'Quick Approvals', 'Account Activation'],
      },
      {
        title: 'Customer Support',
        description: 'Dedicated support to ensure smooth client experience.',
        items: ['Onboarding Assistance', 'FAQ & Knowledge Base', 'Technical Support', 'Training & Guidance'],
      },
      {
        title: 'Integration Services',
        description: 'Seamlessly integrate with your existing systems.',
        items: ['API Integration', 'Data Migration', 'System Testing', 'Go-Live Support'],
      },
    ],
    pricing: 'Per-client onboarding fees or monthly retainer. Flexible pricing based on volume.',
  },
  'digital-journey-transformation': {
    title: 'Digital Journey Transformation',
    icon: 'Zap',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    subtitle: 'From manual forms to seamless digital experiences.',
    overview: 'Reimagine your customer interactions. We design and implement digital journeys that delight customers and reduce operational costs.',
    sections: [
      {
        title: 'Journey Mapping',
        description: 'Understand and optimize every touchpoint in your customer journey.',
        items: ['Current State Analysis', 'Pain Point Identification', 'Future State Design', 'Implementation Roadmap'],
      },
      {
        title: 'Digital Solutions',
        description: 'Build modern, user-friendly digital experiences.',
        items: ['Mobile App Development', 'Web Portal Design', 'API Development', 'Integration & Deployment'],
      },
      {
        title: 'Change Management',
        description: 'Ensure successful adoption of new digital solutions.',
        items: ['Staff Training', 'Change Communication', 'User Support', 'Performance Monitoring'],
      },
    ],
    pricing: 'Project-based pricing with flexible engagement models.',
  },
  'customer-experience-nps': {
    title: 'Customer Experience & NPS',
    icon: 'TrendingUp',
    heroImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    subtitle: 'Go beyond scores. Drive actionable CX improvement.',
    overview: 'Build loyalty through exceptional experiences. We help you measure, analyze, and improve customer satisfaction with data-driven insights.',
    sections: [
      {
        title: 'NPS Program Setup',
        description: 'Establish a robust Net Promoter Score program.',
        items: ['Survey Design', 'Data Collection', 'Analysis & Reporting', 'Benchmarking'],
      },
      {
        title: 'CX Improvement',
        description: 'Turn insights into actionable improvements.',
        items: ['Root Cause Analysis', 'Improvement Initiatives', 'Implementation Support', 'Results Tracking'],
      },
      {
        title: 'Customer Feedback',
        description: 'Capture and act on customer feedback.',
        items: ['Feedback Channels', 'Sentiment Analysis', 'Issue Resolution', 'Continuous Improvement'],
      },
    ],
    pricing: 'Monthly retainer or project-based engagement.',
  },
  'banking-advisory': {
    title: 'Business Advisory',
    icon: 'BarChart3',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    subtitle: 'Expert banking support for your SME: account opening, trade finance, and compliance.',
    overview: 'Get expert guidance from former bankers. We help you navigate banking relationships, secure financing, and optimize your banking operations.',
    sections: [
      {
        title: 'Account Opening & Management',
        description: 'Streamline your banking account setup and management.',
        items: ['Account Opening Support', 'Documentation Preparation', 'Bank Relationship Management', 'Account Optimization'],
      },
      {
        title: 'Trade Finance',
        description: 'Access trade finance facilities to support your business growth.',
        items: ['Facility Structuring & Advisory', 'Application Support & Bank Negotiation', 'End-to-end Process Management'],
      },
      {
        title: 'Banking & Compliance Queries',
        description: 'Get expert answers to your banking and compliance questions.',
        items: ['RFI Response Support', 'AML & UBO Query Resolution', 'General Banking & Compliance Guidance'],
      },
    ],
    pricing: 'Per-project, hourly/day rate, or case-by-case basis.',
  },
};

export default function ServiceDetail({ slug }: ServiceDetailProps) {
  const service = serviceDetails[slug];
  const { navigate } = useRouter();

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-indigo-600 hover:text-indigo-700">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const handleApplyNow = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Banner Section with Background Image */}
      <section 
        className="py-24 md:py-32 bg-cover bg-center bg-no-repeat relative min-h-[400px] md:min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${service.heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative z-10 animate-in fade-in slide-in-from-top-12 duration-500 w-full">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <IconPlaceholder name={service.icon} className="text-white" size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-sora font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8">
              {service.subtitle}
            </p>
            <button
              onClick={handleApplyNow}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0 bg-white text-indigo-600 hover:bg-gray-100 shadow-lg h-11 rounded-full px-8 text-base"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container animate-in fade-in duration-700 delay-150">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="py-16 md:py-24 bg-gray-50 flex-grow">
        <div className="container animate-in fade-in duration-700 delay-300">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-sora font-bold mb-12 text-center text-gray-900">What We Offer</h2>
            <div className="space-y-8">
              {service.sections.map((section: any, index: number) => (
                <div key={index} className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-sora font-bold mb-4 text-gray-900">{section.title}</h3>
                  <p className="text-gray-700 mb-6">{section.description}</p>
                  <ul className="space-y-2">
                    {section.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <IconPlaceholder name="CheckCircle" size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container animate-in fade-in duration-700 delay-450">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-sora font-bold mb-6 text-gray-900">Pricing</h2>
            <p className="text-lg text-gray-700 mb-8">{service.pricing}</p>
            <button
              onClick={handleApplyNow}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30 hover:shadow-xl h-11 rounded-full px-8 text-base"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container animate-in fade-in duration-700 delay-600">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-indigo-100 mb-8">
              Let's discuss how {service.title} can benefit your business.
            </p>
            <button
              onClick={handleApplyNow}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0 bg-white text-indigo-600 hover:bg-gray-100 shadow-lg h-11 rounded-full px-8 text-base"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
