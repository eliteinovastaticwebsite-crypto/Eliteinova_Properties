import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PostPropertyPage from "./pages/PostPropertyPage";

// Import all form modals - Comment out if they're causing issues
import OwnerFormModal from "./components/OwnerFormModal";
import AgentFormModal from "./components/AgentFormModal";
// import BuilderFormModal from "./components/BuilderFormModal";
// import HostelFormModal from "./components/HostelFormModal";
// import PropertyManagementFormModal from "./components/PropertyManagementFormModal";

function AppLayout() {
  const [openOwnerForm, setOpenOwnerForm] = useState(false);
  const [openAgentForm, setOpenAgentForm] = useState(false);
  const [openBuilderForm, setOpenBuilderForm] = useState(false);
  const [openHostelForm, setOpenHostelForm] = useState(false);
  const [openPropertyManagementForm, setOpenPropertyManagementForm] = useState(false);
  
  const navigate = useNavigate();

  // ✅ Central control from Header
  const handlePostPropertyClick = (type) => {
    console.log("Form clicked:", type); // Debug log
    
    if (type === "Owner") {
      setOpenOwnerForm(true);
    } else if (type === "Agent") {
      setOpenAgentForm(true);
    } else if (type === "Builder") {
      setOpenBuilderForm(true);
      alert("Builder form coming soon!"); // Temporary
    } else if (type === "Hostel") {
      setOpenHostelForm(true);
      alert("Hostel form coming soon!"); // Temporary
    } else if (type === "Property Management") {
      setOpenPropertyManagementForm(true);
      alert("Property Management form coming soon!"); // Temporary
    } else {
      navigate("/post-property");
    }
  };

  return (
    <>
      {/* HEADER (fixed) */}
      <Header
        onMenuToggle={() => {}}
        onPostPropertyClick={handlePostPropertyClick}
      />

      {/* OWNER FORM MODAL - Only this one is active */}
      {openOwnerForm && (
        <OwnerFormModal
          isOpen={openOwnerForm}
          onClose={() => setOpenOwnerForm(false)}
        />
      )}

      {/* OTHER MODALS - Uncomment when ready */}
       {openAgentForm && (
        <AgentFormModal
          isOpen={openAgentForm}
          onClose={() => setOpenAgentForm(false)}
        />
      )}

      {/*{openBuilderForm && (
        <BuilderFormModal
          isOpen={openBuilderForm}
          onClose={() => setOpenBuilderForm(false)}
        />
      )}

      {openHostelForm && (
        <HostelFormModal
          isOpen={openHostelForm}
          onClose={() => setOpenHostelForm(false)}
        />
      )}

      {openPropertyManagementForm && (
        <PropertyManagementFormModal
          isOpen={openPropertyManagementForm}
          onClose={() => setOpenPropertyManagementForm(false)}
        />
      )} */}

      {/* MAIN CONTENT — compensate fixed header height */}
      <main className="pt-[92px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/post-property" 
            element={<PostPropertyPage onPostPropertyClick={handlePostPropertyClick} />} 
          />
        </Routes>
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}



