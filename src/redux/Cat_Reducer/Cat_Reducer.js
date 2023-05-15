import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetCat = createAsyncThunk(
    "GetCat/GetOneCat",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get("https://api.thecatapi.com/v1/images/search?format=json")
            return data
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

const CatReducer = createSlice({
    name: "OneCatReducer",
    initialState: {
        data: [],
        loading: false,
        isSuccses: false,
        error: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetCat.pending, (state) => {
                state.loading = true
            })
            .addCase(GetCat.fulfilled, (state, { payload }) => {
                state.loading = false
                state.isSuccses = true
                state.data = payload
            })
            .addCase(GetCat.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})

export default CatReducer.reducer