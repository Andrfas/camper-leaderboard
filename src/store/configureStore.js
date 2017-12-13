import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import promise from 'redux-promise';

export default function configureStore(initialState) {

  const createStoreWithMiddleware = applyMiddleware(
    promise
  )(createStore);
  const store = createStoreWithMiddleware(rootReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    
  return store;
}
