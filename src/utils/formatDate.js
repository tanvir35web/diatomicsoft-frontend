function formatDate(dateString) {
  const date = new Date(dateString); // Create a new Date object from the ISO string

  const day = date.getUTCDate(); // Get the day of the month
  const monthIndex = date.getUTCMonth(); // Get the month index (0 for January)
  const year = date.getUTCFullYear(); // Get the full year

  // Array of month names
  const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];

  // Format the date
  return `${day} ${monthNames[monthIndex]} ${year}`;
}

export default formatDate;