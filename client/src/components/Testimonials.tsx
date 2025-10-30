import React, { useState, useMemo } from 'react';
import { IconPlaceholder } from '@/components/ui/Icons';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Al Mansouri',
    role: 'CEO',
    company: 'CIB Finserv',
    quote: 'MAVYN transformed our compliance operations completely. Their expertise in CBUAE regulations saved us months of work and thousands in potential fines. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fatima Al Mazrouei',
    role: 'Operations Director',
    company: 'Paymatic LLC',
    quote: 'The onboarding-as-a-service solution reduced our client acquisition time from weeks to days. The team is professional, responsive, and truly understands our business needs.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mohammed Al Suwaidi',
    role: 'Managing Director',
    company: 'CBI Bank',
    quote: 'MAVYN\'s digital journey transformation initiative completely revamped our customer experience. Our NPS score improved by 35 points in just 6 months!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Layla Al Hashmi',
    role: 'Head of Compliance',
    company: 'KOTAK Bank',
    quote: 'Working with MAVYN on our KYC/AML framework was seamless. Their consultants are knowledgeable, and the implementation was faster than expected.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Rashid Al Ketbi',
    role: 'Founder',
    company: 'WINTech Solution',
    quote: 'As a startup, navigating banking relationships was challenging. MAVYN\'s business advisory service was invaluable in securing our trade finance facility.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Noor Al Falasi',
    role: 'Customer Experience Manager',
    company: 'Al Saed Fincials',
    quote: 'The customer experience and NPS program gave us actionable insights. We\'ve implemented their recommendations and already seeing improved customer retention.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const visibleTestimonials = useMemo(() => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  }, [currentIndex]);

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-12 duration-500">
          <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading SMEs and fintech companies across the UAE. Hear from our satisfied clients about their experience with MAVYN.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <IconPlaceholder
                        key={i}
                        name="Star"
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-indigo-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-gray-300 hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-300"
              aria-label="Previous testimonials"
            >
              <IconPlaceholder name="ChevronLeft" size={24} className="text-gray-600 hover:text-indigo-600" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-indigo-600 w-8'
                      : 'bg-gray-300 w-2 hover:bg-indigo-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-300 hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-300"
              aria-label="Next testimonials"
            >
              <IconPlaceholder name="ChevronRight" size={24} className="text-gray-600 hover:text-indigo-600" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center text-sm text-gray-600">
            Showing {currentIndex + 1} - {currentIndex + 3} of {testimonials.length} testimonials
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-in fade-in duration-700 delay-300">
          <p className="text-gray-700 mb-6">
            Ready to join our growing list of satisfied clients?
          </p>
          <a
            href="#/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30 hover:shadow-xl h-11 rounded-full px-8 text-base"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
