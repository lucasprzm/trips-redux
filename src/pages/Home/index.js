import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { MdFlightTakeoff } from "react-icons/md";
import "./style.css";
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
      <div className="box">
        {trips.map((trip) => {
          return (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.title} />
              <strong>{trip.title}</strong>
              <span>Status: {trip.status ? "Disponível" : "Indisponível"}</span>
              <button type="button" onClick={() => {}}>
                <div>
                  <MdFlightTakeoff size={16} color="#fff" />
                </div>
                <span>SOLICITAR RESERVA</span>
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
