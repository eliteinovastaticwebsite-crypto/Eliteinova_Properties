import React, { useState } from "react";
import { User, Menu, ChevronDown, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = ({ onPostPropertyClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const customerPortalMenu = {
    rent: ["Individual", "Apartment", "Commercial", "Land & Plot", "Hostel"],
    buy: ["Individual", "Apartment", "Commercial", "Land & Plot", "Hostel"],
    lease: ["Individual", "Apartment", "Commercial", "Land & Plot", "Hostel"],
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
    onPostPropertyClick?.(item);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
        {/* ================= TOP BAR (48px) ================= */}
        <div className="h-12 w-full bg-[#c5c5c5] px-3 md:px-4 flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* LEFT */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-1 hover:bg-gray-300 rounded"
              >
                <Menu className="w-5 h-5 text-black" />
              </button>

              <div
                onClick={() => navigate("/")}
                className="cursor-pointer w-9 h-9 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #00695C, #26A69A)",
                }}
              >
                <img src={logo} alt="Eliteinova Logo" className="w-full h-full" />
              </div>

              <div onClick={() => navigate("/")} className="cursor-pointer">
                <h1
                  className="text-base md:text-lg font-bold leading-none"
                  style={{
                    fontFamily: "Pacifico, cursive",
                    background: "linear-gradient(135deg, #00695C, #26A69A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Eliteinova Properties
                </h1>
                <p className="text-[10px] text-black">No Brokerage</p>
              </div>
            </div>

            {/* RIGHT */}
            <button className="w-9 h-9 bg-white border border-black rounded-full flex items-center justify-center hover:bg-gray-50">
              <User className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP NAV (48px) ================= */}
        <nav className="hidden md:flex h-12 items-center bg-gradient-to-r from-[#00695C] to-[#26A69A]">
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="px-4 h-12 text-white font-semibold text-sm hover:bg-black/20"
            >
              Home
            </button>

            {/* Customer Portal */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("customer")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 h-12 text-white font-semibold text-sm hover:bg-black/20 flex items-center gap-1">
                Customer Portal <ChevronDown className="w-3 h-3" />
              </button>

              {activeDropdown === "customer" && (
                <div className="absolute top-full left-0 bg-[#e5e5e5] shadow-lg z-50 min-w-[140px]">
                  {Object.entries(customerPortalMenu).map(([key, submenu]) => (
                    <div key={key} className="relative group">
                      <button className="w-full px-3 py-1.5 text-left capitalize text-xs font-semibold text-black hover:bg-gray-300">
                        {key}
                      </button>
                      <div className="absolute left-full top-0 hidden group-hover:block bg-[#9a9a9a] shadow-lg min-w-[140px]">
                        {submenu.map((item) => (
                          <button
                            key={item}
                            className="w-full px-3 py-1.5 text-left text-xs text-black hover:bg-gray-500"
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
                className="px-4 h-12 text-white font-semibold text-sm hover:bg-black/20 flex items-center gap-1"
              >
                Post Your Property <ChevronDown className="w-3 h-3" />
              </button>

              {activeDropdown === "post" && (
                <div className="absolute top-full left-0 bg-[#e5e5e5] shadow-lg z-50 min-w-[200px]">
                  {postPropertyMenu.map((item) => (
                    <button
                      key={item}
                      onClick={() => handlePostSubmenuClick(item)}
                      className="w-full px-3 py-1.5 text-left text-xs font-semibold text-black hover:bg-gray-300"
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
              <button className="px-4 h-12 text-white font-semibold text-sm hover:bg-black/20 flex items-center gap-1">
                Find Your Loan <ChevronDown className="w-3 h-3" />
              </button>

              {activeDropdown === "loan" && (
                <div className="absolute top-full left-0 bg-[#e5e5e5] shadow-lg z-50 min-w-[160px]">
                  {loanMenu.map((item) => (
                    <button
                      key={item}
                      className="w-full px-3 py-1.5 text-left text-xs font-semibold text-black hover:bg-gray-300"
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
              <button className="px-4 h-12 text-white font-semibold text-sm hover:bg-black/20 flex items-center gap-1">
                Services <ChevronDown className="w-3 h-3" />
              </button>

              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 bg-[#e5e5e5] shadow-lg z-50 min-w-[140px]">
                  {servicesMenu.map((item) => (
                    <button
                      key={item}
                      className="w-full px-3 py-1.5 text-left text-xs font-semibold text-black hover:bg-gray-300"
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
            className="bg-white w-64 h-full overflow-y-auto" 
            style={{ background: 'linear-gradient(180deg, #00695C, #26A69A)' }} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white border-opacity-20">
              <h2 className="text-white font-bold text-lg">Menu</h2>
              <button onClick={toggleMobileMenu} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-4">
              <button 
                onClick={() => {
                  navigate('/');
                  toggleMobileMenu();
                }}
                className="w-full text-left text-white font-semibold py-3 border-b border-white border-opacity-20"
              >
                Home
              </button>
              
              <details className="border-b border-white border-opacity-20">
                <summary className="text-white font-semibold py-3 cursor-pointer list-none">
                  <span className="flex items-center justify-between">
                    Customer Portal
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <div className="pl-4 pb-2">
                  {Object.entries(customerPortalMenu).map(([key, submenu]) => (
                    <details key={key} className="mb-2">
                      <summary className="text-white text-sm py-2 capitalize cursor-pointer list-none">
                        <span className="flex items-center justify-between">
                          {key}
                          <ChevronDown className="w-3 h-3" />
                        </span>
                      </summary>
                      <div className="pl-4">
                        {submenu.map((item) => (
                          <button 
                            key={item} 
                            className="block text-white text-xs py-1.5 w-full text-left hover:bg-white hover:bg-opacity-10"
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
                <summary 
                  className="text-white font-semibold py-3 cursor-pointer list-none"
                  onClick={(e) => {
                    const target = e.target;
                    if (target.closest('summary') && !target.closest('.chevron-icon')) {
                      e.preventDefault();
                      navigate("/post-property");
                      toggleMobileMenu();
                    }
                  }}
                >
                  <span className="flex items-center justify-between">
                    Post Your Property
                    <span className="chevron-icon" onClick={(e) => e.stopPropagation()}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </span>
                </summary>
                <div className="pl-4 pb-2">
                  {postPropertyMenu.map((item) => (
                    <button 
                      key={item} 
                      onClick={() => handlePostSubmenuClick(item)}
                      className="block text-white text-sm py-2 w-full text-left hover:bg-white hover:bg-opacity-10"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </details>
              
              <details className="border-b border-white border-opacity-20">
                <summary className="text-white font-semibold py-3 cursor-pointer list-none">
                  <span className="flex items-center justify-between">
                    Find Your Loan
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <div className="pl-4 pb-2">
                  {loanMenu.map((item) => (
                    <button 
                      key={item} 
                      className="block text-white text-sm py-2 w-full text-left hover:bg-white hover:bg-opacity-10"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </details>
              
              <details className="border-b border-white border-opacity-20">
                <summary className="text-white font-semibold py-3 cursor-pointer list-none">
                  <span className="flex items-center justify-between">
                    Services
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </summary>
                <div className="pl-4 pb-2">
                  {servicesMenu.map((item) => (
                    <button 
                      key={item} 
                      className="block text-white text-sm py-2 w-full text-left hover:bg-white hover:bg-opacity-10"
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