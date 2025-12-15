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
import OwnerFormModal from "./components/OwnerFormModal";

function AppLayout() {
  const [openOwnerForm, setOpenOwnerForm] = useState(false);
  const navigate = useNavigate();

  // ✅ Central control from Header
  const handlePostPropertyClick = (type) => {
    if (type === "Owner") {
      setOpenOwnerForm(true); // modal only
    } else {
      navigate("/post-property"); // page navigation
    }
  };

  return (
    <>
      {/* HEADER (fixed) */}
      <Header
        onMenuToggle={() => {}}
        onPostPropertyClick={handlePostPropertyClick}
      />

      {/* OWNER FORM MODAL */}
      <OwnerFormModal
        isOpen={openOwnerForm}
        onClose={() => setOpenOwnerForm(false)}
      />

      {/* MAIN CONTENT — compensate fixed header height */}
      <main className="pt-[92px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post-property" element={<PostPropertyPage />} />
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




