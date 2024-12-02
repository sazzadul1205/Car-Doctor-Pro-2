import axios from "axios";

// Get all services Hook
export const getAllServices = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_JS_BASE_URL}/api/Services/Get-all`);
    return res.data;
  } catch (error) {
    console.error("Error fetching all services:", error.message);
    throw error; // Rethrow the error to be handled by the caller
  }
};

// Get single Service Hook
export const getSingleService = async (_id) => {
  try {
    const res = await fetch(`${process.env.NEXT_JS_BASE_URL}/api/Services/${_id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch service with id: ${_id}`);
    }
    const service = await res.json();
    return service;
  } catch (error) {
    console.error(`Error fetching service with id ${_id}:`, error.message);
    throw error; // Rethrow the error to be handled by the caller
  }
};
