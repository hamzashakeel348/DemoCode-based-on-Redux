import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./routes";

import "./App.css";

const App: React.FC = () => {
  const initialStore = store({});
  return (
    <Provider store={store({})}>
      <Routes />
    </Provider>
  );
};

export default App;
