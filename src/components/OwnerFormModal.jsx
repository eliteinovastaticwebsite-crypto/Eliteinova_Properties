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
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg flex flex-col max-h-[95vh]">

        {/* Top Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b shrink-0">
          <button onClick={onClose}>
            <ArrowLeft />
          </button>
          <h2 className="font-semibold text-base truncate">
            Property Registration Form For Owner
          </h2>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-between px-4 py-3 shrink-0">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 text-center">
              <div
                className={`mx-auto w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold ${
                  i <= step
                    ? "bg-[#00695C] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {i + 1}
              </div>
              <p
                className={`text-[10px] mt-1 ${
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
        <div className="px-4 py-3 space-y-4 overflow-y-auto flex-1">

          {/* STEP 1 */}
          {step === 0 && (
            <>
              <input className="input" placeholder="Owner Name" />
              <input className="input" placeholder="Contact Number" />
              <input className="input" placeholder="Email ID" />
              <input className="input" placeholder="Address" />
              <input className="input" placeholder="ID Proof / Aadhaar / PAN" />
            </>
          )}

          {/* STEP 2 */}
          {step === 1 && (
            <>
              <h3 className="text-[#00695C] font-semibold">Property Details</h3>

              <input className="input" placeholder="Property Title / Name" />
              <input className="input" placeholder="Property Type" />

              <p className="text-sm font-semibold text-[#00695C]">Property Type:</p>
              {["Residential", "Commercial", "Mill / Industrial"].map(t => (
                <label key={t} className="flex items-center gap-2 text-sm">
                  <input type="radio" name="ptype" /> {t}
                </label>
              ))}

              <input className="input" placeholder="Property Address" />
              <input className="input" placeholder="City" />

              <p className="text-sm font-semibold text-[#00695C]">Area Details:</p>
              <div className="grid grid-cols-2 gap-2">
                <input className="input" placeholder="Build-up Area (sq ft)" />
                <input className="input" placeholder="Carpet Area (sq ft)" />
              </div>

              <p className="text-sm font-semibold text-[#00695C]">Room Details:</p>
              <div className="grid grid-cols-2 gap-2">
                <input className="input" placeholder="Bedrooms" />
                <input className="input" placeholder="Bathrooms" />
              </div>

              <p className="text-sm font-semibold text-[#00695C]">Furnishing Status:</p>
              {["Full Furnish", "Semi Furnish", "Unfurnished"].map(f => (
                <label key={f} className="flex items-center gap-2 text-sm">
                  <input type="radio" name="furnish" /> {f}
                </label>
              ))}

              <p className="text-sm font-semibold text-[#00695C]">Parking Facility:</p>
              <div className="flex gap-6 text-sm">
                <label><input type="radio" name="parking" /> Yes</label>
                <label><input type="radio" name="parking" /> No</label>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 2 && (
            <>
              <h3 className="text-[#00695C] font-semibold">Pricing & Amenities</h3>

              <p className="text-sm font-semibold text-[#00695C]">Purpose:</p>
              <div className="flex gap-6 text-sm">
                <label><input type="radio" name="purpose" /> For Sale</label>
                <label><input type="radio" name="purpose" /> For Rent / Lease</label>
              </div>

              <input className="input" placeholder="Expected Price / Rent" />

              <p className="text-sm font-semibold text-[#00695C]">Price Type:</p>
              <div className="flex gap-6 text-sm">
                <label><input type="radio" name="priceType" /> Fixed</label>
                <label><input type="radio" name="priceType" /> Negotiable</label>
              </div>

              <input className="input" placeholder="Maintenance Charges" />
              <input className="input" type="date" />

              <p className="text-sm font-semibold text-[#00695C]">Amenities:</p>
              <div className="flex flex-wrap gap-2">
                {["Lift", "Power Backup", "Security", "Water Supply", "Garden", "Gym", "Swimming Pool"].map(a => (
                  <span key={a} className="chip">{a}</span>
                ))}
              </div>

              <input className="input" placeholder="Other Amenities" />
            </>
          )}

          {/* STEP 4 */}
          {step === 3 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-center">Media Upload</h3>
              <p className="text-xs text-center text-gray-500">Minimum 3 images required</p>

              <div className="upload-box">
                <ImagePlus className="mx-auto mb-2" />
                Add Property Images
              </div>

              <div className="upload-box">
                <Video className="mx-auto mb-2" />
                Upload Property Video
                <p className="text-xs text-gray-400">MP4, MOV supported</p>
              </div>
            </>
          )}

          {/* STEP 5 */}
          {step === 4 && (
            <>
              <h3 className="text-[#00695C] font-semibold text-center">Document Upload</h3>
              <div className="upload-box">Upload Property Ownership Proof</div>
              <div className="upload-box">Upload ID Proof of Owner</div>
              <div className="upload-box">+ Add Additional Documents</div>
            </>
          )}
        </div>

        {/* FOOTER (ALWAYS VISIBLE) */}
        <div className="flex gap-3 p-4 border-t bg-white shrink-0">
          {step > 0 && (
            <button className="btn-outline" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}
          <button
            className="btn-primary ml-auto"
            onClick={() => (step === 4 ? onClose() : setStep(step + 1))}
          >
            {step === 4 ? "Submit" : "Continue"}
          </button>
        </div>

      </div>
    </div>
  );
}

