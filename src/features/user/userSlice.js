import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading :false, 
    

}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    }
})

export default userSlice.reducer
