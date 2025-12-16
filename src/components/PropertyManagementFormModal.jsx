import React, { useState } from "react";

export default function PropertyManagementFormModal({ isOpen = true, onClose }) {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  const steps = [
    "Owner Details",
    "Property Details",
    "Pricing & Agreement",
    "Agent Details",
    "Documents To Upload",
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center">
      <div className="bg-white w-full max-w-md min-h-screen overflow-y-auto relative">

        {/* HEADER */}
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <button onClick={onClose} className="text-xl">←</button>
          <h1 className="font-semibold text-sm truncate">
            Property Registration Form For Property Management
          </h1>
        </div>

        {/* STEPPER */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            {steps.map((label, i) => {
              const s = i + 1;
              return (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                      step >= s
                        ? "bg-teal-700 text-white"
                        : "bg-gray-300 text-gray-500"
                    }`}
                  >
                    {s}
                  </div>
                  {s !== 5 && (
                    <div
                      className={`flex-1 h-0.5 mx-1 ${
                        step > s ? "bg-teal-700" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-2 text-sm font-semibold text-teal-700">
            {steps[step - 1]}
          </div>
        </div>

        {/* BODY */}
        <div className="px-4 pb-28 space-y-5">
          {step === 1 && <OwnerDetails />}
          {step === 2 && <PropertyDetails />}
          {step === 3 && <PricingAgreement />}
          {step === 4 && <AgentDetails />}
          {step === 5 && <DocumentsUpload />}
        </div>

        {/* FOOTER BUTTONS */}
        <div className="sticky bottom-0 bg-white border-t px-4 py-3 flex gap-3">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 border border-teal-700 text-teal-700 rounded-full py-3 font-medium"
            >
              Back
            </button>
          )}
          <button
            onClick={() => step === 5 ? onClose() : setStep(step + 1)}
            className="flex-1 bg-teal-700 text-white rounded-full py-3 font-medium"
          >
            {step === 5 ? "Submit" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===================== STEP 1 ===================== */
function OwnerDetails() {
  return (
    <>
      <Input placeholder="Owner Name" />
      <Input placeholder="Contact Number" />
      <Input placeholder="Email" />
      <Input placeholder="Permanent Address" />

      <label className="text-teal-700 font-semibold">ID Proof Type:</label>
      <select className="w-full border rounded-md px-3 py-3">
        <option>Select ID Proof Type</option>
        <option>Aadhar Card</option>
        <option>PAN Card</option>
        <option>Passport</option>
        <option>Driving License</option>
        <option>Voter ID</option>
      </select>

      <Input placeholder="ID Proof Number" />
    </>
  );
}

/* ===================== STEP 2 ===================== */
function PropertyDetails() {
  return (
    <>
      <Input placeholder="Property Title/Name" />
      <Input placeholder="Property Address" />

      <div className="flex gap-3">
        <Input placeholder="City" />
        <Input placeholder="Pincode" />
      </div>

      <label className="text-teal-700 font-semibold">Property Type:</label>
      <select className="w-full border rounded-md px-3 py-3">
        <option>Select Property Type</option>
        <option>Apartment</option>
        <option>Villas</option>
        <option>Plot</option>
        <option>Independent House</option>
        <option>Commercial Space</option>
      </select>

      <Input placeholder="Total Project Area (sq/acres)" />

      <Section title="Configuration">
        <Radio label="1 BHK" />
        <Radio label="2 BHK" />
        <Radio label="3 BHK" />
        <Radio label="Other" />
      </Section>

      <Section title="Current Status">
        <Radio label="Vacant" />
        <Radio label="Occupied" />
        <Radio label="Under Maintenance" />
      </Section>

      <Section title="Management Service Requirement">
        {[
          "Tenant Search & Rental Management",
          "Rental Collection",
          "Legal/Agreement Support",
          "Property Management & Repairs",
          "Security & Facility Management",
          "Resale Assistance",
          "Other Services",
        ].map((item) => (
          <Chip key={item} label={item} />
        ))}
      </Section>
    </>
  );
}

/* ===================== STEP 3 ===================== */
function PricingAgreement() {
  return (
    <>
      <Input placeholder="Expected Rent/Sale Price" />
      <Input placeholder="Deposit (if applicable)" />
      <Input placeholder="Management Fees/Commission" />

      <Section title="Agreement Duration">
        <Radio label="6 Month" />
        <Radio label="1 Year" />
        <Radio label="Others" />
      </Section>

      <Section title="Amenities">
        {[
          "Lift", "Power Backup", "Security", "Water Supply",
          "Park", "Gym", "Swimming Pool", "Parking",
          "Children Play Area", "Other"
        ].map((a) => (
          <Chip key={a} label={a} />
        ))}
      </Section>
    </>
  );
}

/* ===================== STEP 4 ===================== */
function AgentDetails() {
  return (
    <>
      <Input placeholder="Company/Agent Name" />
      <Input placeholder="Office Address" />
      <Input placeholder="Contact Person Name" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Email" />
    </>
  );
}

/* ===================== STEP 5 ===================== */
function DocumentsUpload() {
  return (
    <>
      <Upload
        title="Property Ownership Document"
        subtitle="Upload property papers, registry etc."
      />
      <Upload
        title="ID Proof of Owner"
        subtitle="Upload Aadhar, PAN, Passport etc."
      />
      <Upload
        title="Management Agreement/Authorization Letter"
        subtitle="Upload signed management agreement"
      />
      <Upload
        title="Property Images"
        subtitle="Upload property images"
      />
    </>
  );
}

/* ===================== UI HELPERS ===================== */

function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full border rounded-md px-3 py-3 text-sm"
    />
  );
}

function Section({ title, children }) {
  return (
    <div>
      <div className="text-teal-700 font-semibold mb-2">{title}</div>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

function Radio({ label }) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input type="radio" className="accent-teal-700" />
      {label}
    </label>
  );
}

function Chip({ label }) {
  return (
    <span className="px-4 py-1.5 border border-teal-700 rounded-full text-sm text-teal-700">
      {label}
    </span>
  );
}

function Upload({ title, subtitle }) {
  return (
    <div>
      <div className="font-semibold text-teal-700 mb-2">{title}</div>
      <label className="border-2 border-dashed border-teal-700 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer">
        <input type="file" multiple hidden />
        <div className="text-teal-700 font-medium">Upload {title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </label>
    </div>
  );
}
