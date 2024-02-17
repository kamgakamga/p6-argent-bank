import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import { Provider} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import { postLoginUser } from "./actions/user.action";

//Configuration de la store (de la base de donnée)
const store = configureStore({
   reducer:rootReducer, //association du reduicer et de la store
   devTools:true, //config du plugin devtools
})

store.dispatch(postLoginUser());

ReactDOM.render(
<Provider store={store}>
   <App /> 
</Provider>,
   document.getElementById('root')

);