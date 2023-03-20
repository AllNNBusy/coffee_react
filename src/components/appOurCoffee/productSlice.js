import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [
        {name: 'AROMISTICO Coffee 1 kg', country: 'brasil', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '16.99$', id: 1,},
        {name: 'Solimo Coffee Beans 2 kg', country: 'kenya', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '6.99$', id: 2,},
        {name: 'Presto Coffee Beans 1 kg', country: 'columbia', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '6.99$', id: 3,},
        {name: 'AROMISTICO Coffee 1 kg', country: 'brasil', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '16.99$', id: 4,},
        {name: 'AROMISTICO Coffee 1 kg', country: 'brasil', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '16.99$', id: 5,},
        {name: 'AROMISTICO Coffee 1 kg', country: 'brasil', decr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: '16.99$', id: 6,},
    ],
    input: '',
    btn: '',
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        filterInput: (state, action) => {
            state.input = action.payload.toLowerCase();
        },
        filterBnt: (state, action) => {
            state.btn = action.payload;
        },
        removeFilter: state => {
            state.input = '';
            state.btn = '';
        }
    },
});

const {actions, reducer} = productSlice;

export default reducer;

export const { filterInput, filterBnt, removeFilter } = actions;