// Get all Bookings Hook
export const getAllBookings = async (email) => {
  const res = await fetch(`http://localhost:3000/MyBookings/api/${email}`);
  const Bookings = res.json();
  return Bookings;
};
