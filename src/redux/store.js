import { configureStore } from "@reduxjs/toolkit";
import ManyCatsReducer from "./ManyCatsReducer/ManyCatsReducer";
import Cat_Reducer from "./Cat_Reducer/Cat_Reducer";

const store = configureStore({
    reducer: {
        Cat_Reducer,
        ManyCatsReducer
    }
})

export default store