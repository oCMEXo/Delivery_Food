import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OrderItemWithQuantity} from '../../../Page/Menu';
import React from "react";

interface UserState {
    email: string | null;
    token: string | null;
    id: string | null;
    order: OrderItemWithQuantity[];
}


const getInitialState = (): UserState => {
    const savedUser = localStorage.getItem('user');
    const parsedUser = savedUser ? JSON.parse(savedUser) : null;

    const order = JSON.parse(localStorage.getItem('order') || '[]');

    return {
        email: parsedUser?.email ?? null,
        token: parsedUser?.token ?? null,
        id: parsedUser?.id ?? null,
        order,
    };
};


const usersSlice = createSlice({
    name: 'users',
    initialState: getInitialState(),
    reducers: {
        setUser(state, action: PayloadAction<{ email: string; token: string; id: string }>) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;

            localStorage.setItem('user', JSON.stringify({
                email: state.email,
                token: state.token,
                id: state.id,
            }));
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
            state.order = [];
            localStorage.removeItem('user');

        },
        addOrder(state, action: PayloadAction<OrderItemWithQuantity>) {
            const newItem = action.payload;
            const existingIndex = state.order.findIndex(item => item.id === newItem.id);
            const maxQuantity = 999

            if (existingIndex !== -1) {
                state.order[existingIndex].quantity += newItem.quantity;
                if (state.order[existingIndex].quantity > maxQuantity) {
                    state.order[existingIndex].quantity = maxQuantity;
                }
            } else {
                state.order.push({
                    ...newItem,
                    quantity: Math.min(newItem.quantity, maxQuantity),
                });
            }


            localStorage.setItem('order', JSON.stringify(state.order));
        },
        clearOrder(state, action: PayloadAction<string>) {
            const idToRemove = action.payload;
            state.order = state.order.filter(item => item.id !== idToRemove);
            localStorage.setItem('order', JSON.stringify(state.order));         },
        clearOrderAll(state) {
            state.order = [];
            localStorage.removeItem('order');
        },
        decreaseQuantity(state, action: PayloadAction<string>) {
            const item = state.order.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            localStorage.setItem('order', JSON.stringify(state.order));
        },
        incrementQuantity(state, action: PayloadAction<string>) {
            const item = state.order.find(item => item.id === action.payload);
            if (item && item.quantity >= 1) {
                item.quantity += 1;
            }

            localStorage.setItem('order', JSON.stringify(state.order));
        }
    },
});

export const selectTotalQuantity = (state: { users: UserState }) =>
    (state.users.order ?? []).reduce((sum, item) => sum + (item.quantity ?? 0), 0);

export const {setUser, removeUser, addOrder, clearOrder, decreaseQuantity, incrementQuantity, clearOrderAll} = usersSlice.actions;
export default usersSlice.reducer;
