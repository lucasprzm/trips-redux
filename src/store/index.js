import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reserveReducer from "./modules/reserve/reducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: { reserve: reserveReducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
