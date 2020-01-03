import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { App } from "./components/App";
import { reducers } from "./reducers";
// interface AppProps {
//   color: string;
// }

// interface AppState {
//   counter?: number;
// }

// const App: React.FunctionComponent<AppProps> = (props): JSX.Element => {
//   const [counter, setCounter] = useState(0);

//   const onIncrement = () => {
//     setCounter(counter + 1);
//   };
//   const onDecrement = () => {
//     setCounter(counter - 1);
//   };

//   return (
//     <div>
//       <button onClick={onIncrement}>+</button>
//       <button onClick={onDecrement}>-</button>
//       {counter}
//     </div>
//   );
// };

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
