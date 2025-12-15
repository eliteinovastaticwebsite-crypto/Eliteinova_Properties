import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner6 from "../assets/banner6.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const bannerImages = [
    { img: banner1, title: "Apartments", subtitle: "Where Comfort Meets Convenience" },
    { img: banner2, title: "Commercial Buildings", subtitle: "Elevate Your Business Address" },
    { img: banner6, title: "Hostels", subtitle: "Your Home Away From Home" },
    { img: banner4, title: "Individual Villas", subtitle: "Your Space. Your Sanctuary." },
    { img: banner5, title: "Land and Plots", subtitle: "Build Your Dream Home" },
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      <div className="w-full min-h-screen bg-white">
        <Header 
          onMenuToggle={toggleMobileMenu} 
          customerPortalMenu={customerPortalMenu}
          postPropertyMenu={postPropertyMenu}
          servicesMenu={servicesMenu}
        />

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleMobileMenu}>
            <div className="bg-white w-64 h-full overflow-y-auto" style={{ background: 'linear-gradient(180deg, #00695C, #26A69A)' }} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-4 border-b border-white border-opacity-20">
                <h2 className="text-white font-bold">Menu</h2>
                <button onClick={toggleMobileMenu} className="text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-4">
                <button className="w-full text-left text-white font-semibold py-3 border-b border-white border-opacity-20">Home</button>
                
                <details className="border-b border-white border-opacity-20">
                  <summary className="text-white font-semibold py-3 cursor-pointer">Customer Portal</summary>
                  <div className="pl-4 pb-2">
                    {Object.entries(customerPortalMenu).map(([key, submenu]) => (
                      <details key={key} className="mb-2">
                        <summary className="text-white text-sm py-2 capitalize cursor-pointer">{key}</summary>
                        <div className="pl-4">
                          {submenu.map((item) => (
                            <button key={item} className="block text-white text-xs py-1.5 w-full text-left">{item}</button>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                </details>
                
                <details className="border-b border-white border-opacity-20">
                  <summary className="text-white font-semibold py-3 cursor-pointer">Post Your Property</summary>
                  <div className="pl-4 pb-2">
                    {Object.entries(postPropertyMenu).map(([key, submenu]) => (
                      <details key={key} className="mb-2">
                        <summary className="text-white text-sm py-2 capitalize cursor-pointer">{key}</summary>
                        <div className="pl-4">
                          {submenu.map((item) => (
                            <button key={item} className="block text-white text-xs py-1.5 w-full text-left">{item}</button>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                </details>
                
                <button className="w-full text-left text-white font-semibold py-3 border-b border-white border-opacity-20">Find Your Loan</button>
                
                <details className="border-b border-white border-opacity-20">
                  <summary className="text-white font-semibold py-3 cursor-pointer">Services</summary>
                  <div className="pl-4 pb-2">
                    {servicesMenu.map((item) => (
                      <button key={item} className="block text-white text-sm py-2 w-full text-left">{item}</button>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </div>
        )}

        {/* Main Content - Add padding for fixed header */}
        <div className="w-full px-3 py-3 md:px-6 md:py-6 pt-[100px] md:pt-[110px]">
          {/* Banner Slider */}
          <div className="relative w-full mb-3 md:mb-6 overflow-hidden h-[300px] md:h-[500px]" style={{ backgroundColor: '#b0b0b0' }}>
            {bannerImages.map((banner, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={banner.img}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 flex flex-col items-center justify-end pb-16 md:pb-24 text-white px-4">
                  <h2 
                    className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 text-center" 
                    style={{ 
                      textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                      animation: index === currentSlide ? 'slideDown 1s ease-out' : 'none',
                      opacity: index === currentSlide ? 1 : 0
                    }}
                  >
                    {banner.title}
                  </h2>
                  <p 
                    className="text-lg md:text-2xl lg:text-3xl font-semibold text-center" 
                    style={{ 
                      textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
                      animation: index === currentSlide ? 'slideDown 1s ease-out 0.2s both' : 'none',
                      opacity: index === currentSlide ? 1 : 0
                    }}
                  >
                    {banner.subtitle}
                  </p>
                </div>
              </div>
            ))}
            <button
              onClick={handlePrevSlide}
              className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 p-1 rounded-full shadow z-20"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-black" />
            </button>
            <button
              onClick={handleNextSlide}
              className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 p-1 rounded-full shadow z-20"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-black" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide ? 'bg-white' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button className="text-white font-bold py-3 px-4 rounded-full hover:opacity-90 text-sm whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #00695C, #26A69A)' }}>
              Customer Portal
            </button>
            <button className="text-white font-bold py-3 px-4 rounded-full hover:opacity-90 text-sm whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #00695C, #26A69A)' }}>
              Post Your Property
            </button>
            <button className="text-white font-bold py-3 px-4 rounded-full hover:opacity-90 text-sm whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #00695C, #26A69A)' }}>
              Find Your Loan
            </button>
            <button className="text-white font-bold py-3 px-4 rounded-full hover:opacity-90 text-sm whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #00695C, #26A69A)' }}>
              Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;