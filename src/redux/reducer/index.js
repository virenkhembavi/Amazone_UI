import { combineReducers } from "redux";
import categoriesReducer from "./catergoriesReducer";
import storeReducer from "./storeReducer";


const rootReducer = combineReducers({
    storeData: storeReducer,
    categories: categoriesReducer
})

export default rootReducer;