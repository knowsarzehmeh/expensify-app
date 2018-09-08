import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import ReduxStore from "./playround/redux101";

ReduxStore.subscribe(() => {
  console.log(ReduxStore.getState());
});
ReduxStore.dispatch({
  type: "INCREMENT"
});
ReduxStore.dispatch({
  type: "INCREMENT"
});

ReduxStore.dispatch({
  type: "RESET"
});

ReduxStore.dispatch({
  type: "DECREMENT"
});
ReactDOM.render(<AppRouter />, document.getElementById("root"));
registerServiceWorker();
