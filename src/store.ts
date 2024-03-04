import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers/index";

// Configuration de la store (de la base de données)
const store = configureStore({
    reducer: rootReducer, // Association du reducer et de la store
    devTools: true, // Configuration du plugin devtools
});

export default store;
