import { all } from "redux-saga/effects";
import userSaga from "src/redux/sagas/userSaga";

export default function* rootSaga() {
  yield all([userSaga()]);
}
