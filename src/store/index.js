import { configureStore } from "@reduxjs/toolkit";
//import rootReducer from "./modules/rootReducer";
import reserveReducer from "./modules/reserve/reducer";

export default configureStore({
  reducer: { reserve: reserveReducer },
});
