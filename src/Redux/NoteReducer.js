import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name:'notes',
    initialState: [{id:0,text:'title',content:'content'}],
    reducers:{
        addNote: (state,action) => [...state,action.payload],
        deleteNote: (state,action) => state.filter(item => item.id != action.payload)
    }
});

export const {addNote,deleteNote} = noteSlice.actions;
export default noteSlice.reducer;

 


