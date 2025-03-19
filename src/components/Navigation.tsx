import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/contact', label: 'Contact' },
    { path: '/privacy', label: 'Privacy' },
    { path: '/terms', label: 'Terms' },
  ];

  return (
    <nav className="fixed top-0 right-0 p-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-800" />
        ) : (
          <Menu className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-4 min-w-[200px] border border-gray-100">
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'bg-orange-100 text-orange-800'
                    : 'hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}