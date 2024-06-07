import axios from "axios";

// Define the base URL of the Fake Store API
const API_URL = "https://fakestoreapi.com/products";

// Function to fetch items from the API
export const fetchItems = async () => {
  try {
    // Send a GET request to the API URL
    const response = await axios.get(API_URL);

    // Extract and return the data from the response object
    return response.data;
  } catch (error) {
    // Log any errors that occur during the request
    console.error("Error fetching items:", error);

    // Return an empty array in case of error
    return [];
  }
};
