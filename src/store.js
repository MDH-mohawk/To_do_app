import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './NoteReducer';

const store = configureStore({
    reducer:{
        notes:noteReducer
    }
})

export default store;