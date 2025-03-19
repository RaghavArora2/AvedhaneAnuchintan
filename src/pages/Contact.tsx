import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Contact() {
  const WHATSAPP_NUMBER = '919815919243';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const message = `
Hi, I would like to get in touch!

Name: ${formData.get('name') || 'Not provided'}
Email: ${formData.get('email')}
Subject: ${formData.get('subject')}
Message: ${formData.get('message')}
    `.trim();

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

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
          <MessageCircle className="w-8 h-8 text-orange-600" />
          <h1 className="text-3xl font-bold text-gray-900 font-serif">Contact Us</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-200 py-3 px-4"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-200 py-3 px-4"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-200 py-3 px-4"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-200 py-3 px-4"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Continue on WhatsApp
              <Mail className="w-5 h-5" />
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-orange-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-semibold text-gray-900 font-serif">Phone</h2>
            </div>
            <p className="text-gray-600">
              +91 9815919243<br />
              Available Mon-Sat, 9AM-6PM
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-semibold text-gray-900 font-serif">Email</h2>
            </div>
            <p className="text-gray-600">
              avedhaneanuchintan@gmail.com<br />
              We usually respond within 24 hours
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-semibold text-gray-900 font-serif">Location</h2>
            </div>
            <p className="text-gray-600">
             Amritsar, Punjab 143001<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}