import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';

const HomePage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bannerImages = [
    'images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=600&fit=cro',
    'images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&h=600&fit=cro',
    'images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&h=600&fit=cro',
    'images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&h=600&fit=cro',
    'images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=600&fit=cro',
    'images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=600&fit=cro'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const customerPortalMenu = {
    rent: ['Individual', 'Apartment', 'Commercial', 'Land & Plot', 'Hostel'],
    buy: ['Individual', 'Apartment', 'Commercial', 'Land & Plot', 'Hostel'],
    lease: ['Individual', 'Apartment', 'Commercial', 'Land & Plot', 'Hostel']
  };

  const postPropertyMenu = {
    rent: ['Owner', 'Dealer', 'Builder', 'Hostel', 'Property Management'],
    sell: ['Owner', 'Dealer', 'Builder', 'Hostel', 'Property Management'],
    lease: ['Owner', 'Dealer', 'Builder', 'Hostel', 'Property Management']
  };

  const servicesMenu = ['Construction', 'Interior', 'Painting', 'Plumbing', 'Cleaning'];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Navigation */}
      <nav className="w-full" style={{ backgroundColor: '#00695C' }}>
        <div className="flex items-center">
          <button className="px-4 py-2 text-white font-semibold text-sm hover:bg-teal-700">
            Home
          </button>
          
          {/* Customer Portal Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('customer')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 text-white font-semibold text-sm hover:bg-teal-700 flex items-center gap-1">
              Customer Portal
              <ChevronDown className="w-3 h-3" />
            </button>
            {activeDropdown === 'customer' && (
              <div className="absolute top-full left-0 shadow-lg z-50 min-w-[140px]" style={{ backgroundColor: '#e5e5e5' }}>
                {Object.entries(customerPortalMenu).map(([key, submenu]) => (
                  <div key={key} className="relative group">
                    <button className="w-full px-3 py-1.5 text-left text-black hover:bg-gray-300 capitalize font-semibold text-xs">
                      {key}
                    </button>
                    <div className="absolute left-full top-0 shadow-lg hidden group-hover:block min-w-[140px]" style={{ backgroundColor: '#9a9a9a' }}>
                      {submenu.map((item) => (
                        <button key={item} className="w-full px-3 py-1.5 text-left text-black hover:bg-gray-500 text-xs">
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Post Your Property Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('post')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 text-white font-semibold text-sm hover:bg-teal-700 flex items-center gap-1">
              Post Your Property
              <ChevronDown className="w-3 h-3" />
            </button>
            {activeDropdown === 'post' && (
              <div className="absolute top-full left-0 shadow-lg z-50 min-w-[140px]" style={{ backgroundColor: '#e5e5e5' }}>
                {Object.entries(postPropertyMenu).map(([key, submenu]) => (
                  <div key={key} className="relative group">
                    <button className="w-full px-3 py-1.5 text-left text-black hover:bg-gray-300 capitalize font-semibold text-xs">
                      {key}
                    </button>
                    <div className="absolute left-full top-0 shadow-lg hidden group-hover:block min-w-[160px]" style={{ backgroundColor: '#c0c0c0' }}>
                      {submenu.map((item) => (
                        <button key={item} className="w-full px-3 py-1.5 text-left text-black hover:bg-gray-400 text-xs">
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Find Your Loan Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('loan')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 text-white font-semibold text-sm hover:bg-teal-700 flex items-center gap-1">
              Find Your Loan
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 text-white font-semibold text-sm hover:bg-teal-700 flex items-center gap-1">
              Services
              <ChevronDown className="w-3 h-3" />
            </button>
            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 shadow-lg z-50 min-w-[140px]" style={{ backgroundColor: '#e5e5e5' }}>
                {servicesMenu.map((item) => (
                  <button key={item} className="w-full px-3 py-1.5 text-left text-black hover:bg-gray-300 font-semibold text-xs">
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full px-3 py-3">
        {/* Banner Slider */}
        <div className="relative w-full mb-3 overflow-hidden" style={{ height: '600px', backgroundColor: '#b0b0b0' }}>
          {bannerImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Banner ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <button
            onClick={handlePrevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 p-1 rounded-full shadow z-20"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 p-1 rounded-full shadow z-20"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide ? 'bg-black' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button className="text-white font-bold py-3 px-4 rounded-full hover:opacity-90 text-sm whitespace-nowrap" style={{ backgroundColor: '#00695C' }}>
            Customer Portal
          </button>
          <button className="text-white font-bold py-3 px-4 rounded-full hover:opacity-90 text-sm whitespace-nowrap" style={{ backgroundColor: '#00695C' }}>
            Post Your Property
          </button>
          <button className="text-white font-bold py-3 px-4 rounded-full hover:opacity-90 text-sm whitespace-nowrap" style={{ backgroundColor: '#00695C' }}>
            Find Your Loan
          </button>
          <button className="text-white font-bold py-3 px-4 rounded-full hover:opacity-90 text-sm whitespace-nowrap" style={{ backgroundColor: '#00695C' }}>
            Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;