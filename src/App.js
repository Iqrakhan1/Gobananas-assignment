import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // Import Home without destructuring
import TableData from "./pages/TableData"; // Import TableData page
import ListData from "./pages/ListData"; // Import ListData page
import ContactPage from "./pages/ContactPage"; // Import ContactPage

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
        <Route path="/table-data" element={<TableData />} />

        {/* Route for the ListData page */}
        <Route path="/list-data" element={<ListData />} />

        {/* Route for the Contact page */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Add more routes as needed */}
      </Routes>

      {/* Footer which contains some basic text */}
      <Footer />
    </Router>
  );
}

export default App;
