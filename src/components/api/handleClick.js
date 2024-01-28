import React from "react";
import axios from "axios";

const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:8000');
      console.log(response.data);
    } catch (error) {
      console.error('Error sending GET request:', error);
    }
  };
  
export default handleClick;