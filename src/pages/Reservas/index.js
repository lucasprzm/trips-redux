import React from "react";
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeReserve, decrementAmountReserve } from "../../store/modules/reserve/reducer";
import { incrementAmountRequest } from "../../store/modules/reserve/actions";
import "./style.css";

function Reservas() {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reserve);
  //console.log("Minhas Reservas:", reserves);
  function handleRemove(id) {
    dispatch(removeReserve(id));
  }
  function decrementAmount(trip) {
    dispatch(decrementAmountReserve(trip.id, trip.amount - 1));
  }
  function incrementAmount(trip) {
    dispatch(incrementAmountRequest(trip.id, trip.amount + 1));
  }
  return (
    <div>
      <h1 className="title">Você solicitou {reserves.length} Reserva</h1>
      {reserves.value.map((reserve) => {
        return (
          <div className="reservas" key={reserve.id}>
            <img src={reserve.image} alt={reserve.title} />
            <strong>{reserve.title}</strong>
            <div id="amount">
              <button type="button" onClick={() => decrementAmount(reserve)}>
                <MdRemoveCircle size={25} color="#191919" />
              </button>
              <input type="text" readOnly value={reserve.amount} />
              <button type="button" onClick={() => incrementAmount(reserve)}>
                <MdAddCircle size={25} color="#191919" />
              </button>
            </div>

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
