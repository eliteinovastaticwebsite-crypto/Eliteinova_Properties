import React, { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

const IndividualPage = () => {
  const [activeButton, setActiveButton] = useState("Rent");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const propertyCategories = [
    { name: "Apartment", path: "/apartment" },
    { name: "Commercial", path: "/commercial" },
    { name: "Land & Plots", path: "/land-plots" },
    { name: "Hostel", path: "/hostel" }
  ];

  const houseTypes = [
    "Independent Villa",
    "Independent House",
    "Residential Apartment",
    "Duplex Residential Unit",
    "Row House"
  ];

  const handleNavigation = (path) => {
    console.log(`Navigating to ${path}`);
    // In your actual app, use: navigate(path);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section
        className="w-full h-[300px] md:h-[400px] px-4 bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80)`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="max-w-6xl mx-auto relative z-10 text-center w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5 drop-shadow-2xl">
            Find Your Perfect Individual Property
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 drop-shadow-xl">
            Browse through our verified individual properties
          </p>

          {/* Property Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
            {propertyCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleNavigation(category.path)}
                className="px-6 md:px-8 py-2.5 md:py-3 rounded-full text-white font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00695C, #26A69A)",
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Filter Section */}
      <div className="bg-white shadow-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-3">
            {/* First Row - Rent Dropdown and Search */}
            <div className="flex gap-2 items-center">
              {/* Buy/Rent/Lease Toggle Dropdown */}
              <div className="relative flex-shrink-0">
                <button
                  onClick={() => setOpenDropdown(openDropdown === "toggle" ? null : "toggle")}
                  className="px-3 py-2 rounded-full text-white font-semibold text-xs flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #00695C, #26A69A)",
                  }}
                >
                  {activeButton}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {openDropdown === "toggle" && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg overflow-hidden z-50 min-w-[120px] border border-gray-100">
                    <button
                      onClick={() => {
                        handleNavigation("/buy");
                        setActiveButton("Buy");
                        setOpenDropdown(null);
                      }}
                      className="w-full px-3 py-2 text-left text-xs hover:bg-teal-50 transition-colors text-gray-700 font-medium"
                    >
                      Buy
                    </button>
                    <div className="h-px bg-gray-100"></div>
                    <button
                      onClick={() => {
                        handleNavigation("/rent");
                        setActiveButton("Rent");
                        setOpenDropdown(null);
                      }}
                      className="w-full px-3 py-2 text-left text-xs font-semibold transition-colors"
                      style={{ color: "#00695C", backgroundColor: "#e0f2f1" }}
                    >
                      Rent
                    </button>
                    <div className="h-px bg-gray-100"></div>
                    <button
                      onClick={() => {
                        handleNavigation("/lease");
                        setActiveButton("Lease");
                        setOpenDropdown(null);
                      }}
                      className="w-full px-3 py-2 text-left text-xs hover:bg-teal-50 transition-colors text-gray-700 font-medium"
                    >
                      Lease
                    </button>
                  </div>
                )}
              </div>

              {/* Search Input */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Enter city, localities"
                  className="w-full px-3 py-2 rounded-full border border-gray-200 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent shadow-sm text-gray-700 placeholder-gray-500"
                />
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="px-3 py-2 rounded-full text-white font-semibold text-xs flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #00695C, #26A69A)",
                }}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Filter</span>
              </button>
            </div>

            {/* Second Row - House Type Buttons */}
            <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-hide -mx-4 px-4">
              {houseTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleNavigation(`/individual/${type.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="px-3 py-1.5 rounded-full text-white font-medium text-xs shadow-md hover:shadow-lg transition-all whitespace-nowrap flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #00695C, #26A69A)",
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block space-y-3">
            {/* First Row - Rent/Buy/Lease and Search */}
            <div className="flex gap-3 items-center">
              {/* Buy/Rent/Lease Toggle Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === "toggle" ? null : "toggle")}
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-full text-white font-semibold text-sm md:text-base flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                  style={{
                    background: "linear-gradient(135deg, #00695C, #26A69A)",
                  }}
                >
                  {activeButton}
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                {openDropdown === "toggle" && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg overflow-hidden z-50 min-w-[140px] md:min-w-[160px] border border-gray-100">
                    <button
                      onClick={() => {
                        handleNavigation("/buy");
                        setActiveButton("Buy");
                        setOpenDropdown(null);
                      }}
                      className="w-full px-4 md:px-5 py-2.5 md:py-3 text-left text-sm md:text-base hover:bg-teal-50 transition-colors text-gray-700 font-medium"
                    >
                      Buy
                    </button>
                    <div className="h-px bg-gray-100"></div>
                    <button
                      onClick={() => {
                        handleNavigation("/rent");
                        setActiveButton("Rent");
                        setOpenDropdown(null);
                      }}
                      className="w-full px-4 md:px-5 py-2.5 md:py-3 text-left text-sm md:text-base font-semibold transition-colors"
                      style={{ color: "#00695C", backgroundColor: "#e0f2f1" }}
                    >
                      Rent
                    </button>
                    <div className="h-px bg-gray-100"></div>
                    <button
                      onClick={() => {
                        handleNavigation("/lease");
                        setActiveButton("Lease");
                        setOpenDropdown(null);
                      }}
                      className="w-full px-4 md:px-5 py-2.5 md:py-3 text-left text-sm md:text-base hover:bg-teal-50 transition-colors text-gray-700 font-medium"
                    >
                      Lease
                    </button>
                  </div>
                )}
              </div>

              {/* Search Input */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Enter city, localities"
                  className="w-full px-4 md:px-5 py-2.5 md:py-3 rounded-full border-0 bg-gray-50 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] shadow-sm text-gray-700 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Second Row - House Type Buttons */}
            <div className="flex flex-wrap gap-3">
              {houseTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleNavigation(`/individual/${type.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="px-5 md:px-6 py-2.5 md:py-3 rounded-full text-white font-semibold text-sm md:text-base shadow-md hover:shadow-lg transition-all whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #00695C, #26A69A)",
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8">
        <div className="flex gap-4 lg:gap-6">
          {/* Left Side - Properties Listing */}
          <div className="flex-1 w-full lg:w-auto">
            <section>
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-12 text-center border border-gray-100">
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-5 md:mb-6 flex items-center justify-center shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #00695C, #26A69A)",
                  }}
                >
                  <span className="text-white text-3xl md:text-4xl">🏠</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Properties Coming Soon
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                  We're currently adding individual properties to our database. Check back soon!
                </p>
              </div>
            </section>
          </div>

          {/* Right Side - Fixed Filter Panel (Desktop Only) */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" style={{ color: "#00695C" }} />
                  Filters
                </h3>

                {/* Price Range */}
                <div className="mb-5">
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Price Range</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00695C]"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00695C]"
                    />
                  </div>
                </div>

                {/* BHK Type */}
                <div className="mb-5">
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">BHK Type</label>
                  <div className="space-y-2">
                    {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"].map((bhk) => (
                      <label key={bhk} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00695C] focus:ring-[#00695C]" />
                        <span className="text-sm text-gray-700">{bhk}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Property Status */}
                <div className="mb-5">
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Property Status</label>
                  <div className="space-y-2">
                    {["Ready to Move", "Under Construction", "New Launch"].map((status) => (
                      <label key={status} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00695C] focus:ring-[#00695C]" />
                        <span className="text-sm text-gray-700">{status}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Furnishing */}
                <div className="mb-5">
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Furnishing</label>
                  <div className="space-y-2">
                    {["Furnished", "Semi-Furnished", "Unfurnished"].map((furnish) => (
                      <label key={furnish} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00695C] focus:ring-[#00695C]" />
                        <span className="text-sm text-gray-700">{furnish}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-5">
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Amenities</label>
                  <div className="space-y-2">
                    {["Parking", "Lift", "Security", "Power Backup", "Gym", "Swimming Pool"].map((amenity) => (
                      <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00695C] focus:ring-[#00695C]" />
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t">
                  <button
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                    style={{
                      background: "linear-gradient(135deg, #00695C, #26A69A)",
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">Filters</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="p-4 space-y-5">
              {/* Price Range */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Price Range</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00695C]"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00695C]"
                  />
                </div>
              </div>

              {/* BHK Type */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">BHK Type</label>
                <div className="space-y-2">
                  {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"].map((bhk) => (
                    <label key={bhk} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00695C] focus:ring-[#00695C]" />
                      <span className="text-sm text-gray-700">{bhk}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Property Status */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Property Status</label>
                <div className="space-y-2">
                  {["Ready to Move", "Under Construction", "New Launch"].map((status) => (
                    <label key={status} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00695C] focus:ring-[#00695C]" />
                      <span className="text-sm text-gray-700">{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Furnishing */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Furnishing</label>
                <div className="space-y-2">
                  {["Furnished", "Semi-Furnished", "Unfurnished"].map((furnish) => (
                    <label key={furnish} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00695C] focus:ring-[#00695C]" />
                      <span className="text-sm text-gray-700">{furnish}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Amenities</label>
                <div className="space-y-2">
                  {["Parking", "Lift", "Security", "Power Backup", "Gym", "Swimming Pool"].map((amenity) => (
                    <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00695C] focus:ring-[#00695C]" />
                      <span className="text-sm text-gray-700">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                <button
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setShowMobileFilters(false)}
                >
                  Clear All
                </button>
                <button
                  className="flex-1 px-4 py-3 rounded-lg text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                  style={{
                    background: "linear-gradient(135deg, #00695C, #26A69A)",
                  }}
                  onClick={() => setShowMobileFilters(false)}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualPage;