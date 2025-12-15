import React, { useState } from 'react';
import { User, Menu, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ onMenuToggle }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

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

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top Header Bar */}
      <div className="w-full px-3 md:px-4 py-2" style={{ backgroundColor: '#c5c5c5' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button 
              onClick={onMenuToggle}
              className="md:hidden p-1 hover:bg-gray-300 rounded"
            >
              <Menu className="w-5 h-5 text-black" />
            </button>

            {/* Logo */}
            <div
              onClick={() => navigate('/')}
              className="cursor-pointer w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00695C, #26A69A)' }}
            >
              <img 
                src="/logo.png" 
                alt="Eliteinova Properties Logo" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="cursor-pointer" onClick={() => navigate('/')}>
              <h1
                className="text-base md:text-xl font-bold leading-none"
                style={{
                  fontFamily: 'Pacifico, cursive',
                  background: 'linear-gradient(135deg, #00695C, #26A69A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Eliteinova Properties
              </h1>
              <p className="text-[10px] md:text-xs text-black">No Brokerage</p>
            </div>
          </div>

          <button className="w-8 h-8 md:w-9 md:h-9 bg-white border border-black rounded-full flex items-center justify-center hover:bg-gray-50">
            <User className="w-4 h-4 md:w-5 md:h-5 text-black" />
          </button>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <nav className="w-full hidden md:block" style={{ background: 'linear-gradient(90deg, #00695C, #26A69A)' }}>
        <div className="flex items-center">
          {/* Home */}
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 text-white font-semibold text-sm hover:bg-black hover:bg-opacity-20"
          >
            Home
          </button>

          {/* Customer Portal */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('customer')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 text-white font-semibold text-sm hover:bg-black hover:bg-opacity-20 flex items-center gap-1">
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
                      {submenu.map(item => (
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

          {/* Post Your Property */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('post')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => navigate('/post-property')}
              className="px-4 py-2 text-white font-semibold text-sm hover:bg-black hover:bg-opacity-20 flex items-center gap-1"
            >
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
                      {submenu.map(item => (
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

          {/* Find Loan */}
          <button className="px-4 py-2 text-white font-semibold text-sm hover:bg-black hover:bg-opacity-20 flex items-center gap-1">
            Find Your Loan
            <ChevronDown className="w-3 h-3" />
          </button>

          {/* Services */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 text-white font-semibold text-sm hover:bg-black hover:bg-opacity-20 flex items-center gap-1">
              Services
              <ChevronDown className="w-3 h-3" />
            </button>

            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 shadow-lg z-50 min-w-[140px]" style={{ backgroundColor: '#e5e5e5' }}>
                {servicesMenu.map(item => (
                  <button key={item} className="w-full px-3 py-1.5 text-left text-black hover:bg-gray-300 font-semibold text-xs">
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
