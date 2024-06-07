import React, { useEffect, useState } from "react";
import { fetchItems } from "../api";
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  InputAdornment,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);

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

  const toggleExpand = (id) => {
    setExpandedItems((prevExpandedItems) => {
      if (prevExpandedItems.includes(id)) {
        return prevExpandedItems.filter((item) => item !== id);
      } else {
        return [...prevExpandedItems, id];
      }
    });
  };

  return (
    <Container sx={{ marginBottom: "50px", marginTop: "30px" }}>
      <Box sx={{ textAlign: "left", marginBottom: "20px" }}>
        <TextField
          label="Search items..."
          variant="outlined"
          size="small"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "50px", // Round edges of the input field
              "& fieldset": {
                borderColor: "#6a1b9a", // Change border color
              },
              "&:hover fieldset": {
                borderColor: "#6a1b9a", // Change border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#6a1b9a", // Change border color when focused
              },
            },
          }}
        />
      </Box>

      <Grid container spacing={4}>
        {Array.isArray(filteredItems) && filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#6a1b9a" }} // Set heading color
                    >
                      {item.title.length > 15 ? (
                        <>
                          <Button onClick={() => toggleExpand(item.id)}>
                            {expandedItems.includes(item.id)
                              ? item.title
                              : `${item.title.substring(0, 20)}...`}
                          </Button>
                          {expandedItems.includes(item.id) && (
                            <>
                              <Typography variant="body2">
                                Description: {item.description}
                              </Typography>
                              <Typography variant="body2">
                                Stock: {item.stock}
                              </Typography>
                            </>
                          )}
                        </>
                      ) : (
                        item.title
                      )}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.category}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ color: "#6a1b9a" }} // Set icon color
                    >
                      Price: ${item.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No items found</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default ItemList;
