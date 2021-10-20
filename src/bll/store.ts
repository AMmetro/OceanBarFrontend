// import {ingridientsReducer} from "./ingridientsReducer";
import {cartReducer} from "./cartReducer";
import {combineReducers, createStore} from "redux"


const reducers = combineReducers({
    // ingridients: ingridientsReducer,
    cart: cartReducer
});

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
