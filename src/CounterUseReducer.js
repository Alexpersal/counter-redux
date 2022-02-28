import { useReducer } from "react";
import "./App.css";
import { counter, increment, reset } from "./counter";

export default function CounterUseReducer() {
  //const counter = (state) => state + 1;
  //const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(counter, 0);

  return (
    <>
      <h1>Counter use Reducer</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(increment(-1))}>-1</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </>
  );
}
