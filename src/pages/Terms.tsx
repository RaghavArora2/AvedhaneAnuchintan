import React from 'react';
import { ScrollText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Terms() {
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
          <ScrollText className="w-8 h-8 text-orange-600" />
          <h1 className="text-3xl font-bold text-gray-900 font-serif">Terms of Service</h1>
        </div>

        <div className="prose prose-orange max-w-none">
          <p className="text-gray-600 text-lg mb-6">
            Welcome to Avedhane Anuchintan. By using our services, you agree to these terms. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-serif">Service Description</h2>
          <p className="text-gray-600 mb-6">
            We provide professional counseling and therapy services designed to support your mental well-being and personal growth. Our services include individual counseling sessions, guided meditation, and emotional support.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-serif">Appointment Policy</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Sessions are 60 minutes long</li>
            <li>24-hour cancellation notice required</li>
            <li>Late arrivals may result in shortened sessions</li>
            <li>Payment is required at the time of booking</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-serif">Confidentiality</h2>
          <p className="text-gray-600 mb-6">
            We maintain strict confidentiality in accordance with professional ethics and legal requirements. However, there are legal limits to confidentiality, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Risk of harm to self or others</li>
            <li>Suspected abuse of children or vulnerable adults</li>
            <li>Court orders or legal requirements</li>
            <li>Insurance billing requirements (if applicable)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-serif">Payment Terms</h2>
          <p className="text-gray-600 mb-6">
            Our fee is ₹500 per hour-long session. Payment is required at the time of booking. We accept various payment methods including UPI, net banking, and major credit cards.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-serif">Cancellation Policy</h2>
          <p className="text-gray-600 mb-6">
            We require 24 hours notice for cancellations. Late cancellations or missed appointments may be subject to the full session fee.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 font-serif">Emergency Services</h2>
          <p className="text-gray-600 mb-6">
            We are not an emergency service. If you are experiencing a mental health emergency, please contact your local emergency services or mental health crisis hotline immediately.
          </p>

          <div className="bg-orange-50 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 font-serif">Questions About Our Terms?</h2>
            <p className="text-gray-600">
              If you have any questions about our terms of service, please contact us for clarification before booking a session.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}