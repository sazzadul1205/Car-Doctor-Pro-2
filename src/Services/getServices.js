// Get all services Hook
export const getAllServices = async () => {
  const res = await fetch("http://localhost:3000/api/Services/Get-all");
  const Services = res.json();
  return Services;
};

// get single Service Hook
export const getSingleService = async (_id) => {
  const res = await fetch(`http://localhost:3000/api/Services/${_id}`);
  const Service = res.json();
  return Service;
};
