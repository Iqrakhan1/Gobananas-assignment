import React, { useEffect, useState } from "react";
import { fetchItems } from "../api";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Products = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [items, searchTerm]);

  return (
    <>
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
                  xs: "2rem",
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
            {/* table  component to display the users */}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="item table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Image</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Category</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell align="right">
                        <img src={item.image} alt={item.title} width="50" />
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.title}
                      </TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">{item.category}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Products;
