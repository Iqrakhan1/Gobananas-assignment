import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Paper,
} from "@mui/material";

export default function Shop() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Set the fetched data to the state
        setData(response.data);
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {/* Container to center the content and provide some margin at the top */}
      <Container sx={{ margin: "70px auto" }} my={12}>
        {/* Box to allow horizontal scrolling if needed */}
        <Box sx={{ overflowX: "auto" }}>
          {/* Paper component to give the list a nice background and padding */}
          <Paper sx={{ padding: 2 }}>
            {/* Typography for the heading */}
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "2rem",
                  md: "3rem",
                  lg: "4rem",
                  xl: "5rem",
                },
                fontWeight: "bold",
                color: "#6a1b9a",
              }}>
              Shop
            </Typography>
            {/* List component to display the users */}
            <List>
              {data.map((user) => (
                <ListItem
                  key={user.id}
                  sx={{
                    borderBottom: "1px solid #ddd", // Border bottom for each list item
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "15px 0", // Adjusted padding to add space between list items
                  }}>
                  {/* Avatar for the user's initials or image */}
                  <ListItemAvatar>
                    <Avatar
                      alt={user.name}
                      src="#"
                      sx={{ bgcolor: "#6a1b9a" }}
                    />
                  </ListItemAvatar>
                  {/* List item text for the user's name, email, and address */}
                  <ListItemText
                    primary={user.name}
                    secondary={
                      user.email +
                      " , " +
                      user.website +
                      " - " +
                      user.address.city
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
