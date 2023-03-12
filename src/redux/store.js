import createSagaMiddleware from "@redux-saga/core";
import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "src/redux/reducers";
import rootSaga from "src/redux/sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;
