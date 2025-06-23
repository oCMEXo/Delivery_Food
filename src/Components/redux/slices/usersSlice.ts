import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OrderItemWithQuantity} from "../../../Page/Menu";


const initialState = {
    email: null,
    token: null,
    id: null,
    order: [] as OrderItemWithQuantity[],
};


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state){
            state.email = null;
            state.token = null;
            state.id = null;
        },
        addOrder(state, action: PayloadAction<OrderItemWithQuantity>) {
            const newItem = action.payload;
            const existingIndex = state.order.findIndex(item => item.id === newItem.id);

            if (existingIndex !== -1) {
                state.order[existingIndex].quantity += newItem.quantity;
            } else {
                state.order.push({ ...newItem });
            }

            localStorage.setItem('order', JSON.stringify(state.order));
        },
        clearOrder(state, action) {
            const idToRemove = action.payload;
            state.order = state.order.filter(item => item.id !== idToRemove);
            localStorage.setItem('order', JSON.stringify(state.order));
        },
    }
})

export const selectTotalQuantity = (state: any) =>
    state.users.order.reduce((sum, item) => sum + (item.quantity ?? 0), 0);


export const {setUser, removeUser, addOrder, clearOrder} = usersSlice.actions;
export default usersSlice.reducer;