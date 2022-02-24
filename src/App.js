import { createStore } from "redux";
import { Provider } from "react-redux";
import { counter } from "./counter";
import CounterUseReducer from "./CounterUseReducer";
import CounterRedux from "./CounterRedux";

const store = createStore(counter, 0);

export default function App() {
  return (
    <Provider store={store}>
      <>
        <CounterRedux></CounterRedux>
        <CounterUseReducer></CounterUseReducer>
        <CounterUseReducer></CounterUseReducer>
      </>
    </Provider>
  );
}
