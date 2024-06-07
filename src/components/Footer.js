import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      {/* Box component for styling the footer */}
      <Box
        sx={{
          backgroundColor: "#6a1b9a",
          color: "#fff",
          padding: "20px 0",
          textAlign: "center",
        }}>
        {/* Typography component for text content */}
        <Typography variant="body1" component="p" gutterBottom>
          &copy; 2024 E-com. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
