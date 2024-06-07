import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  InputAdornment,
  Paper,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import shopingBag from "../assets/images/shoping-bag.png";

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    // Container component to center content
    <Container>
      {/* Box component with margin */}
      <Box mb={12}>
        {/* Grid container with spacing and align items */}
        <Grid spacing={4} alignItems="center">
          {/* Contact Form with Image */}
          {/* Paper component for elevation and styling */}
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            {/* Grid container with spacing and align items */}
            <Grid container spacing={2} alignItems="center">
              {/* Grid item for image */}
              <Grid item xs={12} md={6} container justifyContent="center">
                {/* Image element */}
                <img
                  src={shopingBag}
                  alt="Contact Form"
                  style={{ width: "60%", borderRadius: 4 }}
                />
              </Grid>
              {/* Grid item for form */}
              <Grid item xs={12} md={6}>
                {/* Typography for heading */}
                <Typography
                  variant="h6"
                  gutterBottom
                  align="center"
                  sx={{ color: "#6a1b9a", marginBottom: 2 }}>
                  Contact Now
                </Typography>
                {/* Typography for description */}
                <Typography
                  variant="body1"
                  align="center"
                  gutterBottom
                  sx={{ color: "#a29d9", marginBottom: 2 }}>
                  Feel free to get in touch with us for any inquiries or
                  questions.
                </Typography>
                {/* Form element */}
                <form onSubmit={handleSubmit}>
                  {/* Text field for name */}
                  <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircleIcon sx={{ color: "#6a1b9a" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {/* Text field for email */}
                  <TextField
                    label="Your Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon sx={{ color: "#6a1b9a" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {/* Text field for message */}
                  <TextField
                    label="Your Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                  />
                  {/* Button for form submission */}
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    fullWidth
                    sx={{
                      backgroundColor: "#6a1b9a",
                      color: "white",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#6a1b9a",
                      },
                    }}>
                    Submit
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Paper>
          {/* Contact Information */}
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
