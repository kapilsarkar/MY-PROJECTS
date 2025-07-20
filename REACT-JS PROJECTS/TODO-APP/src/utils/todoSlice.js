import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
         todos:[{id:nanoid(),text:"Hello World"}]
    },
    reducers:{
         
    },
})