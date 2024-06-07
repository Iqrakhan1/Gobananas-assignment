import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/joy/Table"; // Import Table component from Material-UI Joy package
import { Container, Box, Typography } from "@mui/material"; // Import Container and Box components from Material-UI

export default function Products() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") // API call to fetch user data
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
    //   data fatch from https://jsonplaceholder.typicode.com/users
    <Container sx={{ margin: "70px auto" }}>
      <Box sx={{ overflowX: "auto" }}>
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
          Products
        </Typography>
        {/* Table component to display the user data */}
        <Table sx={{ minWidth: 650 }} borderAxis="both">
          {/* Table header */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </Container>
  );
}
