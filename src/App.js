import React, { useState, useEffect } from "react";
import MainApp from "./app/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./app/redux/reducer";

let store = null;
const App = () => {
  const [isStoreReady, changeStore] = useState(false);

  const readyApp = () => {
    try {
      let reduxData = localStorage.getItem('reduxState');
      if (reduxData) {
        store = createStore(rootReducer, JSON.parse(reduxData));
      } else {
        store = createStore(rootReducer);
      }
      store.subscribe(() => {
        localStorage.setItem('reduxState', JSON.stringify(store.getState()));
        localStorage.setItem('userData', JSON.stringify(store.getState().userData));
      });
      changeStore(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    readyApp();
  }, []);
  return (
    <>
      {isStoreReady && <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={MainApp} />
          </Switch>
        </Router>
      </Provider>}
    </>
  );
};
export default App;
