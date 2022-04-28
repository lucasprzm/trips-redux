import React from "react";
import { MdDelete } from "react-icons/md";
import "./style.css";

// import { Container } from './styles';

function Reservas() {
  return (
    <div>
      <h1 className="title">Você solicitou 1 Reserva</h1>
      <div className="reservas">
        <img />
        <strong>Viagem Maceio 7 dias</strong>
        <span>Quantidade: 2</span>
        <button type="button" onClick={() => {}}>
          <MdDelete size={20} color="#191919" />
        </button>
      </div>
      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}

export default Reservas;
