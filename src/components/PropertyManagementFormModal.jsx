import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const steps = [
  "Owner Details",
  "Property Details",
  "Pricing & Agreement",
  "Agent Details",
  "Documents To Upload",
];

export default function PropertyManagementFormModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg flex flex-col max-h-[95vh] sm:max-h-[90vh]">

        {/* Top Bar */}
        <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 border-b shrink-0">
          <button onClick={onClose} className="shrink-0">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <h2 className="font-semibold text-sm sm:text-base truncate">
            Property Registration Form For Property Management
          </h2>
        </div>

        {/* Steps */}
        <div className="flex items-start justify-between px-2 sm:px-4 py-2 sm:py-3 shrink-0 overflow-x-auto">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center min-w-[60px] sm:min-w-0">
              <div
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full text-[10px] sm:text-xs flex items-center justify-center font-bold ${
                  i <= step
                    ? "bg-[#00695C] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {i + 1}
              </div>
              <p
                className={`text-[9px] sm:text-[10px] mt-1 px-1 text-center ${
                  i === step
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
        <div className="px-3 sm:px-4 py-2 sm:py-3 space-y-3 sm:space-y-4 overflow-y-auto flex-1">

          {/* STEP 1 - Owner Details */}
          {step === 0 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-sm sm:text-base">Owner Details</h3>

              <input className="input text-sm sm:text-base" placeholder="Owner Name" />
              <input className="input text-sm sm:text-base" placeholder="Contact Number" />
              <input className="input text-sm sm:text-base" placeholder="Email" />
              <input className="input text-sm sm:text-base" placeholder="Permanent Address" />

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">ID Proof Type:</p>
              <select className="input text-sm sm:text-base">
                <option>Select ID Proof Type</option>
                <option>Aadhar Card</option>
                <option>PAN Card</option>
                <option>Passport</option>
                <option>Driving License</option>
                <option>Voter ID</option>
              </select>

              <input className="input text-sm sm:text-base" placeholder="ID Proof Number" />
            </>
          )}

          {/* STEP 2 - Property Details */}
          {step === 1 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-sm sm:text-base">Property Details</h3>

              <input className="input text-sm sm:text-base" placeholder="Property Title/Name" />
              <input className="input text-sm sm:text-base" placeholder="Property Address" />

              <div className="grid grid-cols-2 gap-2">
                <input className="input text-sm sm:text-base" placeholder="City" />
                <input className="input text-sm sm:text-base" placeholder="Pincode" />
              </div>

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Property Type:</p>
              <select className="input text-sm sm:text-base">
                <option>Select Property Type</option>
                <option>Apartment</option>
                <option>Villas</option>
                <option>Plot</option>
                <option>Independent House</option>
                <option>Commercial Space</option>
              </select>

              <input className="input text-sm sm:text-base" placeholder="Total Project Area (sq/acres)" />

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Configuration:</p>
              {["1 BHK", "2 BHK", "3 BHK", "Other"].map(t => (
                <label key={t} className="flex items-center gap-2 text-xs sm:text-sm">
                  <input type="radio" name="config" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t}
                </label>
              ))}

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Current Status:</p>
              {["Vacant", "Occupied", "Under Maintenance"].map(t => (
                <label key={t} className="flex items-center gap-2 text-xs sm:text-sm">
                  <input type="radio" name="status" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t}
                </label>
              ))}

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Management Service Requirement:</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  "Tenant Search & Rental Management",
                  "Rental Collection",
                  "Legal/Agreement Support",
                  "Property Management & Repairs",
                  "Security & Facility Management",
                  "Resale Assistance",
                  "Other Services",
                ].map(a => (
                  <span key={a} className="chip text-xs sm:text-sm">{a}</span>
                ))}
              </div>
            </>
          )}

          {/* STEP 3 - Pricing & Agreement */}
          {step === 2 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-sm sm:text-base">Pricing & Agreement</h3>

              <input className="input text-sm sm:text-base" placeholder="Expected Rent/Sale Price" />
              <input className="input text-sm sm:text-base" placeholder="Deposit (if applicable)" />
              <input className="input text-sm sm:text-base" placeholder="Management Fees/Commission" />

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Agreement Duration:</p>
              {["6 Month", "1 Year", "Others"].map(t => (
                <label key={t} className="flex items-center gap-2 text-xs sm:text-sm">
                  <input type="radio" name="duration" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t}
                </label>
              ))}

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Amenities:</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  "Lift", "Power Backup", "Security", "Water Supply",
                  "Park", "Gym", "Swimming Pool", "Parking",
                  "Children Play Area", "Other"
                ].map(a => (
                  <span key={a} className="chip text-xs sm:text-sm">{a}</span>
                ))}
              </div>
            </>
          )}

          {/* STEP 4 - Agent Details */}
          {step === 3 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-sm sm:text-base">Agent Details</h3>

              <input className="input text-sm sm:text-base" placeholder="Company/Agent Name" />
              <input className="input text-sm sm:text-base" placeholder="Office Address" />
              <input className="input text-sm sm:text-base" placeholder="Contact Person Name" />
              <input className="input text-sm sm:text-base" placeholder="Phone Number" />
              <input className="input text-sm sm:text-base" placeholder="Email" />
            </>
          )}

          {/* STEP 5 - Documents Upload */}
          {step === 4 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-center text-sm sm:text-base">Documents To Upload</h3>
              
              <div className="upload-box cursor-pointer hover:bg-gray-50">
                <input 
                  type="file" 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  className="hidden" 
                  id="ownership-doc"
                />
                <label htmlFor="ownership-doc" className="cursor-pointer text-xs sm:text-sm">
                  Property Ownership Document
                  <span className="block text-[10px] text-gray-400 mt-1">Upload property papers, registry etc.</span>
                </label>
              </div>

              <div className="upload-box cursor-pointer hover:bg-gray-50">
                <input 
                  type="file" 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  className="hidden" 
                  id="id-proof-owner"
                />
                <label htmlFor="id-proof-owner" className="cursor-pointer text-xs sm:text-sm">
                  ID Proof of Owner
                  <span className="block text-[10px] text-gray-400 mt-1">Upload Aadhar, PAN, Passport etc.</span>
                </label>
              </div>

              <div className="upload-box cursor-pointer hover:bg-gray-50">
                <input 
                  type="file" 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  className="hidden" 
                  id="management-agreement"
                />
                <label htmlFor="management-agreement" className="cursor-pointer text-xs sm:text-sm">
                  Management Agreement/Authorization Letter
                  <span className="block text-[10px] text-gray-400 mt-1">Upload signed management agreement</span>
                </label>
              </div>

              <div className="upload-box cursor-pointer hover:bg-gray-50">
                <input 
                  type="file" 
                  accept="image/*" 
                  multiple 
                  className="hidden" 
                  id="property-images-mgmt"
                />
                <label htmlFor="property-images-mgmt" className="cursor-pointer text-xs sm:text-sm">
                  Property Images
                  <span className="block text-[10px] text-gray-400 mt-1">Upload property images</span>
                </label>
              </div>
            </>
          )}
        </div>

        {/* FOOTER (ALWAYS VISIBLE) */}
        <div className="flex gap-2 sm:gap-3 p-3 sm:p-4 border-t bg-white shrink-0 rounded-b-xl">
          {step > 0 && (
            <button className="btn-outline text-sm sm:text-base px-3 sm:px-4 py-2" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}
          <button
            className="btn-primary ml-auto text-sm sm:text-base px-3 sm:px-4 py-2"
            onClick={() => (step === 4 ? onClose() : setStep(step + 1))}
          >
            {step === 4 ? "Submit" : "Continue"}
          </button>
        </div>

      </div>
    </div>
  );
}