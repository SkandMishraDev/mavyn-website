import React from 'react';
import { Link } from '@/components/Link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="container text-center">
        <h1 className="text-6xl md:text-7xl font-sora font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link href="/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transform hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30 hover:shadow-xl h-11 rounded-full px-8 text-base">
          Go Home
        </Link>
      </div>
    </div>
  );
}
