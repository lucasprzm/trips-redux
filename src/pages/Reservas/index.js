import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeReserve } from "../../store/modules/reserve/reducer";
import "./style.css";

function Reservas() {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reserve);
  //console.log("Minhas Reservas:", reserves);
  function handleRemove(id) {
    dispatch(removeReserve(id));
  }
  return (
    <div>
      <h1 className="title">Você solicitou {reserves.length} Reserva</h1>
      {reserves.value.map((reserve) => {
        return (
          <div className="reservas" key={reserve.id}>
            <img src={reserve.image} alt={reserve.title} />
            <strong>{reserve.title}</strong>
            <span>Quantidade: {reserve.amount}</span>
            <button type="button" onClick={() => handleRemove(reserve.id)}>
              <MdDelete size={20} color="#191919" />
            </button>
          </div>
        );
      })}
      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}

export default Reservas;
