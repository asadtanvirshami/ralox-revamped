import React from 'react'

const consultancy = () => {
  return (
    <div>consultancy</div>
  )
}

export default consultancy

// // pages/index.js
// import { useState, useEffect } from 'react';

// const consultancy = ({ initialCountry, initialCity }) => {
//   const [country, setCountry] = useState(initialCountry || 'Unknown');
//   const [city, setCity] = useState(initialCity || 'Unknown');

//   useEffect(() => {
//     // Get user's geolocation on page load
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;

//           try {
//             const response = await fetch(
//               `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
//             );
//             const data = await response.json();
//             setCountry(data.countryName || 'Unknown');
//             setCity(data.city || 'Unknown');
//           } catch (error) {
//             console.error('Error fetching geolocation data:', error);
//           }
//         },
//         (error) => {
//           console.error('Error getting geolocation:', error);
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   }, []); // Empty dependency array to ensure this effect runs only once on mount

//   return (
//     <div>
//       <h1>Your Geolocation Information</h1>
//       <p>Country: {country}</p>
//       <p>City: {city}</p>
//     </div>
//   );
// };

// export default consultancy;