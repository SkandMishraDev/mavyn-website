import React, { useState } from 'react';
import { IconPlaceholder } from '@/components/ui/Icons';
import { toast } from '@/lib/utils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via Formspree (free service that doesn't require backend)
      const response = await fetch('https://formspree.io/f/xyzgqwpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        toast.success('Thank you! Your message has been sent successfully. We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container animate-in fade-in slide-in-from-top-12 duration-500">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-sora font-bold mb-6 text-gray-900">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Have questions about our services? We'd love to hear from you. Reach out and let's discuss how MAVYN can help your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 flex-grow">
        <div className="container animate-in fade-in duration-700 delay-150">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-sora font-bold mb-8 text-gray-900">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <IconPlaceholder name="Mail" className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:hello@mavyn.ae" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      hello@mavyn.ae
                    </a>
                    <p className="text-sm text-gray-500 mt-2">General inquiries</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <IconPlaceholder name="Phone" className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+971" className="text-gray-600 hover:text-indigo-600 transition-colors">
                      +971 (0) 4 XXX XXXX
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <IconPlaceholder name="MapPin" className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-sora font-bold mb-4 text-gray-900">Team</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Vivek Tiwari</p>
                    <p className="text-sm text-gray-600">Co-Founder | Digital & Customer Experience</p>
                    <a href="mailto:vivek@mavyn.ae" className="text-sm text-indigo-600 hover:text-indigo-700">
                      vivek@mavyn.ae
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Muna Salvi</p>
                    <p className="text-sm text-gray-600">Co-Founder | Compliance & Governance</p>
                    <a href="mailto:muna@mavyn.ae" className="text-sm text-indigo-600 hover:text-indigo-700">
                      muna@mavyn.ae
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-sora font-bold mb-4 text-gray-900">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM GST<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-full border border-gray-200 bg-white px-5 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors shadow-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-full border border-gray-200 bg-white px-5 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors shadow-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-full border border-gray-200 bg-white px-5 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors shadow-sm"
                    placeholder="+971 50 XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-full border border-gray-200 bg-white px-5 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors shadow-sm"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="flex min-h-[80px] w-full rounded-3xl border border-gray-200 bg-white px-5 py-3 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors shadow-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30 hover:shadow-xl h-11 rounded-full px-8 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <IconPlaceholder name="Spinner" size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
