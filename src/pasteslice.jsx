import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [],
}
const pasteslice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addpaste: (state, action) => {
            state.value.push(action.payload)
            localStorage.setItem('pastes',JSON.stringify(state.value))
        },
        deletepaste: (state, action) => {

        },
        updatepaste: (state, action) => {
            const req=state.value.findIndex(item=>item.id===action.payload.id)
            state.value[req]=action.payload
            localStorage.setItem("pastes",JSON.stringify(state.value))
        },
    },
})
export const { addpaste, deletepaste, updatepaste } = pasteslice.actions
export default pasteslice.reducer