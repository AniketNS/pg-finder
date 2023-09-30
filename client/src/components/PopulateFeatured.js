import React, { useState, useEffect } from "react";
import FeaturedCard from './FeaturedCard'; // Import the FeaturedRoomCard component
import axios from 'axios';
import './styles/PopulateFeatured.css';

export default function PopulateFeatured() {
  const [featuredRooms, setFeaturedRooms] = useState([]);

  useEffect(() => {
    // Fetch featured room data from your Express server when the component mounts
    axios.get('http://localhost:3001/api/getfeaturedrooms')
      .then((response) => {
        setFeaturedRooms(response.data);
      })
      .catch((error) => {
        console.error('Error fetching featured room data:', error);
      });
  }, []);

  return (
    <div className="populate-featured-container">
      {featuredRooms.map((room, index) => (
        <FeaturedCard key={index} {...room} />
      ))}
    </div>
  );
}
