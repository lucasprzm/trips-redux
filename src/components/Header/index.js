import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./style.css";
import { useSelector } from "react-redux";

function Header() {
  const reserveSize = useSelector((state) => state.reserve.value);
  // console.log(reserveSize);
  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo Projeto" />
      </Link>
      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas Reservas</strong>
          <span>{reserveSize.length} reservas</span>
        </div>
      </Link>
    </header>
  );
}

export default Header;
