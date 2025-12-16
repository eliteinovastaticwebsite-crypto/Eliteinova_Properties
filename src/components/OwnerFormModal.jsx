import React, { useState } from "react";
import { X, ArrowLeft, ImagePlus, Video } from "lucide-react";

const steps = [
  "Owner Details",
  "Property Details",
  "Pricing & Amenities",
  "Media Upload",
  "Document Upload",
];

export default function OwnerFormModal({ isOpen, onClose }) {
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
            Property Registration Form For Owner
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
              <input className="input text-sm sm:text-base" placeholder="Owner Name" />
              <input className="input text-sm sm:text-base" placeholder="Contact Number" />
              <input className="input text-sm sm:text-base" placeholder="Email ID" />
              <input className="input text-sm sm:text-base" placeholder="Address" />
              <input className="input text-sm sm:text-base" placeholder="ID Proof / Aadhaar / PAN" />
            </>
          )}

          {/* STEP 2 */}
          {step === 1 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-sm sm:text-base">Property Details</h3>

              <input className="input text-sm sm:text-base" placeholder="Property Title / Name" />
              <input className="input text-sm sm:text-base" placeholder="Property Type" />

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Property Type:</p>
              {["Residential", "Commercial", "Mill / Industrial"].map(t => (
                <label key={t} className="flex items-center gap-2 text-xs sm:text-sm">
                  <input type="radio" name="ptype" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t}
                </label>
              ))}

              <input className="input text-sm sm:text-base" placeholder="Property Address" />
              <input className="input text-sm sm:text-base" placeholder="City" />

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Area Details:</p>
              <div className="grid grid-cols-2 gap-2">
                <input className="input text-sm sm:text-base" placeholder="Build-up Area (sq ft)" />
                <input className="input text-sm sm:text-base" placeholder="Carpet Area (sq ft)" />
              </div>

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Room Details:</p>
              <div className="grid grid-cols-2 gap-2">
                <input className="input text-sm sm:text-base" placeholder="Bedrooms" />
                <input className="input text-sm sm:text-base" placeholder="Bathrooms" />
              </div>

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Furnishing Status:</p>
              {["Full Furnish", "Semi Furnish", "Unfurnished"].map(f => (
                <label key={f} className="flex items-center gap-2 text-xs sm:text-sm">
                  <input type="radio" name="furnish" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {f}
                </label>
              ))}

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Parking Facility:</p>
              <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
                <label><input type="radio" name="parking" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Yes</label>
                <label><input type="radio" name="parking" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> No</label>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 2 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-sm sm:text-base">Pricing & Amenities</h3>

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Purpose:</p>
              <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
                <label><input type="radio" name="purpose" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> For Sale</label>
                <label><input type="radio" name="purpose" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> For Rent / Lease</label>
              </div>

              <input className="input text-sm sm:text-base" placeholder="Expected Price / Rent" />

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Price Type:</p>
              <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
                <label><input type="radio" name="priceType" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Fixed</label>
                <label><input type="radio" name="priceType" className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Negotiable</label>
              </div>

              <input className="input text-sm sm:text-base" placeholder="Maintenance Charges" />
              <input className="input text-sm sm:text-base" type="date" />

              <p className="text-xs sm:text-sm font-semibold text-[#00695C]">Amenities:</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {["Lift", "Power Backup", "Security", "Water Supply", "Garden", "Gym", "Swimming Pool"].map(a => (
                  <span key={a} className="chip text-xs sm:text-sm">{a}</span>
                ))}
              </div>

              <input className="input text-sm sm:text-base" placeholder="Other Amenities" />
            </>
          )}

          {/* STEP 4 */}
          {step === 3 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-center text-sm sm:text-base">Media Upload</h3>
              <p className="text-[10px] sm:text-xs text-center text-gray-500">Minimum 3 images required</p>

              <div className="upload-box cursor-pointer hover:bg-gray-50">
                <input 
                  type="file" 
                  accept="image/*" 
                  multiple 
                  className="hidden" 
                  id="property-images"
                />
                <label htmlFor="property-images" className="cursor-pointer flex flex-col items-center">
                  <ImagePlus className="mx-auto mb-2 w-8 h-8 sm:w-10 sm:h-10" />
                  <span className="text-xs sm:text-sm">Add Property Images</span>
                  <span className="text-[10px] sm:text-xs text-gray-400 mt-1">Click to upload multiple images</span>
                </label>
              </div>

              <div className="upload-box cursor-pointer hover:bg-gray-50">
                <input 
                  type="file" 
                  accept="video/mp4,video/mov" 
                  className="hidden" 
                  id="property-video"
                />
                <label htmlFor="property-video" className="cursor-pointer flex flex-col items-center">
                  <Video className="mx-auto mb-2 w-8 h-8 sm:w-10 sm:h-10" />
                  <span className="text-xs sm:text-sm">Upload Property Video</span>
                  <p className="text-[10px] sm:text-xs text-gray-400">MP4, MOV supported</p>
                </label>
              </div>
            </>
          )}

          {/* STEP 5 */}
          {step === 4 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-center text-sm sm:text-base">Document Upload</h3>
              
              <div className="upload-box cursor-pointer hover:bg-gray-50">
                <input 
                  type="file" 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  className="hidden" 
                  id="ownership-proof"
                />
                <label htmlFor="ownership-proof" className="cursor-pointer text-xs sm:text-sm">
                  Upload Property Ownership Proof
                  <span className="block text-[10px] text-gray-400 mt-1">PDF, JPG, PNG supported</span>
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
                  Upload ID Proof of Owner
                  <span className="block text-[10px] text-gray-400 mt-1">PDF, JPG, PNG supported</span>
                </label>
              </div>

              <div className="upload-box cursor-pointer hover:bg-gray-50">
                <input 
                  type="file" 
                  accept=".pdf,.jpg,.jpeg,.png" 
                  multiple 
                  className="hidden" 
                  id="additional-docs"
                />
                <label htmlFor="additional-docs" className="cursor-pointer text-xs sm:text-sm">
                  + Add Additional Documents
                  <span className="block text-[10px] text-gray-400 mt-1">Multiple files supported</span>
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