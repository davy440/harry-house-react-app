import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./updateHouse"

export default configureStore({
    reducer: {
        houseInit: houseReducer
    }
})