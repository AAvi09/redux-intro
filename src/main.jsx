import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./Store.jsx";
import { Provider } from "react-redux";

store.dispatch({ type: "account/deposit", payload: 1000 });
console.log(store.getState());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
