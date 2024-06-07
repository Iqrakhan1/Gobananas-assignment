import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Box
      sx={{
        marginTop: "70px",
        backgroundColor: "#f0f0f0",
        padding: "80px 0",
        position: "relative", // Add position relative to container
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/purple-shopping-bags-purple-background_960080-606.jpg?w=996)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Add white layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(106, 27, 154, 0.4)",
        }}
      />
      <Box
        sx={{
          position: "relative", // Add position relative to inner content
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          padding: "0 20px",
          zIndex: 1, // Add z-index to ensure content is above the white layer
        }}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
              lg: "5rem",
              xl: "6rem",
            },
            fontWeight: "bold",
            color: "#fff",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)", // Adding text shadow
          }}>
          Welcome to Our Store
        </Typography>
        <Typography
          variant="h6"
          component="p"
          gutterBottom
          sx={{
            color: "#ffffff",
            marginBottom: "40px",
          }}>
          Discover amazing products and shop with ease.
        </Typography>
        {/* Button with Link to the home page */}
        <Button
          component={Link} // Use Link component from react-router-dom
          to="/" // Specify the link destination (home page)
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#6a1b9a",
            color: "white",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "white",
              color: "#6a1b9a",
            },
            borderRadius: "50px",
            padding: "12px 32px",
          }}>
          Explore Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
