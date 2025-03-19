import React, { useState } from 'react';
import { 
  Heart, 
  Shield, 
  Clock, 
  MessageCircle, 
  ArrowRight, 
  Users, 
  Lock, 
  Send, 
  Star,
  Flower2 
} from 'lucide-react';

interface BookingFormData {
  name: string;
  sessionTime: string;
  message: string;
}

export function Home() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    sessionTime: '',
    message: ''
  });

  const WHATSAPP_NUMBER = '919815919243';

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDateTime = new Date(formData.sessionTime).toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const message = `Hi, I'm interested in booking a therapy session!

${formData.name ? `Name: ${formData.name}` : 'I prefer to remain anonymous'}
Preferred Time: ${formattedDateTime}
${formData.message ? `\nAdditional Notes: ${formData.message}` : ''}

Please confirm if this time works for you.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <header className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&q=80")',
            opacity: '0.15'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 to-white/80 backdrop-blur-sm z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Flower2 className="w-8 h-8 text-orange-600" />
              <span className="text-2xl font-serif text-orange-800">Avedhane Anuchintan</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-serif">
              Your Journey to<br />Inner Peace & Growth
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional counseling sessions for just ₹500 per hour.<br />
              Begin your path to mindful living and emotional well-being.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Begin Your Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-5 h-5 text-orange-600" />
                <span>100% Confidential</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Image Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80" 
              alt="Meditation session" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <p className="text-white text-lg font-medium">Mindful Meditation Sessions</p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80" 
              alt="One-on-one counseling" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <p className="text-white text-lg font-medium">Personal Growth Journey</p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1517898717281-8e4385a41802?auto=format&fit=crop&q=80" 
              alt="Group therapy" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <p className="text-white text-lg font-medium">Holistic Healing Approach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              Our Healing Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We blend traditional wisdom with modern therapeutic techniques to provide comprehensive support for your mental well-being.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-orange-600" />,
                title: "Safe Space",
                description: "A confidential environment where you can express yourself freely without judgment."
              },
              {
                icon: <Heart className="w-8 h-8 text-orange-600" />,
                title: "Compassionate Care",
                description: "Empathetic support from experienced therapists who truly understand your journey."
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-600" />,
                title: "Flexible Sessions",
                description: "Convenient scheduling that fits into your busy lifestyle."
              },
              {
                icon: <Users className="w-8 h-8 text-orange-600" />,
                title: "Personalized Approach",
                description: "Tailored therapy sessions that address your unique needs and goals."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-serif">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              Stories of Healing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences shared by our clients, with their privacy protected
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I was struggling with family problems and a difficult breakup while studying abroad. The cultural differences made everything harder. Ma'am helped me understand my emotions better and gave me practical ways to handle the situation. Today, I can say I'm in a much better place. Thank you for being there when I needed support the most.",
                author: "International Student",
                rating: 5
              },
              {
                quote: "Dealing with work pressure and anxiety was taking a toll on my health. Through our sessions, I learned to set boundaries and practice self-care. The breathing techniques and mindfulness exercises have become part of my daily routine. It's amazing how much clearer everything feels now.",
                author: "IT Professional",
                rating: 5
              },
              {
                quote: "After losing a loved one, I felt lost and couldn't process my grief. The gentle guidance and safe space provided helped me work through my emotions at my own pace. I'm grateful for the compassionate support that helped me find strength in vulnerability.",
                author: "Anonymous Client",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-orange-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <footer className="text-sm text-gray-500 font-medium">
                  — {testimonial.author}
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              Begin Your Journey
            </h2>
            <p className="text-gray-600">
              Take the first step towards mindful living and emotional well-being
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-200 py-3 px-4"
                  placeholder="Enter your name or stay anonymous"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Session Time
                </label>
                <input
                  type="datetime-local"
                  required
                  min={new Date().toISOString().slice(0, 16)}
                  value={formData.sessionTime}
                  onChange={(e) => setFormData({ ...formData, sessionTime: e.target.value })}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-200 py-3 px-4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 transition-colors duration-200 py-3 px-4"
                  rows={4}
                  placeholder="Share what brings you here today..."
                />
              </div>
              <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                <Lock className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-sm text-orange-600">
                  Your information is secure and confidential
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                Continue on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}