import { createSlice } from "@reduxjs/toolkit";

const houseSlice = createSlice({
    name: 'updateHouse',
    initialState: {
        house: {
            G: 0,
            H: 0,
            R: 0,
            S: 0
        }
    },
    reducers: {
        updateHouse: (state, action) => {
            const prevHouse = state.house
            prevHouse[action.payload] += 1
        }
    }
})

export const { updateHouse } = houseSlice.actions
export default houseSlice.reducer