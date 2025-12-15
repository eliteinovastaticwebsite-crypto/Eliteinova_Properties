import React, { useState } from "react";
import { User, Menu, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = ({ onMenuToggle, onPostPropertyClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const customerPortalMenu = {
    rent: ["Individual", "Apartment", "Commercial", "Land & Plot", "Hostel"],
    buy: ["Individual", "Apartment", "Commercial", "Land & Plot", "Hostel"],
    lease: ["Individual", "Apartment", "Commercial", "Land & Plot", "Hostel"],
  };

  const postPropertyMenu = [
    "Owner",
    "Dealer",
    "Builder",
    "Hostel",
    "Property Management",
  ];

  const handlePostSubmenuClick = (item) => {
    setActiveDropdown(null);
    if (item === "Owner") {
      onPostPropertyClick?.("Owner");
    } else {
      navigate("/post-property");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* ================= TOP BAR (48px) ================= */}
      <div className="h-12 w-full bg-[#c5c5c5] px-3 md:px-4 flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* LEFT */}
          <div className="flex items-center gap-2">
            <button
              onClick={onMenuToggle}
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
                className="text-lg font-bold leading-none"
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
          <button className="w-9 h-9 bg-white border border-black rounded-full flex items-center justify-center">
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
              <div className="absolute top-full left-0 bg-gray-200 shadow-lg z-50 min-w-[160px]">
                {Object.entries(customerPortalMenu).map(([key, submenu]) => (
                  <div key={key} className="relative group">
                    <button className="w-full px-3 py-2 text-left capitalize text-xs font-semibold hover:bg-gray-300">
                      {key}
                    </button>
                    <div className="absolute left-full top-0 hidden group-hover:block bg-gray-400 min-w-[160px]">
                      {submenu.map((item) => (
                        <button
                          key={item}
                          className="w-full px-3 py-2 text-left text-xs hover:bg-gray-500"
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
              <div className="absolute top-full left-0 bg-gray-200 shadow-lg z-50 min-w-[200px]">
                {postPropertyMenu.map((item) => (
                  <button
                    key={item}
                    onClick={() => handlePostSubmenuClick(item)}
                    className="w-full px-3 py-2 text-left text-xs font-semibold hover:bg-gray-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="px-4 h-12 text-white font-semibold text-sm hover:bg-black/20">
            Find Your Loan
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

