import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    user: {},
    error: ""
}

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    // return axios
    //     .get("https://jsonplaceholder.typicode.com/users/1")
    //     .then((resp) => resp.data)
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    return resp.data
})

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.user = action.error.message
        })
    }
})

export default userSlice.reducer