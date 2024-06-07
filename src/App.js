import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // Import Home without destructuring

import ContactPage from "./pages/ContactPage"; // Import ContactPage
import Shop from "./pages/Shop";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      {/* Top navigation bar which includes logo, menu, and navigation buttons */}
      <Navbar />

      {/* Routes will render the component based on the URL path */}
      <Routes>
        {/* Default route to the Home page */}
        <Route path="*" element={<Home />} />

        {/* Route for the TableData page */}
        <Route path="/products" element={<Products />} />

        {/* Route for the ListData page */}
        <Route path="/shop" element={<Shop />} />

        {/* Route for the Contact page */}
        <Route path="/contact-us" element={<ContactPage />} />

        {/* Add more routes as needed */}
      </Routes>

      {/* Footer which contains some basic text */}
      <Footer />
    </Router>
  );
}

export default App;
