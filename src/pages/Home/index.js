import React, { useEffect, useState } from "react";
import api from "../../services/api";

// import { Container } from './styles';

function Home() {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    async function loadApi() {
      const response = await api.get("trips");
      setTrips(response.data);
      console.log(response.data);
    }
    loadApi();
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
