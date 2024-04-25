import { combineReducers } from "@reduxjs/toolkit";
import supervisedSlice from "../slices/supervisedSlice";

const rootReducer = combineReducers({
    supervised: supervisedSlice
})

export default rootReducer