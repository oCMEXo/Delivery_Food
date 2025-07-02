import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OrderItemWithQuantity} from '../../../Page/Menu';

interface UserState {
    email: string | null;
    token: string | null;
    id: string | null;
    order: OrderItemWithQuantity[];
}

const initialState: UserState = {
    email: null,
    token: null,
    id: null,
    order: [],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ email: string; token: string; id: string }>) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.order = [];
        },
        addOrder(state, action: PayloadAction<OrderItemWithQuantity>) {
            const newItem = action.payload;
            const existingIndex = state.order.findIndex(item => item.id === newItem.id);

            if (existingIndex !== -1) {
                state.order[existingIndex].quantity += newItem.quantity;
            } else {
                state.order.push({...newItem});
            }

            localStorage.setItem('order', JSON.stringify(state.order));
        },
        clearOrder(state, action: PayloadAction<string>) {
            const idToRemove = action.payload;
            state.order = state.order.filter(item => item.id !== idToRemove);
            localStorage.setItem('order', JSON.stringify(state.order));
        },
    },
});

export const selectTotalQuantity = (state: { users: UserState }) =>
    state.users.order.reduce((sum, item) => sum + (item.quantity ?? 0), 0);

export const {setUser, removeUser, addOrder, clearOrder} = usersSlice.actions;
export default usersSlice.reducer;
