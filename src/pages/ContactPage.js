import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Contact from "../components/Contact"; // Import Contact component

const ContactPage = () => {
  return (
    <>
      // Container component to center content
      <Container>
        {/* Box component with margin */}
        <Box mt={8}>
          {/* Heading */}
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2rem",
                md: "3rem",
                lg: "4rem",
                xl: "5rem",
              },
              fontWeight: "bold",
              color: "#6a1b9a",
            }}>
            Let's connect
          </Typography>
          {/* Render Contact component */}
          <Contact />
        </Box>
      </Container>
    </>
  );
};

export default ContactPage;
