// import { useEffect } from "react";

// useEffect(() => {
//   // Get user's geolocation on page load
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;

//         try {
//           const response = await fetch(
//             `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
//           );
//           const data = await response.json();
//           setCountry(data.countryName || "Unknown");
//           setCity(data.city || "Unknown");
//         } catch (error) {
//           console.error("Error fetching geolocation data:", error);
//         }
//       },
//       (error) => {
//         console.error("Error getting geolocation:", error);
//       }
//     );
//   } else {
//     console.error("Geolocation is not supported by this browser.");
//   }
// }, []); // Empty dependency array to ensure this effect runs only once on mount
