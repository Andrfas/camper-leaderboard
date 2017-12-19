import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";
import { fetchUsers } from "../actions/loadActions";

export default function configureStore(initialState) {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

  store.dispatch(fetchUsers()).then(() => console.log(store.getState()));
  return store;
}
