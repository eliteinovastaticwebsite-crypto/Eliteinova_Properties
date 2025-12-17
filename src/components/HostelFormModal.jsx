import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const steps = [
  "PG/Hostel Information",
  "Pricing & Payment",
  "Rules & Regulations",
  "Owner & Manager Details",
  "Documents To Upload",
];

export default function HostelFormModal({ isOpen, onClose }) {
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
            Property Registration Form For PG
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

          {/* STEP 1 */}
          {step === 0 && (
            <>
              <input className="input text-sm sm:text-base" placeholder="City" />
              <input className="input text-sm sm:text-base" placeholder="Pincode" />
              <input className="input text-sm sm:text-base" placeholder="Total Capacity (No of Beds/Rooms)" />

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Type:</p>
              {["PG", "Hostel", "Co-living Space"].map(t => (
                <label key={t} className="flex items-center gap-2 text-xs sm:text-sm">
                  <input type="radio" name="type" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t}
                </label>
              ))}

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">For:</p>
              {["Boys", "Girls", "Co-ed"].map(t => (
                <label key={t} className="flex items-center gap-2 text-xs sm:text-sm">
                  <input type="radio" name="for" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t}
                </label>
              ))}

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Room Type:</p>
              {["Single", "Double", "Triple", "Dormitory"].map(t => (
                <label key={t} className="flex items-center gap-2 text-xs sm:text-sm">
                  <input type="radio" name="roomType" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t}
                </label>
              ))}

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Furnishing Status:</p>
              {["Full Furnished", "Semi Furnished", "Unfurnished"].map(f => (
                <label key={f} className="flex items-center gap-2 text-xs sm:text-sm">
                  <input type="radio" name="furnish" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {f}
                </label>
              ))}
            </>
          )}

          {/* STEP 2 */}
          {step === 1 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-sm sm:text-base">Pricing & Payment</h3>

              <input className="input text-sm sm:text-base" placeholder="Monthly Rent (Per Room/Bed)" />
              <input className="input text-sm sm:text-base" placeholder="Security Deposit" />

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Food Included:</p>
              <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
                <label><input type="radio" name="food" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Yes</label>
                <label><input type="radio" name="food" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> No</label>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Meal Type:</p>
              {["Veg", "Non Veg", "Both"].map(t => (
                <label key={t} className="flex items-center gap-2 text-xs sm:text-sm">
                  <input type="radio" name="mealType" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t}
                </label>
              ))}

              <input className="input text-sm sm:text-base" placeholder="Available From" />

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Amenities:</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {["Lift", "Power Backup", "Security", "Water Supply", "Park", "Gym", "Swimming Pool", "Parking", "Children Play Area", "WiFi", "Laundry", "Housekeeping"].map(a => (
                  <span key={a} className="chip text-xs sm:text-sm">{a}</span>
                ))}
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 2 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-sm sm:text-base">Rules & Regulations</h3>

              <input className="input text-sm sm:text-base" placeholder="Entry/Exit Timing (if any)" />

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Visitor Allowed:</p>
              <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
                <label><input type="radio" name="visitor" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Yes</label>
                <label><input type="radio" name="visitor" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> No</label>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Smoke/Alcohol Allowed:</p>
              <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
                <label><input type="radio" name="smoke" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Allowed</label>
                <label><input type="radio" name="smoke" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Not Allowed</label>
              </div>
            </>
          )}

          {/* STEP 4 */}
          {step === 3 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-sm sm:text-base">Owner & Manager Details</h3>

              <input className="input text-sm sm:text-base" placeholder="Owner/Manager Name" />
              <input className="input text-sm sm:text-base" placeholder="Contact Number" />
              <input className="input text-sm sm:text-base" placeholder="Email" />
            </>
          )}

          {/* STEP 5 */}
          {step === 4 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-center text-sm sm:text-base">Documents To Upload</h3>
              
              <div className="upload-box cursor-pointer hover:bg-gray-50">
                <input 
                  type="file" 
                  accept="image/*" 
                  multiple 
                  className="hidden" 
                  id="property-images"
                />
                <label htmlFor="property-images" className="cursor-pointer text-xs sm:text-sm">
                  Property Images
                  <span className="block text-[10px] text-gray-400 mt-1">Upload property images</span>
                </label>
              </div>

              <div className="upload-box cursor-pointer hover:bg-gray-50">
                <input 
                  type="file" 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  className="hidden" 
                  id="id-proof"
                />
                <label htmlFor="id-proof" className="cursor-pointer text-xs sm:text-sm">
                  ID Proof of Owner/Manager
                  <span className="block text-[10px] text-gray-400 mt-1">Upload Aadhar, PAN, Passport etc.</span>
                </label>
              </div>

              <div className="upload-box cursor-pointer hover:bg-gray-50">
                <input 
                  type="file" 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  className="hidden" 
                  id="registration-docs"
                />
                <label htmlFor="registration-docs" className="cursor-pointer text-xs sm:text-sm">
                  Property Registration/Approval (if applicable)
                  <span className="block text-[10px] text-gray-400 mt-1">Upload property registration documents</span>
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