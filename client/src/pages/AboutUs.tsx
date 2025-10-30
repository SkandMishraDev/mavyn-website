import React from 'react';
import { IconPlaceholder } from '@/components/ui/Icons';

const teamMembers = [
  {
    name: 'Muna Salvi',
    role: 'Co-Founder | Compliance & Governance',
    image: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=Muna+Salvi',
    bio: 'A highly respected UAE banking leader with extensive experience serving as **Head of FCCM, AMLRO, Head of Compliance, and Head of Governance & Controls** for prominent UAE banks. Muna is a recognized authority on CBUAE regulations, AML/CFT frameworks, sanctions compliance, and financial crime risk management. Her deep, practical expertise is invaluable in navigating the region\'s dynamic regulatory landscape.',
  },
  {
    name: 'Vivek Tiwari',
    role: 'Co-Founder | Digital & Customer Experience',
    image: 'https://placehold.co/600x400/3730A3/FFFFFF?text=Vivek+Tiwari',
    bio: 'A results-driven, digital-first banking executive with a proven track record as **Head of Customer Experience, Digitisation, Product Management, and Head of Implementation & Customer Delivery** in the UAE and India. Vivek excels in building proprietary technology, designing intuitive customer journeys, and managing complex, large-scale digital transformations. He masterfully connects technology, product strategy, and user needs.',
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container animate-in fade-in slide-in-from-top-12 duration-500">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-sora font-bold mb-6 text-gray-900">
              About MAVYN
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Founded by banking veterans with 50+ years of combined experience, MAVYN brings insider knowledge and practical expertise to help you navigate compliance, transform customer experiences, and scale with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container animate-in fade-in duration-700 delay-150">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-12 text-center text-gray-900">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
                <div className="h-64 bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-end justify-start relative">
                  <img src={member.image} alt={`${member.name} - Headshot Placeholder`} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
                  <div className="relative z-10 p-6">
                    <h3 className="text-2xl font-sora font-bold text-white shadow-sm">{member.name}</h3>
                    <p className="text-indigo-100 font-semibold text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <p className="text-gray-700 leading-relaxed text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container animate-in fade-in duration-700 delay-450">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-12 text-center text-gray-900">The MAVYN Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 text-center bg-white rounded-3xl border border-gray-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <IconPlaceholder name="Award" className="text-indigo-600 mx-auto mb-5" size={40} />
              <h3 className="text-xl font-sora font-bold mb-3 text-gray-900">Decades of Bank-Side Leadership</h3>
              <p className="text-sm text-gray-600">
                Founded and run by executives who have sat in your chair. We understand your pressures, speak your language, and know what works.
              </p>
            </div>

            <div className="p-8 text-center bg-white rounded-3xl border border-gray-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <IconPlaceholder name="Zap" className="text-indigo-600 mx-auto mb-5" size={40} />
              <h3 className="text-xl font-sora font-bold mb-3 text-gray-900">Truly Integrated Solutions</h3>
              <p className="text-sm text-gray-600">
                We break down silos. Our expertise spans compliance, digital, CX, and operations – delivered as one cohesive service.
              </p>
            </div>

            <div className="p-8 text-center bg-white rounded-3xl border border-gray-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <IconPlaceholder name="Users" className="text-indigo-600 mx-auto mb-5" size={40} />
              <h3 className="text-xl font-sora font-bold mb-3 text-gray-900">Outcome-Focused Partnership</h3>
              <p className="text-sm text-gray-600">
                We align our success with yours through flexible, results-driven commercial models. We deliver outcomes, not just billable hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
