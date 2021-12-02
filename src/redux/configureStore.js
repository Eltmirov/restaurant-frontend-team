import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { tableReducer } from "./features/Table";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./features/Product";
import { newsReducer } from './features/NewsReducer';

export const store = createStore(
  combineReducers({
    tables: tableReducer,
    products: productReducer,
    news: newsReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
