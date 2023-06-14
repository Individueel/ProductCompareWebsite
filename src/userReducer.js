import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: null,
    name: null,
    email: null,
    picture: null
}

export const userSlice = createSlice({
    name: 'loggedInUser',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer