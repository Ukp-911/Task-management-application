import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:localStorage.getItem('pastes')? JSON.parse(localStorage.getItem('pastes')):[],
}
const pasteslice = createSlice({
    name:'paste',
    initialState,
    reducers:{
        addpaste:(state,action)=>{
            
        },
        deletepaste:(state,action)=>{

        },
        updatepaste:(state,action)=>{

        },
    },
})
export const {addpaste,deletepaste,updatepaste}=pasteslice.actions
export default pasteslice.reducer