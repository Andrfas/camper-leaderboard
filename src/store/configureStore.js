import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { fetchUsers } from "../modules/users";
import users from "../modules/users";

export default function configureStore(initialState) {
  const rootReducer = combineReducers({
    users
  });

  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

  store.dispatch(fetchUsers());
  return store;
}
