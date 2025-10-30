import React from 'react';
import { Link } from '@/components/Link';

export default function OurModel() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container animate-in fade-in slide-in-from-top-12 duration-500">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-sora font-bold mb-6 text-gray-900">
              The MAVYN Difference: Integrated Expertise
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Why partner with MAVYN? Because we offer what others can't – a unified solution built on decades of real-world UAE banking leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24">
        <div className="container animate-in fade-in duration-700 delay-150">
          <h2 className="text-3xl font-sora font-bold mb-12 text-center text-gray-900">How We Compare</h2>
          <div className="overflow-x-auto max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-xl">
            <table className="w-full text-sm">
              <thead className="bg-indigo-50">
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-900 w-1/4">Factor</th>
                  <th className="text-left p-4 font-semibold text-gray-500 w-3/8">The Old Way (Fragmented Vendors)</th>
                  <th className="text-left p-4 font-semibold text-indigo-700 w-3/8">The MAVYN Way (Our Promise)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-medium align-top">Expertise</td>
                  <td className="p-4 text-gray-600 align-top">Generalist consultants or siloed BPO/Tech managers. Limited bank-side operational experience.</td>
                  <td className="p-4 text-gray-900 align-top"><strong>Led by Muna Salvi & Vivek Tiwari.</strong> 50+ years combined as UAE bank-side Heads of Compliance, Digital, CX, and Operations.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-medium align-top">Integration</td>
                  <td className="p-4 text-gray-600 align-top">Compliance team ≠ Digital team ≠ CX team. Silos, miscommunication, and finger-pointing.</td>
                  <td className="p-4 text-gray-900 align-top"><strong>One unified team.</strong> Compliance, digital, and CX work together seamlessly. No silos.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-medium align-top">Speed</td>
                  <td className="p-4 text-gray-600 align-top">Weeks to months. Coordination overhead. Slow decision-making.</td>
                  <td className="p-4 text-gray-900 align-top"><strong>Days to weeks.</strong> We move fast because we understand the full picture.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-medium align-top">Cost</td>
                  <td className="p-4 text-gray-600 align-top">Multiple vendors = multiple invoices. Hidden costs. Scope creep.</td>
                  <td className="p-4 text-gray-900 align-top"><strong>Predictable pricing.</strong> One partner, one invoice. No hidden surprises.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-medium align-top">Accountability</td>
                  <td className="p-4 text-gray-600 align-top">Blame-shifting between vendors. No single point of accountability.</td>
                  <td className="p-4 text-gray-900 align-top"><strong>We own the outcome.</strong> Your success is our success. Period.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why MAVYN Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container animate-in fade-in duration-700 delay-300">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sora font-bold mb-8 text-center text-gray-900">Why Choose MAVYN?</h2>
            <div className="space-y-6 text-gray-700">
              <div className="p-6 bg-white rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Bank-Side Expertise</h3>
                <p>We've sat in your chair. We know the pressures, the regulations, the customer expectations. We speak your language and understand your constraints.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Integrated Solutions</h3>
                <p>Compliance without digital is incomplete. Digital without CX is hollow. We deliver all three—together—as a cohesive strategy.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Outcome-Focused</h3>
                <p>We don't just deliver deliverables. We deliver outcomes. Your compliance is solid. Your customers are happy. Your operations are efficient.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-200">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Speed & Efficiency</h3>
                <p>Because we understand the full picture, we move fast. No coordination overhead. No miscommunication. Just results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600 flex-grow flex items-center">
        <div className="container w-full">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">Ready to Experience the MAVYN Difference?</h2>
            <p className="text-lg text-indigo-100 mb-8">
              Let's discuss how our integrated approach can transform your banking operations.
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
