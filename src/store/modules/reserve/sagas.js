import { call, put, all, takeLatest, select } from "redux-saga/effects";
import { addReserveSuccess, incrementAmountReserve } from "./reducer";
import api from "../../../services/api";

function* addToReserve({ id }) {
  const tripExists = yield select((state) => state.reserve.value.find((trip) => trip.id === id));
  const myStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = myStock.data.amount;
  const currentStock = tripExists ? tripExists.amount : 0;
  const amount = currentStock + 1;
  if (amount > stockAmount) {
    alert("Quantidade máxima atingida!");
    return;
  }
  if (tripExists) {
    yield put(incrementAmountReserve(id));
  } else {
    const response = yield call(api.get, `trips/${id}`);
    const data = {
      ...response.data,
      amount: 1,
    };
    yield put(addReserveSuccess(data));
  }
}

function* incrementAmount({ id, amount }) {
  if (amount <= 0) {
    return;
  }
  const myStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = myStock.data.amount;
  if (amount > stockAmount) {
    alert("Quantidade máxima atingida!");
    return;
  }
  yield put(incrementAmountReserve(id));
}

export default all([
  takeLatest("ADD_RESERVE", addToReserve),
  takeLatest("INCREMENT_AMOUNT_REQUEST", incrementAmount),
]);
