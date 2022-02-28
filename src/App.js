import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import { counter } from "./counter";
import CounterUseReducer from "./CounterUseReducer";
import CounterRedux from "./CounterRedux";

const reducer = combineReducers({ counter });
const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <>
        <CounterRedux></CounterRedux>
        <CounterRedux></CounterRedux>
        <CounterUseReducer></CounterUseReducer>
        <CounterUseReducer></CounterUseReducer>
      </>
    </Provider>
  );
}
