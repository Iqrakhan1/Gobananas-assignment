import React from "react";
import ItemList from "../components/ItemList"; // Import the ItemList component
import HeroSection from "../components/HeroSection"; // Import the HeroSection component
import Contact from "../components/Contact"; // Import the Contact component

const Home = () => {
  return (
    <>
      {/* Hero section at the top of the home page */}
      <HeroSection />

      {/* List of items displayed in the middle of the home page */}
      <ItemList />

      {/* Contact section at the bottom of the home page */}
      <Contact />
    </>
  );
};

export default Home;
