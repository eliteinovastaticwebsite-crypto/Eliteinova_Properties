import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PostPropertyPage from "./pages/PostPropertyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post-property" element={<PostPropertyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
