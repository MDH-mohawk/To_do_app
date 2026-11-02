import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name:'notes',
    initialState: [],
    reducers:{
        addNote: (state,action) => [...state,action.payload],
        deleteNote: (state,action) => state.filter(item => item.id != action.payload.id)
    }
});

export const {addNote,deleteNote} = noteSlice.actions;
export default noteSlice.reducer;

 


