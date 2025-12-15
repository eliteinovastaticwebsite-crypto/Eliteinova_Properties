import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const PostPropertyPage = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const propertyTypes = ['Owner', 'Dealer', 'Builder', 'Hostel', 'Property Management'];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
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
      
      {/* Add padding-top to account for fixed header */}
      <div className="pt-[100px] md:pt-[110px]">
        {/* Page Header */}
        <div className="w-full py-8 px-4" style={{ background: 'linear-gradient(90deg, #00695C, #26A69A)' }}>
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              Post Your Property
            </h1>
            <p className="text-white text-center mt-2 text-sm md:text-base">
              Choose the type of listing you want to create
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            
            {/* Sell Property Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => handleMenuClick('sell')}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                style={{ background: activeMenu === 'sell' ? 'linear-gradient(135deg, #00695C, #26A69A)' : 'white' }}
              >
                <span className={`text-xl font-bold ${activeMenu === 'sell' ? 'text-white' : 'text-gray-800'}`}>
                  Sell
                </span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${activeMenu === 'sell' ? 'rotate-180 text-white' : 'text-gray-600'}`}
                />
              </button>
              
              {activeMenu === 'sell' && (
                <div className="border-t">
                  {propertyTypes.map((type, index) => (
                    <button
                      key={index}
                      className="w-full px-6 py-3 text-left hover:bg-gray-100 border-b last:border-b-0 transition-colors"
                    >
                      <span className="text-gray-700 font-medium">{type}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Rent Property Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => handleMenuClick('rent')}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                style={{ background: activeMenu === 'rent' ? 'linear-gradient(135deg, #00695C, #26A69A)' : 'white' }}
              >
                <span className={`text-xl font-bold ${activeMenu === 'rent' ? 'text-white' : 'text-gray-800'}`}>
                  Rent
                </span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${activeMenu === 'rent' ? 'rotate-180 text-white' : 'text-gray-600'}`}
                />
              </button>
              
              {activeMenu === 'rent' && (
                <div className="border-t">
                  {propertyTypes.map((type, index) => (
                    <button
                      key={index}
                      className="w-full px-6 py-3 text-left hover:bg-gray-100 border-b last:border-b-0 transition-colors"
                    >
                      <span className="text-gray-700 font-medium">{type}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Lease Property Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => handleMenuClick('lease')}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                style={{ background: activeMenu === 'lease' ? 'linear-gradient(135deg, #00695C, #26A69A)' : 'white' }}
              >
                <span className={`text-xl font-bold ${activeMenu === 'lease' ? 'text-white' : 'text-gray-800'}`}>
                  Lease
                </span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${activeMenu === 'lease' ? 'rotate-180 text-white' : 'text-gray-600'}`}
                />
              </button>
              
              {activeMenu === 'lease' && (
                <div className="border-t">
                  {propertyTypes.map((type, index) => (
                    <button
                      key={index}
                      className="w-full px-6 py-3 text-left hover:bg-gray-100 border-b last:border-b-0 transition-colors"
                    >
                      <span className="text-gray-700 font-medium">{type}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Additional Information */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Why Post With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #00695C, #26A69A)' }}>
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">No Brokerage</h3>
                  <p className="text-sm text-gray-600 mt-1">List your property without any commission fees</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #00695C, #26A69A)' }}>
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Wide Reach</h3>
                  <p className="text-sm text-gray-600 mt-1">Connect with thousands of potential buyers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #00695C, #26A69A)' }}>
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Quick & Easy</h3>
                  <p className="text-sm text-gray-600 mt-1">Simple process to list your property online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPropertyPage;