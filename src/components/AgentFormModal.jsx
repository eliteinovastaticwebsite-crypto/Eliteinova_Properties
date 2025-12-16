import React, { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";

const steps = [
  "Agent Details",
  "Authorization Details",
  "Property Details",
  "Pricing & Commission",
  "Documents To Upload",
];

export default function AgentFormModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg flex flex-col max-h-[95vh] sm:max-h-[90vh]">

        {/* Top Bar */}
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 border-b shrink-0 bg-gray-50">
          <button onClick={onClose} className="shrink-0">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <h2 className="font-bold text-sm sm:text-base truncate">
            Property Registration Form For Agent
          </h2>
        </div>

        {/* Steps */}
        <div className="flex items-start justify-between px-2 sm:px-4 py-3 sm:py-4 shrink-0 overflow-x-auto border-b">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center min-w-[60px] sm:min-w-0 relative">
              {i > 0 && (
                <div 
                  className={`absolute left-0 top-3 sm:top-3.5 w-full h-[2px] -z-10 ${
                    i <= step ? "bg-[#00695C]" : "bg-gray-300"
                  }`}
                  style={{ width: "calc(100% - 30px)", marginLeft: "-50%" }}
                />
              )}
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm flex items-center justify-center font-bold z-10 ${
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

          {/* STEP 1 - Agent Details */}
          {step === 0 && (
            <>
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Agent Name" 
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Registration/License No (if applicable)" 
              />
              
              <div>
                <p className="text-sm sm:text-base font-semibold text-[#00695C] mb-2">Property Type:</p>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C] text-gray-600">
                  <option>Select Property Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                </select>
              </div>

              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Office Address" 
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Contact Person Name" 
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Phone Number" 
                type="tel"
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Email" 
                type="email"
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="GST/PAN No (if applicable)" 
              />
            </>
          )}

          {/* STEP 2 - Authorization Details */}
          {step === 1 && (
            <>
              <h3 className="text-[#00695C] font-bold text-base sm:text-lg">Authorization Details</h3>

              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Property Owner/Building Name" 
              />

              <div>
                <p className="text-sm sm:text-base font-semibold text-[#00695C] mb-3">Property Type:</p>
                <div className="space-y-3">
                  {["Residential", "Commercial", "PG/Hostel", "Mixed Use"].map(type => (
                    <label key={type} className="flex items-center gap-3 text-sm sm:text-base">
                      <input 
                        type="radio" 
                        name="property-type" 
                        className="w-5 h-5 text-[#00695C] border-gray-300"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-base font-semibold text-[#00695C] mb-3">Authorization Status:</p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input 
                      type="radio" 
                      name="auth-status" 
                      className="w-5 h-5 text-[#00695C] border-gray-300"
                    />
                    <span>Pending</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input 
                      type="radio" 
                      name="auth-status" 
                      className="w-5 h-5 text-[#00695C] border-gray-300"
                    />
                    <span>Verified</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-base font-semibold text-[#00695C] mb-2">Agreement/Authorization Letter:</p>
                <p className="text-sm font-semibold text-[#00695C] mb-3">Upload Agreement/Authorization Letter</p>
                <div className="border-2 border-dashed border-[#00695C] rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.jpeg,.png" 
                    className="hidden" 
                    id="auth-letter"
                  />
                  <label htmlFor="auth-letter" className="cursor-pointer flex flex-col items-center">
                    <Upload className="w-8 h-8 text-[#00695C] mb-2" />
                    <span className="text-sm font-medium text-[#00695C]">Upload Upload Agreement/Authorization Letter</span>
                    <span className="text-xs text-gray-500 mt-1">Upload signed agreement document</span>
                  </label>
                </div>
              </div>
            </>
          )}

          {/* STEP 3 - Property Details */}
          {step === 2 && (
            <>
              <h3 className="text-[#00695C] font-bold text-base sm:text-lg">Property Details</h3>

              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Property/Project Name" 
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Property Address/Location" 
              />
              
              <div className="grid grid-cols-2 gap-3">
                <input 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                  placeholder="City" 
                />
                <input 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                  placeholder="Pincode" 
                />
              </div>

              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Total Area (sq/acre)" 
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Unit/Room Details (if applicable)" 
              />

              <div>
                <p className="text-sm sm:text-base font-semibold text-[#00695C] mb-3">Configuration:</p>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {["1 BHK", "2 BHK", "3 BHK"].map(config => (
                    <label key={config} className="flex items-center gap-2 text-sm">
                      <input 
                        type="radio" 
                        name="config" 
                        className="w-4 h-4 text-[#00695C]"
                      />
                      <span>{config}</span>
                    </label>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["4 BHK", "Other"].map(config => (
                    <label key={config} className="flex items-center gap-2 text-sm">
                      <input 
                        type="radio" 
                        name="config" 
                        className="w-4 h-4 text-[#00695C]"
                      />
                      <span>{config}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-base font-semibold text-[#00695C] mb-3">Furnishing Status:</p>
                <div className="space-y-3">
                  {["Full Furnished", "Semi Furnished", "Unfurnished"].map(status => (
                    <label key={status} className="flex items-center gap-3 text-sm sm:text-base">
                      <input 
                        type="radio" 
                        name="furnishing" 
                        className="w-5 h-5 text-[#00695C]"
                      />
                      <span>{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-base font-semibold text-[#00695C] mb-3">Project Status:</p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input 
                      type="radio" 
                      name="project-status" 
                      className="w-5 h-5 text-[#00695C]"
                    />
                    <span>Ready to Move</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input 
                      type="radio" 
                      name="project-status" 
                      className="w-5 h-5 text-[#00695C]"
                    />
                    <span>Under Construction</span>
                  </label>
                </div>
              </div>
            </>
          )}

          {/* STEP 4 - Pricing & Commission */}
          {step === 3 && (
            <>
              <h3 className="text-[#00695C] font-bold text-base sm:text-lg">Pricing & Commission Details</h3>

              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Expected Price (Sale/Rent)" 
              />

              <div>
                <p className="text-sm sm:text-base font-semibold text-[#00695C] mb-3">Price Type:</p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input 
                      type="radio" 
                      name="price-type" 
                      className="w-5 h-5 text-[#00695C]"
                    />
                    <span>Fixed</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input 
                      type="radio" 
                      name="price-type" 
                      className="w-5 h-5 text-[#00695C]"
                    />
                    <span>Negotiable</span>
                  </label>
                </div>
              </div>

              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Commission" 
              />
              <input 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[#00695C]" 
                placeholder="Security Deposit (if rental)" 
              />

              <div>
                <p className="text-sm sm:text-base font-semibold text-[#00695C] mb-3">Amenities:</p>
                <div className="flex flex-wrap gap-2">
                  {["Lift", "Power Backup", "Security", "Water Supply", "Park", "Gym", "Swimming Pool", "Parking", "Children Play Area", "Other"].map(amenity => (
                    <button 
                      key={amenity}
                      className="px-3 py-1.5 border-2 border-[#00695C] text-[#00695C] rounded-full text-xs sm:text-sm font-medium hover:bg-[#00695C] hover:text-white transition-colors"
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
              <h3 className="text-[#00695C] font-bold text-center text-base sm:text-lg">Document Upload</h3>
              <p className="text-xs sm:text-sm text-gray-500 text-center">Upload required documents for verification</p>

              <div>
                <p className="text-sm sm:text-base font-semibold text-[#00695C] mb-3">Agent License/Registration Proof</p>
                <div className="border-2 border-dashed border-[#00695C] rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.jpeg,.png" 
                    className="hidden" 
                    id="agent-license"
                  />
                  <label htmlFor="agent-license" className="cursor-pointer flex flex-col items-center">
                    <Upload className="w-8 h-8 text-[#00695C] mb-2" />
                    <span className="text-sm font-medium text-[#00695C]">Upload Agent License/Registration Proof</span>
                    <span className="text-xs text-gray-500 mt-1">Upload agent license or registration document</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-sm sm:text-base font-semibold text-[#00695C] mb-3">Authorization/Agreement from Owner/Builder</p>
                <div className="border-2 border-dashed border-[#00695C] rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.jpeg,.png" 
                    className="hidden" 
                    id="owner-authorization"
                  />
                  <label htmlFor="owner-authorization" className="cursor-pointer flex flex-col items-center">
                    <Upload className="w-8 h-8 text-[#00695C] mb-2" />
                    <span className="text-sm font-medium text-[#00695C]">Upload Authorization/Agreement from Owner/Builder</span>
                    <span className="text-xs text-gray-500 mt-1">Upload signed authorization agreement</span>
                  </label>
                </div>
              </div>
            </>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex gap-3 p-4 sm:p-5 border-t bg-white shrink-0">
          {step > 0 && (
            <button 
              className="flex-1 px-4 py-3 border-2 border-[#00695C] text-[#00695C] rounded-full text-sm sm:text-base font-semibold hover:bg-gray-50"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          <button
            className="flex-1 px-4 py-3 bg-[#00695C] text-white rounded-full text-sm sm:text-base font-semibold hover:bg-[#005549]"
            onClick={() => (step === 4 ? onClose() : setStep(step + 1))}
          >
            {step === 4 ? "Submit" : "Continue"}
          </button>
        </div>

      </div>
    </div>
  );
}