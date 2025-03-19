import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flower2 className="w-6 h-6 text-orange-600" />
            <span className="text-xl font-serif text-gray-900">Avedhane Anuchintan</span>
          </div>
          <p className="text-gray-600 mb-6">
            Guiding you towards mindful living and emotional well-being
          </p>
          <div className="flex justify-center items-center gap-8 mb-8 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-orange-600 transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-orange-600 transition-colors duration-200">Terms of Service</Link>
            <Link to="/contact" className="hover:text-orange-600 transition-colors duration-200">Contact</Link>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Avedhane Anuchintan. All rights reserved.</p>
          <p className="mt-4 text-sm text-red-600 font-medium">
            Emergency? Please contact your local emergency services or mental health helpline immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}