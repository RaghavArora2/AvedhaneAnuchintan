import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const WHATSAPP_NUMBER = '919815919243';
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in your counseling services!");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 transform hover:-translate-y-1 z-40 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}