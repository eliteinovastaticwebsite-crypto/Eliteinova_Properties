import React, { useState } from "react";
import { User, Menu, ChevronDown, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

const Header = ({ onPostPropertyClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const customerPortalMenu = {
    Individual: ["Rent", "Buy", "Lease", "Sell"],
    Apartment: ["Rent", "Buy", "Lease", "Sell"],
    Commercial: ["Rent", "Buy", "Lease", "Sell"],
    LandAndPlots: ["Rent", "Buy", "Lease", "Sell"],
    Hostel: ["Rent", "Buy", "Lease", "Sell"],
  };

  const postPropertyMenu = [
    "Owner",
    "Agent",
    "Builder",
    "Hostel",
    "Property Management",
  ];

  const loanMenu = [
    "Home Loan",
    "Property Loan",
    "Construction Loan",
    "Plot Loan",
    "Commercial Loan"
  ];

  const servicesMenu = [
    "Construction",
    "Interior",
    "Painting",
    "Plumbing",
    "Cleaning"
  ];

  const handlePostSubmenuClick = (item) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    
    console.log("Submenu clicked:", item);
    
    if (onPostPropertyClick) {
      onPostPropertyClick(item);
    }
  };

  const handleCustomerPortalClick = (type) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    
    const typeKey = type.toLowerCase();
    
    if (typeKey === "individual") {
      navigate("/individual");
    } else if (typeKey === "rent") {
      navigate("/rent");
    } else if (typeKey === "buy") {
      navigate("/buy");
    } else if (typeKey === "lease") {
      navigate("/lease");
    } else if (typeKey === "apartment") {
      navigate("/apartment");
    } else if (typeKey === "commercial") {
      navigate("/commercial");
    } else if (typeKey === "landandplots") {
      navigate("/land-plots");
    } else if (typeKey === "hostel") {
      navigate("/hostel");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
        {/* ================= TOP BAR ================= */}
        {/* Increased height for better visibility */}
        <div className="h-16 md:h-20 w-full bg-[#c5c5c5] px-4 md:px-6 flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* LEFT */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-1.5 hover:bg-gray-300 rounded"
              >
                <Menu className="w-6 h-6 text-black" />
              </button>

              <div
                onClick={() => navigate("/")}
                className="cursor-pointer w-11 h-11 md:w-14 md:h-14 rounded-full overflow-hidden flex items-center justify-center bg-white"
              >
                <img
                  src={logo}
                  alt="Eliteinova Properties Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div onClick={() => navigate("/")} className="cursor-pointer">
                {/* Significantly increased heading size */}
                <h1
                  className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight"
                  style={{
                    fontFamily: "Pacifico, cursive",
                    color: "#00695C",
                  }}
                >
                  Eliteinova Properties
                </h1>
                {/* Increased subheading size proportionally */}
                <p 
                  className="text-sm md:text-base lg:text-lg font-normal leading-tight mt-0.5"
                  style={{
                    fontFamily: "Pacifico, cursive",
                    color: "#00695C",
                  }}
                >
                  No Brokerage
                </p>
              </div>
            </div>

            {/* RIGHT - Increased user icon size */}
            <button className="w-10 h-10 md:w-11 md:h-11 bg-white border border-black rounded-full flex items-center justify-center hover:bg-gray-50">
              <User className="w-6 h-6 md:w-7 md:h-7 text-black" />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        {/* Increased navigation bar height slightly */}
        <nav className="hidden md:flex h-14 items-center bg-gradient-to-r from-[#00695C] to-[#26A69A]">
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="px-5 h-14 text-white font-semibold text-base hover:bg-black/20"
            >
              Home
            </button>

            {/* Customer Portal */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("customer")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => navigate("/customer-portal")}
                className="px-5 h-14 text-white font-semibold text-base hover:bg-black/20 flex items-center gap-1"
              >
                Customer Portal <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "customer" && (
                <div className="absolute top-full left-0 bg-white shadow-lg z-50 min-w-[160px] rounded-md overflow-visible">
                  {Object.entries(customerPortalMenu).map(([key, submenu]) => (
                    <div key={key} className="relative group">
                      <button 
                        onClick={() => handleCustomerPortalClick(key)}
                        className="w-full px-4 py-3 text-left capitalize text-sm font-semibold text-black hover:bg-gray-100"
                      >
                        {key}
                      </button>
                      <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg min-w-[140px] rounded-md z-50">
                        {submenu.map((item) => (
                          <button
                            key={item}
                            onClick={() => handleCustomerPortalClick(item.toLowerCase())}
                            className="w-full px-4 py-2.5 text-left text-sm text-black hover:bg-gray-100"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Post Property */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("post")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => navigate("/post-property")}
                className="px-5 h-14 text-white font-semibold text-base hover:bg-black/20 flex items-center gap-1"
              >
                Post Your Property <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "post" && (
                <div className="absolute top-full left-0 bg-white shadow-lg z-50 min-w-[220px] rounded-md">
                  {postPropertyMenu.map((item) => (
                    <button
                      key={item}
                      onClick={() => handlePostSubmenuClick(item)}
                      className="w-full px-4 py-3 text-left text-sm font-semibold text-black hover:bg-gray-100"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Find Your Loan */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("loan")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-5 h-14 text-white font-semibold text-base hover:bg-black/20 flex items-center gap-1">
                Find Your Loan <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "loan" && (
                <div className="absolute top-full left-0 bg-white shadow-lg z-50 min-w-[180px] rounded-md">
                  {loanMenu.map((item) => (
                    <button
                      key={item}
                      className="w-full px-4 py-3 text-left text-sm font-semibold text-black hover:bg-gray-100"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-5 h-14 text-white font-semibold text-base hover:bg-black/20 flex items-center gap-1">
                Services <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 bg-white shadow-lg z-50 min-w-[160px] rounded-md">
                  {servicesMenu.map((item) => (
                    <button
                      key={item}
                      className="w-full px-4 py-3 text-left text-sm font-semibold text-black hover:bg-gray-100"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50" 
          onClick={toggleMobileMenu}
        >
          <div 
            className="bg-white w-72 h-full overflow-y-auto" 
            style={{ background: 'linear-gradient(180deg, #00695C, #26A69A)' }} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-white border-opacity-20">
              <h2 className="text-white font-bold text-xl">Menu</h2>
              <button onClick={toggleMobileMenu} className="text-white">
                <X className="w-7 h-7" />
              </button>
            </div>
            
            <div className="p-5">
              <button 
                onClick={() => {
                  navigate('/');
                  toggleMobileMenu();
                }}
                className="w-full text-left text-white font-semibold py-4 border-b border-white border-opacity-20 text-lg"
              >
                Home
              </button>
              
              <details className="border-b border-white border-opacity-20">
                <summary className="text-white font-semibold py-4 cursor-pointer list-none text-lg">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/customer-portal");
                        toggleMobileMenu();
                      }}
                      className="text-left flex-1"
                    >
                      Customer Portal
                    </button>
                    <ChevronDown className="w-5 h-5 pointer-events-none" />
                  </div>
                </summary>
                <div className="pl-5 pb-3">
                  {Object.entries(customerPortalMenu).map(([key, submenu]) => (
                    <details key={key} className="mb-3">
                      <summary className="text-white text-base py-3 capitalize cursor-pointer list-none">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleCustomerPortalClick(key);
                            }}
                            className="text-left flex-1"
                          >
                            {key}
                          </button>
                          <ChevronDown className="w-4 h-4 pointer-events-none" />
                        </div>
                      </summary>
                      <div className="pl-5">
                        {submenu.map((item) => (
                          <button 
                            key={item} 
                            className="block text-white text-sm py-2.5 w-full text-left hover:bg-white hover:bg-opacity-10"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </details>
              
              <details className="border-b border-white border-opacity-20">
                <summary className="text-white font-semibold py-4 cursor-pointer list-none text-lg">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/post-property");
                        toggleMobileMenu();
                      }}
                      className="text-left flex-1"
                    >
                      Post Your Property
                    </button>
                    <ChevronDown className="w-5 h-5 pointer-events-none" />
                  </div>
                </summary>
                <div className="pl-5 pb-3">
                  {postPropertyMenu.map((item) => (
                    <button
                      key={item}
                      onClick={() => handlePostSubmenuClick(item)}
                      className="block text-white text-base py-3 w-full text-left hover:bg-white hover:bg-opacity-10"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </details>

              <details className="border-b border-white border-opacity-20">
                <summary className="text-white font-semibold py-4 cursor-pointer list-none text-lg">
                  <span className="flex items-center justify-between">
                    Find Your Loan
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="pl-5 pb-3">
                  {loanMenu.map((item) => (
                    <button 
                      key={item} 
                      className="block text-white text-base py-3 w-full text-left hover:bg-white hover:bg-opacity-10"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </details>
              
              <details className="border-b border-white border-opacity-20">
                <summary className="text-white font-semibold py-4 cursor-pointer list-none text-lg">
                  <span className="flex items-center justify-between">
                    Services
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="pl-5 pb-3">
                  {servicesMenu.map((item) => (
                    <button 
                      key={item} 
                      className="block text-white text-base py-3 w-full text-left hover:bg-white hover:bg-opacity-10"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;