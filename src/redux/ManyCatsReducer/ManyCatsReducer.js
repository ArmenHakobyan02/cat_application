import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const GetManyCats = createAsyncThunk(
    "getCat_InLimit",
    async (number, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${number}&page=1&category_ids=1`)
            return data
        } catch (error) {
            rejectWithValue(error.massige)
        }
    }
)

const ManyCatsReducer = createSlice({
    name: "Very_CatReducer",
    initialState: {
        data: [],
        loading: false,
        isSuccses: false,
        error: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetManyCats.pending, (state) => {
                state.loading = true
            })
            .addCase(GetManyCats.fulfilled, (state, {payload}) => {
                state.loading = false
                state.isSuccses = true
                state.data = payload
            })
            .addCase(GetManyCats.rejected, (state, {payload}) => {
                state.loading = false
                state.error = payload
            })
    }
})


export default ManyCatsReducer.reducer