import React, { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";

const steps = [
  "Builder Information",
  "Property Details",
  "Approval & Legal Details",
  "Pricing & Payment",
  "Documents To Upload",
];

export default function BuilderFormModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleClose = () => {
    setStep(0);
    setSelectedAmenities([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-0">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg flex flex-col max-h-[95vh] sm:max-h-[90vh] overflow-hidden">

        
        {/* Header with Back Button */}
        <div className="flex items-center px-4 py-4 border-b shrink-0 bg-gray-50">
          <button onClick={handleClose} className="p-1 -ml-1">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-base sm:text-lg font-bold ml-3 flex-1 truncate">Property Registration Form For Builder</h2>
        </div>

        {/* Steps Indicator */}
        <div className="flex items-start justify-between px-3 sm:px-4 py-4 shrink-0 overflow-x-auto border-b">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center min-w-[60px] sm:min-w-0 relative">
              {i > 0 && (
                <div 
                  className={`absolute left-0 top-[14px] sm:top-[15px] h-[2px] -z-10 ${
                    i <= step ? "bg-[#00695C]" : "bg-gray-300"
                  }`}
                  style={{ width: "calc(100% - 28px)", marginLeft: "-50%", transform: "translateX(0px)" }}
                />
              )}
              <div
                className={`w-7 h-7 sm:w-[30px] sm:h-[30px] rounded-full text-xs sm:text-sm flex items-center justify-center font-bold z-10 ${
                  i <= step
                    ? "bg-[#00695C] text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {i + 1}
              </div>
              <p
                className={`text-[9px] sm:text-[10px] mt-1.5 px-1 text-center leading-tight ${
                  i <= step
                    ? "text-[#00695C] font-semibold"
                    : "text-gray-400"
                }`}
              >
                {s}
              </p>
            </div>
          ))}
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="px-4 sm:px-5 py-4 sm:py-5 space-y-4 overflow-y-auto flex-1">

          {/* STEP 1 - Builder Information */}
          {step === 0 && (
            <>
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Builder/Developer Name" 
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Company/Firm Name" 
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="RERA Registration No (if applicable)" 
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Office Address" 
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Authorized Contact Person Name" 
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Phone Number" 
                type="tel"
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Email" 
                type="email"
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Website (if applicable)" 
              />
            </>
          )}

          {/* STEP 2 - Property Details */}
          {step === 1 && (
            <>
              <h3 className="text-[#00695C] font-bold text-lg sm:text-xl">Property Details</h3>

              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Project Name" 
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Project Location/Address" 
              />
              
              <div className="grid grid-cols-2 gap-3">
                <input 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                  placeholder="City" 
                />
                <input 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                  placeholder="Pincode" 
                />
              </div>

              <div>
                <p className="text-sm sm:text-base font-bold text-[#00695C] mb-2">Property Type:</p>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent text-gray-600">
                  <option>Select Property Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Mixed Use</option>
                </select>
              </div>

              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Total Area (sq/acre)" 
              />

              <div className="grid grid-cols-2 gap-3">
                <input 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                  placeholder="No of Units" 
                />
                <input 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                  placeholder="Units Range (sq.ft)" 
                />
              </div>

              <div>
                <p className="text-sm sm:text-base font-bold text-[#00695C] mb-3">Configuration:</p>
                <div className="space-y-3">
                  <div className="flex gap-6">
                    {["1 BHK", "2 BHK", "3 BHK"].map(config => (
                      <label key={config} className="flex items-center gap-2 text-sm sm:text-base">
                        <input 
                          type="radio" 
                          name="config" 
                          className="w-5 h-5 accent-[#00695C]"
                        />
                        <span>{config}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {["4 BHK", "Other"].map(config => (
                      <label key={config} className="flex items-center gap-2 text-sm sm:text-base">
                        <input 
                          type="radio" 
                          name="config" 
                          className="w-5 h-5 accent-[#00695C]"
                        />
                        <span>{config}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-base font-bold text-[#00695C] mb-3">Furnishing Status:</p>
                <div className="space-y-3">
                  {["Full Furnished", "Semi Furnished", "Unfurnished"].map(status => (
                    <label key={status} className="flex items-center gap-3 text-sm sm:text-base">
                      <input 
                        type="radio" 
                        name="furnishing" 
                        className="w-5 h-5 accent-[#00695C]"
                      />
                      <span>{status}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* STEP 3 - Approval & Legal Details */}
          {step === 2 && (
            <>
              <h3 className="text-[#00695C] font-bold text-lg sm:text-xl">Approval & Legal Details</h3>

              <div>
                <p className="text-sm sm:text-base font-bold text-[#00695C] mb-3">Ownership Type:</p>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input 
                      type="radio" 
                      name="ownership" 
                      className="w-5 h-5 accent-[#00695C]"
                    />
                    <span>Free Hold</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input 
                      type="radio" 
                      name="ownership" 
                      className="w-5 h-5 accent-[#00695C]"
                    />
                    <span>Lease Hold</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-base font-bold text-[#00695C] mb-3">RERA/Govt Approval Status:</p>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input 
                      type="radio" 
                      name="approval" 
                      className="w-5 h-5 accent-[#00695C]"
                    />
                    <span>Approved</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input 
                      type="radio" 
                      name="approval" 
                      className="w-5 h-5 accent-[#00695C]"
                    />
                    <span>In Progress</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-base font-bold text-[#00695C] mb-3">Project Status:</p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm sm:text-base whitespace-nowrap">
                    <input 
                      type="radio" 
                      name="project-status" 
                      className="w-5 h-5 accent-[#00695C]"
                    />
                    <span>Ready to Move</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm sm:text-base whitespace-nowrap">
                    <input 
                      type="radio" 
                      name="project-status" 
                      className="w-5 h-5 accent-[#00695C]"
                    />
                    <span>Under Construction</span>
                  </label>
                </div>
              </div>

              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Expected Completion Date" 
                type="text"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
              />
            </>
          )}

          {/* STEP 4 - Pricing & Payment */}
          {step === 3 && (
            <>
              <h3 className="text-[#00695C] font-bold text-lg sm:text-xl">Pricing & Payment Details</h3>

              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Price Range (per unit/per sq.ft)" 
              />

              <div>
                <p className="text-sm sm:text-base font-bold text-[#00695C] mb-2">Payment Plan:</p>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent text-gray-600">
                  <option>Select Payment Plan</option>
                  <option>Construction Linked</option>
                  <option>Time Linked</option>
                  <option>Down Payment</option>
                  <option>Flexible</option>
                </select>
              </div>

              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:border-transparent" 
                placeholder="Booking Amount" 
              />

              <div>
                <p className="text-sm sm:text-base font-bold text-[#00695C] mb-3">Amenities:</p>
                <div className="flex flex-wrap gap-2">
                  {["Lift", "Power Backup", "Security", "Water Supply", "Park", "Gym", "Swimming Pool", "Parking", "Children Play Area", "Other"].map(amenity => (
                    <button 
                      key={amenity}
                      onClick={() => toggleAmenity(amenity)}
                      className={`px-3 py-2 border-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                        selectedAmenities.includes(amenity)
                          ? "bg-[#00695C] text-white border-[#00695C]"
                          : "border-[#00695C] text-[#00695C] hover:bg-[#00695C] hover:text-white"
                      }`}
                    >
                      {amenity}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* STEP 5 - Documents Upload */}
          {step === 4 && (
            <>
              <h3 className="text-[#00695C] font-bold text-center text-lg sm:text-xl">Document Upload</h3>
              <p className="text-xs sm:text-sm text-gray-500 text-center -mt-2">Upload required documents for verification</p>

              <div>
                <p className="text-sm sm:text-base font-bold text-[#00695C] mb-3">RERA Registration Certificate</p>
                <div className="border-2 border-dashed border-[#00695C] rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.jpeg,.png" 
                    className="hidden" 
                    id="rera-cert"
                  />
                  <label htmlFor="rera-cert" className="cursor-pointer flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#00695C] flex items-center justify-center mb-3">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-[#00695C]">Upload RERA Registration Certificate</span>
                    <span className="text-xs text-gray-500 mt-1">Upload RERA registration document</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-base font-bold text-[#00695C] mb-3">Property Layout/Floor Plan</p>
                <div className="border-2 border-dashed border-[#00695C] rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.jpeg,.png" 
                    multiple
                    className="hidden" 
                    id="floor-plan"
                  />
                  <label htmlFor="floor-plan" className="cursor-pointer flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#00695C] flex items-center justify-center mb-3">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-[#00695C]">Upload Property Layout/Floor Plan</span>
                    <span className="text-xs text-gray-500 mt-1">Upload property layout or floor plan</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-base font-bold text-[#00695C] mb-3">Builder ID Proof/Company Registration</p>
                <div className="border-2 border-dashed border-[#00695C] rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.jpeg,.png" 
                    className="hidden" 
                    id="builder-id"
                  />
                  <label htmlFor="builder-id" className="cursor-pointer flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#00695C] flex items-center justify-center mb-3">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-[#00695C]">Upload Builder ID Proof/Company Registration</span>
                    <span className="text-xs text-gray-500 mt-1">Upload builder ID or company registration</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-base font-bold text-[#00695C] mb-3">Project Brochure/Images</p>
                <div className="border-2 border-dashed border-[#00695C] rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.jpeg,.png" 
                    multiple
                    className="hidden" 
                    id="brochure"
                  />
                  <label htmlFor="brochure" className="cursor-pointer flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#00695C] flex items-center justify-center mb-3">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-[#00695C]">Upload Project Brochure/Images</span>
                    <span className="text-xs text-gray-500 mt-1">Upload project brochure or images</span>
                  </label>
                </div>
              </div>
            </>
          )}
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex gap-3 p-4 sm:p-5 border-t bg-white shrink-0">
          {step > 0 && (
            <button 
              className="flex-1 px-4 py-3 border-2 border-[#00695C] text-[#00695C] rounded-full text-sm sm:text-base font-semibold hover:bg-gray-50 transition-colors"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          <button
            className="flex-1 px-4 py-3 bg-[#00695C] text-white rounded-full text-sm sm:text-base font-semibold hover:bg-[#005549] transition-colors"
            onClick={() => {
              if (step === 4) {
                alert('Form submitted successfully!');
                handleClose();
              } else {
                setStep(step + 1);
              }
            }}
          >
            {step === 4 ? "Submit" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}