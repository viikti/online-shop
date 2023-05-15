import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./Store/configureStore";
import Router from "./routes/Router";
import MainLayout from "./commonComponents/MainLayouts";

import { BrowserRouter } from "react-router-dom";

import "./Static/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainLayout>
          <Router />
        </MainLayout>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
