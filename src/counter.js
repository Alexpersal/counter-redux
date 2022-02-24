const INCREMENT = "INCREMENT";
export function increment(amount) {
  return { type: INCREMENT, amount };
}
const RESET = "RESET";
export function reset(amount) {
  return { type: RESET, amount };
}
export function counter(state, action) {
  console.log(state);
  switch (action.type) {
    case INCREMENT:
      return state + action.amount;
    case RESET:
      return 0;

    default:
      return state;
  }
}
