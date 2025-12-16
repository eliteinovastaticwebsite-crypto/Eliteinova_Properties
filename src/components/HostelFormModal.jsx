import React, { useState } from "react";

export default function HostelFormModal({ isOpen = true, onClose }) {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  const steps = [
    "PG/Hostel Information",
    "Pricing & Payment",
    "Rules & Regulations",
    "Owner & Manager Details",
    "Documents To Upload",
  ];

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg flex flex-col max-h-[95vh] sm:max-h-[90vh] overflow-hidden">

        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <button onClick={onClose} className="text-xl">←</button>
          <h1 className="font-semibold text-sm">
            Property Registration Form For PG
          </h1>
        </div>

        {/* Stepper */}
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
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {s}
                  </div>
                  {s !== 5 && (
                    <div
                      className={`flex-1 h-0.5 mx-1 ${
                        step > s ? "bg-teal-700" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-2 text-[11px] text-teal-700 font-medium">
            {steps[step - 1]}
          </div>
        </div>

        {/* FORM BODY */}
        <div className="px-4 pb-24 space-y-5">
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
          {step === 4 && <StepFour />}
          {step === 5 && <StepFive />}
        </div>

       {/* FOOTER BUTTONS */}
   <div className="sticky bottom-0 bg-white border-t px-4 py-3 flex gap-3">

          {step > 1 && (
            <button
              onClick={back}
              className="flex-1 border border-teal-700 text-teal-700 rounded-full py-3"
            >
              Back
            </button>
          )}
          <button
            onClick={step === 5 ? onClose : next}
            className="flex-1 bg-teal-700 text-white rounded-full py-3"
          >
            {step === 5 ? "Submit" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- STEPS ---------------- */

function StepOne() {
  return (
    <>
      <Input placeholder="City" />
      <Input placeholder="Pincode" />
      <Input placeholder="Total Capacity (No of Beds/Rooms)" />

      <Section title="Type">
        <Radio label="PG" />
        <Radio label="Hostel" />
        <Radio label="Co-living Space" />
      </Section>

      <Section title="For">
        <Radio label="Boys" />
        <Radio label="Girls" />
        <Radio label="Co-ed" />
      </Section>

      <Section title="Room Type">
        <Radio label="Single" />
        <Radio label="Double" />
        <Radio label="Triple" />
        <Radio label="Dormitory" />
      </Section>

      <Section title="Furnishing Status">
        <Radio label="Full Furnished" />
        <Radio label="Semi Furnished" />
        <Radio label="Unfurnished" />
      </Section>
    </>
  );
}

function StepTwo() {
  const amenities = [
    "Lift",
    "Power Backup",
    "Security",
    "Water Supply",
    "Park",
    "Gym",
    "Swimming Pool",
    "Parking",
    "Children Play Area",
    "WiFi",
    "Laundry",
    "Housekeeping",
  ];

  return (
    <>
      <Input placeholder="Monthly Rent (Per Room/Bed)" />
      <Input placeholder="Security Deposit" />

      <Section title="Food Included">
        <Radio label="Yes" />
        <Radio label="No" />
      </Section>

      <Section title="Meal Type">
        <Radio label="Veg" />
        <Radio label="Non Veg" />
        <Radio label="Both" />
      </Section>

      <Input placeholder="Available From" />

      <Section title="Amenities">
        <div className="flex flex-wrap gap-2">
          {amenities.map((a) => (
            <span
              key={a}
              className="px-3 py-1 border border-teal-700 rounded-full text-sm text-teal-700"
            >
              {a}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}

function StepThree() {
  return (
    <>
      <Input placeholder="Entry/Exit Timing (if any)" />

      <Section title="Visitor Allowed">
        <Radio label="Yes" />
        <Radio label="No" />
      </Section>

      <Section title="Smoke/Alcohol Allowed">
        <Radio label="Allowed" />
        <Radio label="Not Allowed" />
      </Section>
    </>
  );
}

function StepFour() {
  return (
    <>
      <Input placeholder="Owner/Manager Name" />
      <Input placeholder="Contact Number" />
      <Input placeholder="Email" />
    </>
  );
}

function StepFive() {
  return (
    <>
      <Upload title="Property Images" subtitle="Upload property images" />
      <Upload
        title="ID Proof of Owner/Manager"
        subtitle="Upload Aadhar, PAN, Passport etc."
      />
      <Upload
        title="Property Registration/Approval (if applicable)"
        subtitle="Upload property registration documents"
      />
    </>
  );
}

/* ---------------- UI HELPERS ---------------- */

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
      <div className="flex flex-wrap gap-4">{children}</div>
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
