import { createSlice } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";

const initialState = {
    cropid: localStorage.getItem("cropid") ? JSON.parse(localStorage.getItem("cropid")) : -1,
    cropName: localStorage.getItem("cropName") ? JSON.parse(localStorage.getItem("cropName")) : "Null"
}

const supervisedSlice = createSlice({
    name: "supervised",
    initialState,
    reducers: {
        setName: (state, action) => {
            const temp = action.payload
            state.cropName = temp

            // toast.success("name updated")
            // console.log("name in slice: ", state.cropName)
            localStorage.setItem("cropName", JSON.stringify(state.cropName))
        },
        setId: (state, action) => {
            const temp = action.payload
            state.cropid = temp

            // toast.success("id updated")
            // console.log("id in slice: ", state.cropid)
            localStorage.setItem("cropid", JSON.stringify(state.cropid))
        }
    }
})


export const {setName, setId} = supervisedSlice.actions
export default supervisedSlice.reducer