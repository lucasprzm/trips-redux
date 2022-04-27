import { Routes as RoutesWrapper, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import Reservas from "./pages/Reservas";

// import { Container } from './styles';

function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />
      <Route path="/reservas" element={<Reservas />} />
    </RoutesWrapper>
  );
}

export default Routes;
