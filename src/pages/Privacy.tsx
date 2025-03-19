import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Privacy() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-orange-600" />
          <h1 className="text-3xl font-bold text-gray-900 font-serif">Privacy Policy</h1>
        </div>

        <div className="prose prose-orange max-w-none">
          <p className="text-gray-600 text-lg mb-6">
            At Avedhane Anuchintan, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-serif">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect only the information necessary to provide you with our counseling services:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Name (optional)</li>
            <li>Contact information</li>
            <li>Session preferences</li>
            <li>Basic demographic information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-serif">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            Your information is used exclusively for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Scheduling and managing therapy sessions</li>
            <li>Providing personalized care</li>
            <li>Maintaining continuity of care</li>
            <li>Legal and professional requirements</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-serif">Confidentiality</h2>
          <p className="text-gray-600 mb-6">
            All information shared during sessions is strictly confidential and protected by professional ethics and legal standards. We never share your information with third parties without your explicit consent, except when required by law or in cases of immediate safety concerns.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-serif">Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement robust security measures to protect your personal information from unauthorized access, alteration, or disclosure. All digital records are encrypted and stored securely.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-serif">Your Rights</h2>
          <p className="text-gray-600 mb-6">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Access your personal information</li>
            <li>Request corrections to your data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <div className="bg-orange-50 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 font-serif">Questions or Concerns?</h2>
            <p className="text-gray-600">
              If you have any questions about our privacy policy or how we handle your data, please don't hesitate to contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}