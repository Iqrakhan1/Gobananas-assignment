import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/joy/Table"; // Import Table component from Material-UI Joy package
import { Container, Box } from "@mui/material"; // Import Container and Box components from Material-UI

export default function TableData() {
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
    // Container to center the content and provide some margin at the top
    <Container sx={{ margin: "70px auto" }}>
      {/* Box to allow horizontal scrolling if needed */}
      <Box sx={{ overflowX: "auto" }}>
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
